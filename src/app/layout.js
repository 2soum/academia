import { Geist, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://academia-zeta-five.vercel.app");
const SITE_NAME = "AcademIA";
const TITLE =
  "AcademIA · École française d'IA appliquée — juristes, marketing, secteur public";
const DESCRIPTION =
  "Organisme de formation Qualiopi spécialisé en intelligence artificielle appliquée. Six programmes certifiants pour juristes publics, marketeurs et acteurs du secteur public. Diagnostic gratuit, programme calé en 30 min.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · AcademIA" },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  robots: { index: true, follow: true },
  alternates: {
    canonical: SITE_URL,
    languages: { "fr-FR": SITE_URL, "x-default": SITE_URL },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description:
      "Maîtrisez l'IA appliquée en 30 jours, ou on vous rembourse. Diagnostic gratuit.",
  },
};

export const viewport = {
  themeColor: "#fbfbfd",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${geist.variable} ${bricolage.variable} antialiased`}
    >
      <body className="bg-paper text-ink font-sans selection:bg-brand/22 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
