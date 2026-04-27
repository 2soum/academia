import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "AcademIA — École française d'IA appliquée",
  description:
    "Organisme de formation Qualiopi spécialisé en intelligence artificielle appliquée au secteur public, juridique et marketing. Programmes courts, certifiants, conçus pour praticiens exigeants.",
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
    title: "AcademIA — École française d'IA appliquée",
    description:
      "Programmes Qualiopi en intelligence artificielle appliquée. Six parcours certifiants pour praticiens exigeants.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
