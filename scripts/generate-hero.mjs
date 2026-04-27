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

const DEFAULT_PROMPT = `Cinematic editorial photograph, vertical 3:4 portrait composition for a premium B2B website hero — ALIVE candid moment.

Subject: 3 racially-diverse French professionals (mid 30s to mid 40s — a Caucasian woman with shoulder-length light-brown hair tucked back, a Black man, and a North-African woman) caught mid-genuine-laugh during a training breakthrough. NOT posed.

Center of frame: the woman in a charcoal blazer is mid-real-laugh, leaning slightly forward, looking at her open silver MacBook screen with delight, one hand half-raised in a "got it!" gesture; her colleague the Black man, in a navy blazer over a crisp white shirt, leans in beside her with a broad warm smile, pointing gently at her laptop screen; the North-African woman across the table grins genuinely, looking up from her open Moleskine notebook, pen in hand. Hands gesturing, eyes bright, faces alive with intelligence and warmth. CAUGHT MID-MOMENT — like a real photograph of a real "aha" instant.

Setting: contemporary French institutional reading room — long polished oak conference table, floor-to-ceiling glass curtain wall behind and to the right overlooking soft grey Parisian rooftops, exposed pale-grey concrete columns, raw oak built-in shelving full of books on the back wall, suspended white LED pendant lights, polished light parquet floor.

Klein-blue accent: a saturated royal Yves Klein blue (#1e3a8a) document folder centered on the table next to the laughing woman.

Light: cool natural daylight from the window behind, slight blue cast, soft atmospheric haze, beautiful warm catch lights in eyes from the laptop screen reflection, soft directional fill on faces. Crisp, never harsh.

Color: predominantly cool whites, pale concrete greys, raw oak mid-tones, charcoal and navy blazers, white shirts, ONE saturated Klein blue accent on the folder.

Mood: serious B2B premium, French institutional, contemporary, deeply alive — genuine joy of discovery, warm collegial energy, intimate small-cohort feel. NEVER staged, never stock-photo-stiff.

Hands and faces clearly visible. NO logos on laptops, NO readable text on screens or notebooks, NO watermarks, NO brand marks.

Style: Hasselblad H6D 100MP, 50mm f/2.8, Cinestill 50 cool grade, ultra-sharp focus on faces, photographic realism, candid editorial corporate photography in the manner of Magnum Photos / Steve McCurry / Annie Leibovitz reportage.`;

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
      imageConfig: { aspectRatio: "3:4" },
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
