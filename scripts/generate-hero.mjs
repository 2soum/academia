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

const PROMPT = `Wide cinematic editorial photograph, ultrawide 16:9 composition for a dark luxe website hero banner.

Subject: A stately Parisian institutional library at night — Bibliothèque Mazarine / Conseil d'État interior style. Deep symmetric one-point perspective.

Composition: long corridor of dark walnut bookshelves filled with gilded leather-bound volumes receding into atmospheric haze. Polished black marble floor reflecting light subtly. A balcony with brass railings runs along the upper level.

Light: a single thin lime-green LED light line (#A1D85F) glows softly from below the balcony architrave in the mid-distance, casting a faint green reflection onto the marble floor. Warm amber pools of light from old brass desk lamps in the foreground. Volumetric beams visible through dim haze.

Mood: serious, scholarly, French institutional gravitas, B2B-premium, modern but timeless. No people anywhere, no faces, no readable text or titles, no logos, no watermarks.

Color grading: predominantly very dark charcoal and deep navy blacks. Single muted lime-green (#A1D85F) accent only on the architectural light detail. Warm amber from desk lamps. Shadow-heavy.

Style: shot on Hasselblad H6D 100MP, 35mm f/2.8 lens, Kodak Vision 3 cinematic color grade, ISO 100. Ultra-sharp, photographic realism, high dynamic range, dramatic chiaroscuro. Architectural editorial photography in the style of Candida Höfer.`;

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
