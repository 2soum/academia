#!/usr/bin/env node
// Generate a manifest of B2B trust visuals via Nano Banana Pro in parallel.
// Usage: GEMINI_API_KEY=... node scripts/generate-assets.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";

const KEY = process.env.GEMINI_API_KEY;
if (!KEY) {
  console.error("missing GEMINI_API_KEY");
  process.exit(1);
}
const MODEL = "gemini-3-pro-image-preview";

const ASSETS = [
  {
    name: "formateur-thiam.jpg",
    aspect: "3:4",
    prompt: `Cinematic editorial corporate portrait photograph, 3:4 vertical, studio-grade.
Subject: a confident West-African French male professional, mid 30s, with short dark hair and neatly trimmed beard, wearing a tailored charcoal-grey wool blazer over a crisp white open-collar shirt, no tie. Slight three-quarter angle, gazing thoughtfully off-camera, calm intelligent expression.
Setting: contemporary minimalist French institutional office. Slightly out-of-focus pale grey concrete wall behind. Soft natural daylight from a tall window on the left.
Light: soft directional cool natural daylight, very low contrast, color temperature ~5500K. Gentle catchlight in the eyes.
Color: cool neutral greys, charcoal blazer, white shirt, with a single muted royal Yves Klein blue (#1e3a8a) accent — a Klein-blue legal codex visible on a desk just within the frame edge.
Mood: serious, scholarly, B2B-premium, approachable, French gravitas. Editorial corporate portrait in the style of Annie Leibovitz, Platon, or Patrick Demarchelier.
ABSOLUTELY no captions, no text, no watermark, no logos.
Realistic photograph, ultra-sharp focus on the eyes, beautiful skin texture, natural color, magazine-quality. Hasselblad H6D 100MP, 85mm f/2.8.`,
  },
  {
    name: "scene-cohort.jpg",
    aspect: "16:9",
    prompt: `Cinematic editorial wide photograph, ultrawide 16:9, of an empty private executive cohort working session.
Subject: a long polished oak conference table in a contemporary French institutional space. Six neatly arranged workstations: closed silver-grey laptops (lids dark, no logos visible), Moleskine-style notebooks open with abstract handwritten lines (UNREADABLE — just shapes), brass pens, simple white porcelain coffee cups, one Klein-blue document folder centered on the table. The frame shows the table from an elevated three-quarter perspective. NO people anywhere.
Setting: floor-to-ceiling glass curtain wall on the right side overlooking soft grey Parisian rooftops in cool light, exposed pale concrete columns, raw oak built-in shelving on the back wall, suspended minimalist white LED pendant lights.
Single accent: saturated royal Yves Klein blue (#1e3a8a) document folder centered on the table — the visual anchor.
Light: cool natural daylight, slight blue cast, soft atmospheric haze, beautiful soft highlights.
Color: cool neutral whites, pale concrete greys, raw oak wood mid-tones, single Klein blue accent.
Mood: serious B2B premium, French institutional, contemporary, intimate small-cohort feel.
NO people, NO faces, NO readable text, NO logos, NO watermarks.
Style: Hasselblad H6D, 28mm wide, Cinestill 50 cool grade, ultra-sharp, photographic realism, architectural editorial photography in the style of Iwan Baan or Hélène Binet.`,
  },
  {
    name: "scene-attestation.jpg",
    aspect: "4:3",
    prompt: `Cinematic editorial close-up still-life photograph, 4:3, of an official-looking French training certification document on a polished oak desk.
Subject: a single A4 cream certificate-style document centered slightly angled on the table. Hint of formal typography (TOO SOFT TO READ — just suggestion of letters and a horizontal divider). Embossed gold-foil circular seal at the top right corner (just an abstract embossed disc — NO readable letters). One elegant matte-black-and-brushed-brass fountain pen lying diagonally next to it. A folded silk Klein-blue ribbon bookmark trailing across one corner. A few cream paper sheets fanned subtly behind. A simple oak desk surface in the foreground with a faint catch of warm light.
Light: warm directional desk lamp pool of light from the upper left, soft cool ambient fill from outside frame, gentle vignette.
Color: cream paper, deep oak wood tones, polished brass pen highlights, single muted royal Yves Klein blue (#1e3a8a) accent on the silk ribbon.
Mood: serious institutional, formal, French gravitas, B2B premium, scholarly success, official.
NO readable text, NO logos, NO watermarks, NO faces.
Style: Hasselblad H6D, 80mm macro f/4, soft cinematic light, ultra-sharp, photographic realism, editorial still-life in the style of Mathilde Bressy or Wes Anderson production design.`,
  },
];

async function generate({ name, aspect, prompt }) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}`;
  const body = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: {
      responseModalities: ["IMAGE"],
      imageConfig: { aspectRatio: aspect },
    },
  };
  const t0 = Date.now();
  process.stdout.write(`→ ${name} (${aspect}) ... `);
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const t = await res.text();
    console.log(`FAIL ${res.status} ${t.slice(0, 160).replace(/\s+/g, " ")}`);
    return null;
  }
  const data = await res.json();
  const inline = data?.candidates?.[0]?.content?.parts?.find(
    (p) => p.inlineData || p.inline_data,
  );
  const blob = inline?.inlineData || inline?.inline_data;
  if (!blob?.data) {
    console.log("no image part");
    console.log(JSON.stringify(data).slice(0, 360));
    return null;
  }
  const out = join(process.cwd(), "public", name);
  mkdirSync(dirname(out), { recursive: true });
  const buf = Buffer.from(blob.data, "base64");
  writeFileSync(out, buf);
  const dt = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`ok ${(buf.length / 1024).toFixed(1)} KB · ${dt}s`);
  return out;
}

const t0 = Date.now();
const results = await Promise.all(ASSETS.map(generate));
const ok = results.filter(Boolean).length;
console.log(
  `done ${ok}/${ASSETS.length} in ${((Date.now() - t0) / 1000).toFixed(1)}s`,
);
