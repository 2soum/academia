#!/usr/bin/env node
// Generate 3 in-section images for AcademIA — Pourquoi, Méthode, Programmes.
// Usage: GEMINI_API_KEY=... node scripts/generate-section-images.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";

const KEY = process.env.GEMINI_API_KEY;
if (!KEY) {
  console.error("missing GEMINI_API_KEY");
  process.exit(1);
}

const SHARED_STYLE = `Hasselblad H6D 100MP, 50mm f/2.8, Cinestill 50 cool grade, ultra-sharp focus, photographic realism, candid editorial corporate photography in the manner of Magnum Photos / Steve McCurry / Annie Leibovitz reportage. Predominantly cool whites, pale concrete greys, raw oak mid-tones, charcoal and navy blazers, white shirts, ONE saturated royal Yves Klein blue (#1e3a8a) accent. Cool natural daylight, slight blue cast, soft atmospheric haze, warm catch lights in eyes, soft directional fill. Crisp, never harsh. NO logos, NO readable text on screens or notebooks, NO watermarks, NO brand marks. Hands and faces clearly visible.`;

const JOBS = [
  {
    out: "section-pourquoi.jpg",
    aspect: "3:4",
    prompt: `Cinematic editorial photograph, vertical 3:4 portrait composition for a B2B website "Why us" section — INTIMATE focus moment of applied learning.

Subject: ONE French professional woman (mid 30s, North-African heritage, shoulder-length dark hair tucked behind ear, charcoal blazer over crisp white shirt) seated at a long polished oak conference table, deeply focused — eyes lowered to her open silver MacBook screen, one hand resting on a half-filled Moleskine notebook with handwritten notes, the other hand on the laptop trackpad. Caught mid-thought, a faint quiet smile of confidence — the moment a complex concept clicks. NOT posed, candid editorial.

Foreground anchor: a saturated royal Yves Klein blue (#1e3a8a) document folder fan-open on the table next to her, papers slightly visible. A black ballpoint pen rests on the notebook.

Setting: contemporary French institutional reading room — long polished oak conference table fills the frame, floor-to-ceiling glass curtain wall behind overlooking soft grey Parisian rooftops slightly out of focus, exposed pale-grey concrete columns, raw oak built-in shelving full of books out of focus.

Mood: deep concentration, quiet competence, the breakthrough moment captured as a still — premium, deliberate, French institutional, contemporary. Warmth and intelligence. NEVER staged.

${SHARED_STYLE}`,
  },
  {
    out: "section-methode.jpg",
    aspect: "16:9",
    prompt: `Cinematic editorial photograph, horizontal 16:9 landscape composition for a B2B website "Method" section — WIDE flat-lay storytelling shot of the training journey artifacts on a polished oak conference table.

Composition: top-down 25-degree angle wide shot. The whole table from above-front. Spread across the oak surface, intentionally arranged but natural:
- Open silver MacBook centered, slightly angled, screen facing the viewer (no readable content — soft abstract dark interface)
- A leather-bound Moleskine notebook open to the left of the laptop, handwritten architectural-style notes visible (no readable text, just rhythmic handwriting strokes)
- A saturated royal Yves Klein blue (#1e3a8a) document folder closed to the right of the laptop, with a small embossed seal in the corner
- A printed PDF attestation document partly visible at the right edge, with a Marianne-style seal and a Klein blue ribbon, no readable text
- A vintage fountain pen and a black ballpoint pen
- A small espresso cup half-empty
- A round pair of clear-frame eyeglasses folded
- A printed paper agenda with a hand-marked timeline showing 6 numbered milestones (numbers visible as 01–06, stylized, no other text)

Setting: long polished oak conference table, soft grey Parisian morning daylight pouring from a glass curtain wall on the right, slightly visible at the far right edge of the frame as a soft cool window light gradient. Pale-grey concrete and raw oak ambient context blurred out.

Mood: the orchestra of a complete pedagogical journey laid bare — every artifact tells one chapter. Premium, architectural, calm, deliberate, French institutional editorial.

${SHARED_STYLE}`,
  },
  {
    out: "section-programmes.jpg",
    aspect: "16:9",
    prompt: `Cinematic editorial photograph, horizontal 16:9 landscape composition for a B2B website "Programmes" section — COLLABORATIVE work-in-progress moment.

Subject: 4 racially-diverse French professionals (mid 30s to mid 40s — a Caucasian woman with a sharp bob and tortoise-shell glasses leaning over the table pointing at a shared MacBook screen, a Black man in a navy blazer leaning back in his chair listening attentively, a North-African man in a charcoal sweater taking notes in a Moleskine, an Asian woman in a fawn turtleneck mid-question with her hand slightly raised) gathered around a long polished oak conference table — IN THE MIDDLE of a working session.

Center of frame: the MacBook screen they're all looking at acts as the visual anchor (no readable content, a soft abstract dashboard with Klein blue accents). The pointing-woman's finger hovers near the screen, decisive. Glances cross — eye contact between the man taking notes and the speaking woman, real engagement.

Foreground accent: a saturated royal Yves Klein blue (#1e3a8a) document folder open on the table, with printed sheets fanning out. A second smaller Klein blue notebook closed beside it. A few coffee cups and water glasses scattered naturally.

Setting: contemporary French institutional reading room — long polished oak conference table, floor-to-ceiling glass curtain wall to the left overlooking soft grey Parisian rooftops, exposed pale-grey concrete columns, raw oak built-in shelving full of books on the back wall, suspended white LED pendant lights, polished light parquet floor.

Mood: serious B2B premium, working co-construction, alive collegial energy, the picture of a real workshop in motion. NEVER staged, never stock-photo-stiff.

${SHARED_STYLE}`,
  },
];

const MODELS = [
  "gemini-3-pro-image-preview",
  "gemini-3.0-pro-image-preview",
  "gemini-3-pro-image",
  "gemini-2.5-flash-image-preview",
  "gemini-2.5-flash-image",
];

async function tryGenerate(model, job) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${KEY}`;
  const body = {
    contents: [{ role: "user", parts: [{ text: job.prompt }] }],
    generationConfig: {
      responseModalities: ["IMAGE"],
      imageConfig: { aspectRatio: job.aspect },
    },
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    return { ok: false, err: `${res.status} ${text.slice(0, 160).replace(/\s+/g, " ")}` };
  }
  const data = await res.json();
  const part = data?.candidates?.[0]?.content?.parts?.find(
    (p) => p.inlineData || p.inline_data,
  );
  const inline = part?.inlineData || part?.inline_data;
  if (!inline?.data) return { ok: false, err: "no image part" };
  return {
    ok: true,
    mime: inline.mimeType || inline.mime_type || "image/jpeg",
    b64: inline.data,
  };
}

async function runJob(job) {
  for (const m of MODELS) {
    process.stdout.write(`→ ${job.out} via ${m} ... `);
    try {
      const r = await tryGenerate(m, job);
      if (r.ok) {
        const ext = r.mime.includes("png") ? "png" : "jpg";
        const out = join(process.cwd(), "public", job.out.replace(/\.jpg$/, "." + ext));
        mkdirSync(dirname(out), { recursive: true });
        const buf = Buffer.from(r.b64, "base64");
        writeFileSync(out, buf);
        console.log(`ok (${(buf.length / 1024).toFixed(1)} KB)`);
        return out;
      }
      console.log(`fail ${r.err}`);
    } catch (err) {
      console.log("error", err.message);
    }
  }
  console.log(`✗ ${job.out} all models failed`);
  return null;
}

const results = await Promise.all(JOBS.map(runJob));
console.log("\nDone:", results.filter(Boolean).length, "/", JOBS.length);
