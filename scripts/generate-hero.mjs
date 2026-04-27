#!/usr/bin/env node
// Generate hero image with Nano Banana Pro (Gemini 3 Pro Image).
// Usage: GEMINI_API_KEY=... node scripts/generate-hero.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";

const KEY = process.env.GEMINI_API_KEY;
if (!KEY) {
  console.error("missing GEMINI_API_KEY");
  process.exit(1);
}

const DEFAULT_PROMPT = `Wide cinematic editorial photograph, ultrawide 16:9 composition for a premium contemporary B2B website hero banner.

Subject: A contemporary French research institute / modern academic library interior. Think the modern wing of Sciences Po, Bibliothèque François-Mitterrand reading hall, Lieu de Vie Saclay, or the Cité de l'Architecture. Late afternoon, near blue hour, before any artificial light is needed.

Architecture: austere minimalist contemporary design. Floor-to-ceiling glass curtain wall on one side flooding the space with cool natural daylight. Polished pale-grey concrete floor with subtle reflections. Suspended minimal cylindrical pendant lights (off, design-piece style). Slim steel mullions. Modern raw oak built-in shelving on the back wall holding books in muted spines. High flat ceiling.

Composition: deep clean one-point perspective into the space. A long row of low-slung modernist designer lounge chairs upholstered in saturated royal Yves Klein velvet (#1E3A8A — vibrant, unmistakable, UNIFORM color across all chairs) lined along a single sleek oak bench in the foreground. Their backs catch the soft daylight. Subtle blue reflection on the polished concrete floor.

Light: cool, neutral natural daylight, slight blue cast, crisp whites, neutral concrete grays, soft cool shadows. ABSOLUTELY NO warm amber, NO golden hour, NO cream tones, NO yellow cast — color temperature 5800K minimum.

Mood: contemporary, refined, B2B-premium, French institutional gravitas, modern, austere yet welcoming, serene, slightly cinematic. No people anywhere, no faces, no readable text, no titles, no logos, no watermarks.

Color palette: predominantly cool off-whites and neutral pale concrete greys, dark charcoal accents, raw oak mid-tone wood. ONE saturated Yves Klein royal blue (#1E3A8A) accent on the entire row of velvet chairs — they are the visual anchor.

Style: shot on Hasselblad H6D 100MP, 24mm wide-angle f/5.6, Cinestill 50 cool grade, natural daylight, ultra-sharp focus throughout, photographic realism, high dynamic range, architectural editorial photography in the style of Hélène Binet, Iwan Baan, or Filip Dujardin.`;

const PROMPT = process.env.GEN_PROMPT || DEFAULT_PROMPT;

const MODELS = [
  "gemini-3-pro-image-preview",
  "gemini-3.0-pro-image-preview",
  "gemini-3-pro-image",
  "gemini-2.5-flash-image-preview",
  "gemini-2.5-flash-image",
];

async function tryGenerate(model) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${KEY}`;
  const body = {
    contents: [{ role: "user", parts: [{ text: PROMPT }] }],
    generationConfig: {
      responseModalities: ["IMAGE"],
      imageConfig: { aspectRatio: "16:9" },
    },
  };
  process.stdout.write(`→ ${model} ... `);
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    console.log(`fail ${res.status} ${text.slice(0, 180).replace(/\s+/g, " ")}`);
    return null;
  }
  const data = await res.json();
  const part = data?.candidates?.[0]?.content?.parts?.find(
    (p) => p.inlineData || p.inline_data,
  );
  const inline = part?.inlineData || part?.inline_data;
  if (!inline?.data) {
    console.log("no image part");
    console.log(JSON.stringify(data).slice(0, 400));
    return null;
  }
  console.log("ok");
  return {
    model,
    mime: inline.mimeType || inline.mime_type || "image/jpeg",
    b64: inline.data,
  };
}

let result = null;
for (const m of MODELS) {
  try {
    result = await tryGenerate(m);
  } catch (err) {
    console.log("error", err.message);
  }
  if (result) break;
}
if (!result) {
  console.error("all models failed");
  process.exit(2);
}

const ext = result.mime.includes("png") ? "png" : "jpg";
const out = join(process.cwd(), "public", `hero-academia.${ext}`);
mkdirSync(dirname(out), { recursive: true });
const buf = Buffer.from(result.b64, "base64");
writeFileSync(out, buf);
console.log(`saved ${out} (${(buf.length / 1024).toFixed(1)} KB) from ${result.model}`);
