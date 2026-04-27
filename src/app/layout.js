import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "AcademIA — École française d'IA appliquée · Marketing & Secteur public",
  description:
    "Organisme de formation Qualiopi spécialisé en intelligence artificielle appliquée au secteur public, juridique et marketing. Programmes courts, certifiants. Exigez l'excellence.",
  keywords: [
    "formation IA",
    "Qualiopi",
    "intelligence artificielle",
    "marketing IA",
    "juriste IA",
    "secteur public",
    "France",
  ],
  authors: [{ name: "AcademIA" }],
  openGraph: {
    title: "AcademIA — Exigez l'excellence en intelligence artificielle.",
    description:
      "École française de formation IA. Six programmes spécialisés. Cohortes restreintes, suivi humain, certification.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${instrument.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
