#!/usr/bin/env node
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";

const KEY = process.env.GEMINI_API_KEY;
if (!KEY) { console.error("missing GEMINI_API_KEY"); process.exit(1); }
const MODEL = "gemini-3-pro-image-preview";

const PROMPT = `Clean vector-style flat trademark logo, square 1:1 aspect, on pure white background.

Subject: the French national "Marque Qualiopi" certification badge — the official quality mark for vocational training organizations issued by the French Republic.

Composition (centered, faithful to the public mark):
- TOP: a small Marianne profile silhouette in dark navy, with the words "RÉPUBLIQUE FRANÇAISE" stacked beneath in two lines of small bold sans-serif. Below those, a thin line then the motto "Liberté · Égalité · Fraternité" in italic.
- MIDDLE: large word "Qualiopi" set in a refined modern serif italic at deep navy blue (#1c2840). Just to the LEFT of the wordmark: a stylized rising leaf / quality-check shape in vibrant lime-to-emerald green (#9bc34e to #5fa831 gradient) curving upward and forming a subtle checkmark.
- BOTTOM: tagline "La certification qualité des organismes prestataires de formation" in small dark-navy sans-serif tracking-wide.

Style: official badge, vector flat, sharp clean edges, no shadows, no photographic effects, no decoration, generous white space around the composition. Pure white background. Print-ready trademark identity.

NO additional logos, NO extra text, NO watermark, NO frames.`;

const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}`;
const body = {
  contents: [{ role: "user", parts: [{ text: PROMPT }] }],
  generationConfig: { responseModalities: ["IMAGE"], imageConfig: { aspectRatio: "1:1" } },
};
const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
if (!res.ok) { console.error(res.status, await res.text()); process.exit(2); }
const data = await res.json();
const inline = data?.candidates?.[0]?.content?.parts?.find(p => p.inlineData || p.inline_data);
const blob = inline?.inlineData || inline?.inline_data;
if (!blob?.data) { console.error("no image"); process.exit(3); }
const out = join(process.cwd(), "public", "qualiopi.png");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, Buffer.from(blob.data, "base64"));
console.log("saved", out, (Buffer.from(blob.data, "base64").length / 1024).toFixed(1) + " KB");
