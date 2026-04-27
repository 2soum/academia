#!/usr/bin/env node
// Generate the AcademIA Open Graph share banner (1200×630, social-ready).
// Usage: GEMINI_API_KEY=... node scripts/generate-og.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";

const KEY = process.env.GEMINI_API_KEY;
if (!KEY) {
  console.error("missing GEMINI_API_KEY");
  process.exit(1);
}

const PROMPT = `Premium B2B Open Graph share banner — horizontal landscape composition, 1200×630 ratio (~1.91:1), designed to look great when shared on LinkedIn, Twitter / X, WhatsApp.

Two-zone composition: LEFT 55% is a CLEAN typographic plate on a soft paper-white #fbfbfd background with a faint Klein-blue radial glow in the bottom-left corner, RIGHT 45% is an editorial photograph that bleeds to the right edge.

LEFT typographic plate:
- A premium 3D shield emblem at the top-left (royal navy + Klein blue + brushed silver bevel, white-to-cyan circuit-board brain inside, gold olive branches at the foot, small open book — same visual language as the AcademIA brand)
- Below the shield, in a refined humanist serif-leaning sans (Bricolage Grotesque / Cormorant feel), the wordmark "AcademIA" — "Academ" in deep navy #0a1c40, "IA" in saturated Klein blue #1e3a8a fading to #2d4fe0
- Below that, in a smaller refined sans, the tagline: "L'école française d'IA appliquée" in ink grey #1f2740
- Below that, a single line of micro-tags: "Juristes  ·  Marketing  ·  Secteur public" in pale ink #6b7280, all caps, wide-tracked
- A small Klein-blue chip in the bottom-left: "● Certifié Qualiopi" (white pill on faint Klein-blue tint)
- Generous breathing room, refined French institutional luxury hierarchy

RIGHT photograph (45% width, bleeding to right edge):
- Tight crop of two diverse French professionals (one Caucasian woman with shoulder-length light-brown hair in a charcoal blazer, one Black man in a navy blazer with crisp white shirt) shoulder-to-shoulder leaning over a polished oak table around an open silver MacBook, mid-genuine-laugh during a training breakthrough
- A saturated Klein-blue (#1e3a8a) document folder visible on the table
- Floor-to-ceiling Parisian glass curtain wall blurred in the background
- Soft cool natural daylight, warm catch lights in eyes from laptop screen
- Caught mid-moment, never staged, candid editorial reportage feel

A faint vertical hairline (1 px, ink at 12% opacity) divides the two zones.

Style: Hasselblad H6D 100MP, 50mm f/2.8, Cinestill 50 cool grade, ultra-sharp, photographic realism on the right zone; precision typographic art-direction on the left zone. Predominantly cool whites, pale paper greys, raw oak mid-tones, charcoal and navy blazers, ONE saturated Klein-blue accent. Premium, deliberate, never staged.

Hands and faces clearly visible. NO logos on laptops, NO readable text on screens, NO watermarks, NO brand marks other than the AcademIA wordmark. NO ".com", NO URL, NO call-to-action button.

Output: a single high-resolution image, 16:9 aspect, edge-to-edge composition.`;

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

const out = join(process.cwd(), "public", "og-image-raw.jpg");
mkdirSync(dirname(out), { recursive: true });
const buf = Buffer.from(result.b64, "base64");
writeFileSync(out, buf);
console.log(`saved ${out} (${(buf.length / 1024).toFixed(1)} KB) from ${result.model}`);
