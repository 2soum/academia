#!/usr/bin/env node
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";

const KEY = process.env.GEMINI_API_KEY;
if (!KEY) { console.error("missing GEMINI_API_KEY"); process.exit(1); }
const MODEL = "gemini-3-pro-image-preview";

const ASSETS = [
  {
    name: "scene-cohort.jpg",
    aspect: "16:9",
    prompt: `Cinematic editorial wide photograph, ultrawide 16:9, of a small French executive cohort training session in progress.

Subject: 5 racially-diverse French professionals (mix of men and women, mid 30s to mid 40s, including one West-African origin man, one North-African origin woman, two Caucasian women, one Caucasian man) seated around a long polished oak conference table in a contemporary French institutional space. Warm natural body language — one woman speaks while gesturing at her open MacBook screen, two others lean in attentively, one smiles broadly while taking notes in a Moleskine, one nods. CANDID moment, NOT posed. All facial expressions warm, engaged, intelligent — happy adults learning together.

Setting: floor-to-ceiling glass curtain wall on the right overlooking soft grey Parisian rooftops, exposed pale concrete columns, raw oak built-in shelving on the back wall, suspended white LED pendant lights, polished light parquet floor.

Klein-blue accent: a bright royal Yves Klein blue (#1e3a8a) document folder on the table near the speaker.

Light: cool natural daylight, slight blue cast from the window, soft atmospheric haze, beautiful catch lights in eyes.

Color: predominantly cool whites, pale concrete greys, raw oak mid-tones, single Klein blue accent.

Mood: serious B2B premium, French institutional, contemporary, warm collegial atmosphere, alive and authentic, NOT staged.

Hands and faces visible. NO extreme close-ups. NO logos, NO readable text, NO watermarks, NO brand marks anywhere.

Style: Hasselblad H6D 100MP, 35mm f/2.8, Cinestill 50 cool grade, ultra-sharp, photographic realism, candid corporate photography in the style of Magnum Photos / Steve McCurry editorial.`,
  },
  {
    name: "alumni-group.jpg",
    aspect: "16:9",
    prompt: `Cinematic editorial wide group photograph, 16:9, of 8 happy French training alumni standing and seated casually in a contemporary institutional space.

Subject: 8 racially-diverse French professionals (mix of men and women, ages mid 20s to early 50s, including diverse ethnic backgrounds — Black, North-African, East-Asian, Caucasian), business-casual attire (charcoal/navy blazers, crisp white/grey/cream shirts, no ties, smart but not stiff), genuine warm smiles, some standing, some leaning casually against a polished oak credenza, mid-conversation. CANDID moment like a between-sessions photo. All facial expressions natural, authentic, intelligent.

Setting: contemporary minimalist French institutional foyer — floor-to-ceiling glass curtain wall on the left side, polished pale concrete floor reflecting subtly, raw oak built-in shelving on the back wall, exposed white ceiling beams, suspended minimal LED pendant lights.

One person holds a Klein-blue folder; one woman is smiling broadly; everyone looks relaxed and confident.

Light: cool natural daylight from the left, soft, gentle, with beautiful highlights on faces. Color temperature ~5500K.

Color: predominantly cool neutral whites and greys, charcoal blazers, raw oak mid-tones, single Klein-blue (#1e3a8a) accent on the folder.

Mood: warm professional, alive, B2B premium, French institutional, serene shared confidence, group camaraderie.

NO logos, NO readable text, NO watermarks. NO posed line-up — natural informal grouping.

Style: Hasselblad H6D 100MP, 50mm f/4, natural daylight, ultra-sharp, photorealistic, editorial group portrait in the style of Annie Leibovitz / Patrick Demarchelier corporate work.`,
  },
  {
    name: "testimonial-cmartin.jpg",
    aspect: "1:1",
    prompt: `Editorial close-up corporate portrait photograph, 1:1 square format.

Subject: a confident French professional woman, 45 years old, Caucasian, with shoulder-length light-brown hair softly pulled back, light makeup, wearing a charcoal-grey blazer over a cream-coloured silk blouse, no jewelry except small gold studs. Calm intelligent warm smile, slight head tilt, looking three-quarter at the camera.

Setting: slightly out-of-focus contemporary French institutional office in cool natural light. Pale grey concrete wall behind her with a hint of a window edge.

Light: soft directional natural daylight from the left, low contrast, color temperature 5500K. Beautiful catch light in the eyes.

Color: cool greys, charcoal blazer, warm cream blouse, very subtle Klein-blue (#1e3a8a) hint visible as a folder edge in the deeply blurred background.

Mood: trustworthy, intelligent, warm, experienced B2B leader, approachable French institutional credibility.

NO captions, NO text, NO watermark, NO logo.

Realistic photograph, ultra-sharp focus on the eyes, beautiful natural skin texture, shot on Hasselblad H6D 100MP, 85mm f/2.8, magazine-quality editorial portrait.`,
  },
  {
    name: "testimonial-ldubois.jpg",
    aspect: "1:1",
    prompt: `Editorial close-up corporate portrait photograph, 1:1 square format.

Subject: a confident French professional woman, 38 years old, Caucasian, with elegant short bobbed dark-chestnut hair, light natural makeup, wearing a tailored deep-navy blazer over a white silk blouse, single thin gold necklace. Bright authentic open smile, looking directly at the camera.

Setting: slightly out-of-focus contemporary creative French communications agency office in cool light. Soft pale-grey wall behind, subtle warm wooden shelf hint at the edge.

Light: soft directional natural daylight, low contrast, slightly warmer fill on the face. Color temperature ~5300K.

Color: cool greys, navy blazer, white blouse, subtle Klein-blue accent in deeply-blurred background.

Mood: creative, energetic, intelligent, warm B2B leader, magazine-cover poise.

NO text, NO logo, NO watermark.

Realistic ultra-sharp photograph. Hasselblad H6D 100MP, 85mm f/2.8, beautiful natural skin texture, magazine-quality editorial portrait.`,
  },
  {
    name: "testimonial-skhelifi.jpg",
    aspect: "1:1",
    prompt: `Editorial close-up corporate portrait photograph, 1:1 square format.

Subject: a confident French male professional, 35 years old, of North-African heritage, with short dark hair, clean-shaven jaw with very light shadow, wearing a charcoal-grey wool blazer over a crisp white open-collar shirt. Calm friendly subtle smile, slight three-quarter angle, looking just past the camera.

Setting: slightly out-of-focus contemporary French government / institutional office. Pale concrete wall behind, hint of a Klein-blue legal codex on a desk edge in the deeply-blurred background.

Light: soft directional natural daylight from the right, low contrast, color temperature 5500K. Subtle catch light in the eyes.

Color: cool neutral greys, charcoal blazer, white shirt, single Klein-blue (#1e3a8a) accent in the background.

Mood: trustworthy, intelligent, French institutional gravitas, calm, professional, warm.

NO text, NO logo, NO watermark.

Realistic ultra-sharp photograph. Hasselblad H6D 100MP, 85mm f/2.8, beautiful natural skin texture, editorial portrait in the style of Platon / Annie Leibovitz.`,
  },
];

async function generate({ name, aspect, prompt }) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}`;
  const body = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: { responseModalities: ["IMAGE"], imageConfig: { aspectRatio: aspect } },
  };
  const t0 = Date.now();
  process.stdout.write(`→ ${name} (${aspect}) ... `);
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!res.ok) {
    const t = await res.text();
    console.log(`FAIL ${res.status} ${t.slice(0, 160).replace(/\s+/g, " ")}`);
    return null;
  }
  const data = await res.json();
  const inline = data?.candidates?.[0]?.content?.parts?.find(p => p.inlineData || p.inline_data);
  const blob = inline?.inlineData || inline?.inline_data;
  if (!blob?.data) { console.log("no image"); return null; }
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
console.log(`done ${results.filter(Boolean).length}/${ASSETS.length} in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
