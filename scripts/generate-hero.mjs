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

const DEFAULT_PROMPT = `Wide cinematic editorial photograph, ultrawide 16:9 composition for a bright premium B2B website hero banner.

Subject: A stately Parisian institutional library reading room at golden afternoon hour — Salle Labrouste / Bibliothèque Sainte-Geneviève / Richelieu Salle Ovale style. Deep symmetric one-point perspective.

Composition: long rows of polished oak reading tables with classic brass desk lamps (unlit), tall arched windows on the sides flooding the space with warm directional daylight, polished light parquet wood floor, slender ornate cast-iron columns rising to a vaulted ceiling, walls lined with leather-bound books.

Light: bright golden-hour natural daylight pouring through the windows; visible volumetric light beams with floating dust particles. Warm honey, cream and soft amber tones. Soft, gentle shadows.

Single accent: subtle royal Yves Klein blue (#1E3A8A) — appears as the velvet upholstery of one prominent reading chair in the foreground and as a faint cool ambient glow on the underside of one architrave. Keep it discreet but unmistakable.

Mood: scholarly, luminous, French institutional gravitas, B2B-premium, classical yet modern, serene. No people anywhere, no faces, no readable text or titles, no logos, no watermarks.

Color grading: predominantly warm cream / soft amber / pale honey wood tones / luminous off-white. One Klein-blue accent. High dynamic range. Bright but never blown out.

Style: shot on Hasselblad H6D 100MP, 35mm f/4 lens, Kodak Portra 400 film color, natural daylight, ultra-sharp, photographic realism. Architectural editorial photography in the style of Candida Höfer.`;

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
