#!/usr/bin/env node
// Tight horizontal AcademIA logo lockup (transparent, no padding).
// Usage: GEMINI_API_KEY=... node scripts/generate-logo-v2.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";

const KEY = process.env.GEMINI_API_KEY;
if (!KEY) {
  console.error("missing GEMINI_API_KEY");
  process.exit(1);
}

const PROMPT = `Premium institutional logo lockup — HORIZONTAL composition, edge-to-edge, NO PADDING, NO whitespace borders. Designed for use as a website header logo at small sizes (32 px tall up to 96 px tall) — must remain crisp and readable.

Composition: a glossy 3D shield emblem on the LEFT, immediately followed by the wordmark "AcademIA" on the RIGHT, both vertically centered relative to each other. The shield occupies roughly 30% of the width, the wordmark about 65%, with a tight 5% gap between them. The full lockup TOUCHES the canvas edges on left/right/top/bottom — zero margin.

Shield (left, ~30% width):
- Modern royal-blue 3D shield with a soft brushed-metal silver bevel and double-line trim
- Inside the shield: a stylized white-to-cyan circuit-board brain glowing softly, half traditional brain hemispheres, half geometric circuit nodes connected by clean lines and small dots
- Below the brain at the foot of the shield: a small open white book with delicate page lines
- Subtle gold olive-laurel branches curving around the lower edges of the shield (left and right), classical academic motif
- Royal blue background gradient inside the shield (deep navy #0a1c40 at top, brighter Klein blue #1e3a8a at bottom), with a soft inner glow and a few faint constellation dots
- Silver shield trim has a subtle highlight on the top-left edge, classy not cartoonish

Wordmark (right, ~65% width):
- The word "AcademIA" written in a refined serif-leaning humanist sans (think Trajan-meets-Bodoni, or a tasteful Cormorant / Playfair Display weight)
- "Academ" rendered in a deep navy ink #0a1c40 (same as shield top), generous weight, slightly tightened tracking
- "IA" rendered in a saturated bright Klein blue #1e3a8a fading to a brighter cyan-blue #2d4fe0 on the final stroke (subtle vertical gradient, NOT a color clash)
- Strong contrast between the gravitas of "Academ" and the energetic "IA" suffix
- The "I" and "A" of IA are slightly tighter together; the cap height matches "Academ" exactly
- Letterforms have a faint inner specular highlight, premium not garish

Background: TRANSPARENT (PNG alpha channel) — pure transparency around all elements. No drop shadow on the canvas, no halo, no rectangular plate.

Style: premium French institutional brand identity, contemporary 2026 — think Sciences Po crossed with a Sequoia portfolio brand book. Sharp vector-grade rendering, perfect kerning, anti-aliasing tuned for small-size legibility. Master-grade.

Output: a single PNG with transparency, horizontal aspect roughly 3:1 to 4:1, the whole composition extending to the very edges of the frame.

NO photographic background. NO white plate. NO drop shadow on the canvas. NO repeats. NO text other than "AcademIA". NO ".com" or tagline.`;

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
    console.log(`fail ${res.status} ${text.slice(0, 160).replace(/\s+/g, " ")}`);
    return null;
  }
  const data = await res.json();
  const part = data?.candidates?.[0]?.content?.parts?.find(
    (p) => p.inlineData || p.inline_data,
  );
  const inline = part?.inlineData || part?.inline_data;
  if (!inline?.data) {
    console.log("no image part");
    return null;
  }
  console.log("ok");
  return {
    model,
    mime: inline.mimeType || inline.mime_type || "image/png",
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
const out = join(process.cwd(), "public", `logo-academia-v2.${ext}`);
mkdirSync(dirname(out), { recursive: true });
const buf = Buffer.from(result.b64, "base64");
writeFileSync(out, buf);
console.log(`saved ${out} (${(buf.length / 1024).toFixed(1)} KB) from ${result.model}`);
