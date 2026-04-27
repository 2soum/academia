// Tous les CTAs de prise de rendez-vous pointent vers cal.com.
// Remplacer ce handle quand le compte définitif est créé.
const CAL_URL = "https://cal.com/academia";

const programmes = [
  {
    no: "I",
    code: "JUR-IA-101",
    title: "IA pour juristes publics",
    summary:
      "Maîtriser les usages, les risques, la rédaction assistée — sans compromis sur la conformité.",
    topics: [
      "Rédaction d'actes administratifs assistée",
      "Détection de risques RGPD en pratique",
      "Audit de prompts juridiques",
      "Chaîne de validation conformité",
    ],
    duration: "21 h",
    sessions: "7 modules · 3 h",
    audience: "Juristes · agents publics",
    format: "100 % à distance",
    cert: "Attestation Qualiopi",
    funding: "CPF · OPCO · plan",
    badge: "Phare",
  },
  {
    no: "II",
    code: "MKT-IA-201",
    title: "Marketing augmenté par l'IA",
    summary:
      "Pipelines de contenu, copywriting structuré, mesure d'impact. Du brief à la campagne.",
    topics: [
      "Brief → angle → calendrier éditorial",
      "Copywriting structuré (frameworks)",
      "Pipelines visuels (image, vidéo)",
      "Tracking ROI et A/B testing",
    ],
    duration: "28 h",
    sessions: "9 modules · 3 h",
    audience: "DirCom · marketing",
    format: "Mixte synchrone",
    cert: "Attestation Qualiopi",
    funding: "CPF · OPCO · plan",
    badge: null,
  },
  {
    no: "III",
    code: "VEI-IA-110",
    title: "Veille & rédaction augmentée",
    summary:
      "Synthèses sourcées, dossiers thématiques, livrables vérifiables — sans hallucination.",
    topics: [
      "Sourcing automatisé multi-canaux",
      "Synthèses citationnelles vérifiables",
      "Notes de veille thématiques",
      "Détection de signaux faibles",
    ],
    duration: "14 h",
    sessions: "5 modules · 3 h",
    audience: "Analystes · chargés d'études",
    format: "100 % à distance",
    cert: "Attestation Qualiopi",
    funding: "CPF · OPCO · plan",
    badge: null,
  },
  {
    no: "IV",
    code: "PRT-IA-301",
    title: "Prompting opérationnel",
    summary:
      "Architecture du prompt, gabarits, chaînages. Méthode complète et reproductible.",
    topics: [
      "Anatomie d'un prompt qui marche",
      "Bibliothèque de gabarits métier",
      "Chaînage et orchestration de prompts",
      "Évaluation et itération",
    ],
    duration: "16 h",
    sessions: "Atelier intensif · 2 j",
    audience: "Tous métiers",
    format: "Présentiel ou visio",
    cert: "Attestation Qualiopi",
    funding: "CPF · OPCO · plan",
    badge: "Nouveau",
  },
  {
    no: "V",
    code: "AGT-IA-401",
    title: "Agents & automatisation",
    summary:
      "Orchestrer plusieurs modèles, outils et bases pour des workflows fiables.",
    topics: [
      "Architecture multi-agents",
      "Connecteurs & bases de données",
      "Orchestration et garde-fous",
      "Mise en production et supervision",
    ],
    duration: "21 h",
    sessions: "7 modules · 3 h",
    audience: "Tech · ops · cellule data",
    format: "Mixte synchrone",
    cert: "Attestation Qualiopi",
    funding: "CPF · OPCO · plan",
    badge: null,
  },
  {
    no: "VI",
    code: "CMP-IA-205",
    title: "Conformité & prompt sécurité",
    summary:
      "Données sensibles, RGPD, traçabilité — produire en confiance avec l'IA générative.",
    topics: [
      "Cartographie des risques data",
      "RGPD appliqué aux LLM",
      "Traçabilité et journalisation",
      "Politique d'usage interne",
    ],
    duration: "18 h",
    sessions: "6 modules · 3 h",
    audience: "DPO · RSSI · juristes",
    format: "100 % à distance",
    cert: "Attestation Qualiopi",
    funding: "CPF · OPCO · plan",
    badge: null,
  },
];

const methode = [
  {
    no: "01",
    title: "Diagnostic & cadrage",
    body: "30 min avec un conseiller pour cadrer objectifs, cas d'usage, budget, calendrier.",
    detail: "Visio · sans engagement",
  },
  {
    no: "02",
    title: "Plan pédagogique chiffré",
    body: "Programme calé sur vos contraintes, livré en moins de 48 h, financement OPCO/CPF inclus.",
    detail: "PDF + convention",
  },
  {
    no: "03",
    title: "Démarrage en cohorte",
    body: "Accès e-learning ouverts, calendrier livré, café-classe d'introduction avec le formateur.",
    detail: "Cohorte limitée à 21",
  },
  {
    no: "04",
    title: "Modules + livrables",
    body: "Capsules courtes, cas réels, exercices corrigés individuellement par Diakaryou.",
    detail: "Suivi hebdomadaire",
  },
  {
    no: "05",
    title: "Attestation & jury",
    body: "Document officiel signé, présentation devant jury indépendant pour validation des acquis.",
    detail: "PDF Qualiopi",
  },
  {
    no: "06",
    title: "Certification + alumni",
    body: "Certificat France Compétences, accès à vie aux mises à jour, communauté privée.",
    detail: "Reconnaissance officielle",
  },
];

const pourquoi = [
  {
    no: "01",
    eyebrow: "Méthode",
    title: "Pratique, cadré, immédiatement réutilisable.",
    body: "Rien de générique. Chaque module porte un livrable concret que vos équipes activent dès la fin de la session.",
  },
  {
    no: "02",
    eyebrow: "Sur-mesure",
    title: "Ajusté à vos contraintes métier.",
    body: "Programmes co-construits avec votre cellule formation. Cas issus de votre secteur — droit public, marketing, communication.",
  },
  {
    no: "03",
    eyebrow: "Suivi humain",
    title: "Un humain, à chaque étape.",
    body: "Pas de tunnel automatisé. Conseiller dédié, formateur joignable, retour personnalisé sur chaque livrable.",
  },
  {
    no: "04",
    eyebrow: "Garantie",
    title: "Engagement résultat — ou remboursement.",
    body: "Si vos équipes n'ont pas activé un cas d'usage opérationnel à l'issue, on rembourse. Inscrit à la convention.",
  },
];

const temoignages = [
  {
    quote:
      "Top suivi. Les cas d'usage publics étaient enfin sérieux, pas des gadgets de démo. ROI sur la semaine d'après.",
    name: "Camille Martin",
    role: "Responsable conformité — collectivité territoriale",
    metric: "8 h / sem économisées",
    avatar: "/testimonial-cmartin.jpg",
  },
  {
    quote:
      "Les agents et l'automatisation ont transformé ma manière de produire. Je signe pour l'équipe.",
    name: "Léa Dubois",
    role: "Directrice de la communication",
    metric: "+ 220 % volume publié",
    avatar: "/testimonial-ldubois.jpg",
  },
  {
    quote:
      "Accompagnement, écoute, rigueur. AcademIA tient ses promesses — du diagnostic à la certification.",
    name: "Sami Khelifi",
    role: "Juriste — service public",
    metric: "Audit RGPD validé",
    avatar: "/testimonial-skhelifi.jpg",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <TrustStrip />
      <Cohorte />
      <Programmes />
      <Methode />
      <Pourquoi />
      <Preuves />
      <Formateur />
      <Temoignages />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ───────────────────────── NAV ─────────────────────────────────── */

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/85 border-b border-ink/10">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 h-[88px] flex items-center justify-between gap-6">
        <a
          href="#top"
          aria-label="AcademIA"
          className="inline-flex items-center gap-3 leading-none shrink-0"
        >
          <img
            src="/logo-academia.png"
            alt="AcademIA · École française d'IA appliquée"
            className="h-14 md:h-16 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          <a href="#programmes" className="nav-link">Programmes</a>
          <a href="#methode" className="nav-link">Méthode</a>
          <a href="#formateur" className="nav-link">Formateur</a>
          <a href="#temoignages" className="nav-link">Témoignages</a>
          <a href="#preuves" className="nav-link">Qualiopi</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+33638368218"
            className="hidden md:inline-flex items-center gap-2.5 px-4 h-10 rounded-full border border-ink/15 bg-paper hover:bg-paper-2 transition-colors group"
            aria-label="Appeler AcademIA"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 fill-none stroke-brand stroke-[2.4] group-hover:stroke-brand-bright"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span className="text-[13.5px] font-semibold text-ink tab-nums">
              06 38 36 82 18
            </span>
          </a>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand text-[13.5px] py-2.5 px-5"
          >
            Candidater
            <span className="arrow" aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ───────────────────────── HERO ────────────────────────────────── */

function Hero() {
  return (
    <section
      id="top"
      className="relative grid grid-cols-1 lg:grid-cols-[1.18fr_1fr] items-stretch lg:min-h-[calc(100svh-80px)] lg:max-h-[860px] overflow-hidden border-b border-ink/8"
    >
      {/* TEXT — left */}
      <div className="order-2 lg:order-1 flex items-center px-6 md:px-10 lg:pl-12 xl:pl-20 py-14 lg:py-12">
        <div className="w-full max-w-[640px]">
          <div className="mb-7">
            <span className="chip">
              <span className="dot" />
              Admission sur sélection · cohorte restreinte
            </span>
          </div>
          <h1 className="display-xl text-ink max-w-[20ch]">
            Vos équipes maîtrisent l'IA en{" "}
            <span className="text-brand">30 jours</span>.{" "}
            <span className="text-ink-500 font-normal">
              Sinon, on rembourse.
            </span>
          </h1>
          <p className="mt-7 max-w-[54ch] text-[17px] md:text-[18px] text-ink-500 leading-[1.55]">
            L'école française d'IA appliquée. Pour juristes publics,
            marketeurs et acteurs du secteur public.{" "}
            <span className="text-ink font-medium">
              Diagnostic gratuit en 30 minutes.
            </span>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand"
            >
              Lancer mon diagnostic
              <span className="arrow" aria-hidden>→</span>
            </a>
            <a href="#programmes" className="btn-ghost">
              Voir les programmes
            </a>
          </div>
          {/* Trust row */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-2">
              <PortraitAvatar src="/testimonial-cmartin.jpg" alt="C. Martin" />
              <PortraitAvatar src="/testimonial-ldubois.jpg" alt="L. Dubois" />
              <PortraitAvatar src="/testimonial-skhelifi.jpg" alt="S. Khelifi" />
            </div>
            <span className="h-4 w-px bg-ink/15" />
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-[1.5px]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    className="h-[12.5px] w-[12.5px] fill-brand"
                  >
                    <path d="M10 1.6l2.5 5.9 6.4.5-4.9 4.2 1.5 6.2L10 15.3l-5.5 3.1 1.5-6.2L1 8l6.4-.5z" />
                  </svg>
                ))}
              </div>
              <span className="text-[13px] font-semibold text-ink leading-none">
                5,0/5
              </span>
            </div>
            <span className="h-4 w-px bg-ink/15 hidden sm:inline-block" />
            <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-ink-500 leading-none whitespace-nowrap hidden sm:inline">
              Certifié Qualiopi
            </span>
          </div>
        </div>
      </div>

      {/* IMAGE — full-bleed right */}
      <div className="order-1 lg:order-2 relative h-[440px] lg:h-auto bg-paper-2">
        <img
          src="/hero-academia.jpg"
          alt="Salle de lecture AcademIA — promotion en session"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle paper-fade on the left edge to blend with text column */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent hidden lg:block pointer-events-none"
        />
        {/* Floating cohort badge */}
        <div className="absolute bottom-5 left-5 right-5 lg:left-auto lg:right-6 lg:bottom-6 lg:max-w-[300px] flex items-center gap-3 bg-paper/95 backdrop-blur-md border border-ink/12 rounded-sm px-4 py-3 shadow-[0_8px_28px_-12px_rgba(10,14,26,0.18)]">
          <span className="inline-block w-2 h-2 rounded-full bg-brand shrink-0" />
          <div className="min-w-0 flex-1">
            <div className="text-[13.5px] font-semibold text-ink leading-tight">
              Diagnostic gratuit · 30 min
            </div>
            <div className="text-[11.5px] text-ink-500 leading-tight mt-0.5">
              Un conseiller cadre votre besoin
            </div>
          </div>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-semibold text-brand hover:text-brand-bright whitespace-nowrap shrink-0"
          >
            Candidater →
          </a>
        </div>
      </div>
    </section>
  );
}

function PortraitAvatar({ src, alt }) {
  return (
    <span className="relative inline-block h-7 w-7 rounded-full overflow-hidden ring-2 ring-paper border border-ink/15 shadow-[0_1px_3px_rgba(10,14,26,0.18)]">
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
    </span>
  );
}

/* ───────────────────────── TRUST STRIP ─────────────────────────── */

function TrustStrip() {
  const labels = ["CPF · Compte personnel", "OPCO · plan de développement", "France Compétences", "Convention conforme"];
  return (
    <section className="border-y border-ink/8 bg-paper-2/40">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-6 flex flex-wrap items-center gap-x-10 gap-y-5">
        <a href="#preuves" className="flex items-center gap-3 group">
          <img
            src="/qualiopi.png"
            alt="Marque Qualiopi · La certification qualité des organismes prestataires de formation"
            className="h-14 w-14 object-contain shrink-0"
          />
          <div className="leading-tight">
            <div className="text-[14.5px] font-semibold text-ink group-hover:text-brand transition-colors">
              Certifié Qualiopi
            </div>
            <div className="mono text-[10px] tracking-[0.16em] uppercase text-ink-500 mt-1">
              Action de formation · audit conforme
            </div>
          </div>
        </a>
        <span className="hidden md:block h-12 w-px bg-ink/12" />
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {labels.map((l) => (
            <span
              key={l}
              className="font-medium text-[13.5px] tracking-[-0.005em] text-ink-700"
            >
              {l}
            </span>
          ))}
        </div>
        <span className="hidden lg:block flex-1 h-px bg-ink/8" />
        <a
          href="#preuves"
          className="hidden md:inline-flex items-center gap-2 mono text-[10.5px] tracking-[0.18em] uppercase text-ink-500 hover:text-brand transition-colors"
        >
          Voir les preuves <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}

/* ───────────────────────── COHORTE ─────────────────────────────── */

function Cohorte() {
  const stats = [
    ["Format", "Cohortes restreintes · à distance"],
    ["Admission", "Sur dossier + entretien"],
    ["Livrables", "Corrigés individuellement"],
    ["Réseau alumni", "Slack privé · à vie"],
  ];
  return (
    <section className="px-6 md:px-10 py-24 md:py-28 border-t border-ink/8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-end mb-10 md:mb-14 scroll-rise">
          <div className="col-span-12 md:col-span-7">
            <span className="eyebrow-brand mb-5 block">01 / Cohorte</span>
            <h2 className="display-lg text-ink text-balance max-w-[22ch]">
              Cohortes restreintes.{" "}
              <span className="text-ink-400">Sélection sur dossier.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[16px] md:text-[17px] leading-[1.6] text-ink-500">
              AcademIA recrute par cohortes fermées — admission sur dossier
              et entretien. Pas d'inscription libre. Vous travaillez en groupe
              restreint, encadré individuellement par Diakaryou Thiam.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:justify-end">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand"
            >
              Candidater à la prochaine promo
              <span className="arrow" aria-hidden>→</span>
            </a>
          </div>
        </div>

        <figure className="relative overflow-hidden border border-ink/10 rounded-sm bg-paper-2 scroll-rise">
          <img
            src="/scene-cohort.jpg"
            alt="Salle de cohorte AcademIA — table en chêne, MacBooks, dossier Klein bleu, vue sur les toits parisiens"
            className="w-full h-auto object-cover aspect-[16/9]"
          />
          <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between mono text-[10px] tracking-[0.2em] uppercase text-paper bg-ink/55 backdrop-blur-md px-3 py-2 rounded-sm">
            <span className="flex items-center gap-2">
              <span className="inline-block w-1 h-1 rounded-full bg-brand-300" />
              Cohorte en session
            </span>
            <span>Encadrement individuel</span>
          </figcaption>
        </figure>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/8 border border-ink/8 rounded-sm overflow-hidden">
          {stats.map(([k, v]) => (
            <div key={k} className="card p-5">
              <div className="mono text-[10px] tracking-[0.18em] uppercase text-brand mb-2">
                {k}
              </div>
              <div className="text-[14.5px] text-ink leading-snug">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── SECTION HEAD ────────────────────────── */

function SectionHead({ eyebrow, title, subline }) {
  return (
    <div className="mb-12 md:mb-16 max-w-3xl scroll-rise">
      <span className="eyebrow-brand mb-5 block">{eyebrow}</span>
      <h2 className="display-lg text-ink text-balance">{title}</h2>
      {subline && (
        <p className="mt-6 text-[16px] md:text-[17px] leading-[1.6] text-ink-500 max-w-[58ch]">
          {subline}
        </p>
      )}
    </div>
  );
}

/* ───────────────────────── PROGRAMMES ──────────────────────────── */

function Programmes() {
  return (
    <section id="programmes" className="px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionHead
          eyebrow="02 / Catalogue"
          title={
            <>
              Six programmes spécialisés.{" "}
              <span className="text-ink-400">Aucun superflu.</span>
            </>
          }
          subline="Calé sur des usages métier précis — du prompting aux agents, avec un volet conformité indissociable. Cohortes restreintes, cas réels, livrables vérifiables."
        />

        {/* Hero banner — collaborative session */}
        <figure className="relative overflow-hidden border border-ink/10 rounded-sm bg-paper-2 mb-10 md:mb-14 scroll-rise">
          <img
            src="/section-programmes.jpg"
            alt="Atelier collaboratif AcademIA — quatre apprenants en travail de co-construction autour d'un MacBook"
            className="w-full h-auto object-cover aspect-[16/7]"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/45 via-ink/10 to-transparent"
          />
          <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-paper">
            <div>
              <div className="mono text-[10px] tracking-[0.2em] uppercase text-paper/80 mb-1.5">
                Workshop · co-construction
              </div>
              <div className="text-[15px] font-semibold leading-snug max-w-md">
                On cale le programme sur vos cas — pas sur un syllabus générique.
              </div>
            </div>
            <span className="hidden md:inline-flex items-center gap-2 mono text-[10px] tracking-[0.18em] uppercase bg-paper/95 text-ink px-2.5 py-1.5 rounded-full">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand" />
              06 parcours · sur-mesure dispo
            </span>
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/8 border border-ink/8 rounded-sm overflow-hidden">
          {programmes.map((p) => (
            <article
              key={p.code}
              className="card p-7 md:p-8 group flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10.5px] tracking-[0.18em] uppercase font-semibold text-ink-400 tab-nums">
                  {p.no} · {p.code}
                </span>
                {p.badge && (
                  <span className="text-[9.5px] tracking-[0.18em] uppercase bg-brand text-white px-2 py-0.5 rounded-full font-semibold">
                    {p.badge}
                  </span>
                )}
              </div>
              <h3 className="display-md text-ink">{p.title}</h3>
              <p className="mt-4 text-[15px] leading-[1.55] text-ink-500">
                {p.summary}
              </p>

              {/* Topics list */}
              <ul className="mt-5 space-y-2 flex-1">
                {p.topics.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-ink-700"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3.5 w-3.5 shrink-0 mt-[3px] fill-none stroke-brand stroke-[2.4]"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M3 8.5 L6.5 12 L13 4.5" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>

              {/* Spec strip */}
              <div className="mt-6 pt-5 border-t border-ink/8 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[11.5px]">
                <SpecLine k="Durée" v={p.duration} />
                <SpecLine k="Format" v={p.format} />
                <SpecLine k="Public" v={p.audience} />
                <SpecLine k="Sessions" v={p.sessions} />
                <SpecLine k="Cert." v={p.cert} />
                <SpecLine k="Finance." v={p.funding} />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand hover:text-brand-bright transition-colors"
                >
                  Candidater à ce parcours
                  <span aria-hidden>→</span>
                </a>
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10.5px] tracking-[0.16em] uppercase font-semibold text-ink-400 hover:text-ink"
                >
                  Réserver
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-[10.5px] tracking-[0.18em] uppercase text-ink-500 hover:text-brand transition-colors inline-flex items-center gap-2"
          >
            ↓ Catalogue PDF — sur RDV
          </a>
          <span className="mono text-[10.5px] tracking-[0.16em] uppercase text-ink-400">
            Sur-mesure entreprise · sur demande
          </span>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── METHODE ─────────────────────────────── */

function Methode() {
  return (
    <section id="methode" className="px-6 md:px-10 py-24 md:py-32 border-t border-ink/8">
      <div className="mx-auto max-w-[1280px]">
        <SectionHead
          eyebrow="03 / Méthode"
          title={
            <>
              Le parcours,{" "}
              <span className="text-ink-400">en six étapes.</span>
            </>
          }
          subline="Du diagnostic à la certification, chaque jalon est tenu — sans latence administrative, sans dilution pédagogique."
        />

        {/* Hero banner — full journey artifacts */}
        <figure className="relative overflow-hidden border border-ink/10 rounded-sm bg-paper-2 mb-12 md:mb-16 scroll-rise">
          <img
            src="/section-methode.jpg"
            alt="Plan d'ensemble de la méthode AcademIA — MacBook, Moleskine, dossier Klein, attestation, agenda numéroté"
            className="w-full h-auto object-cover aspect-[16/8]"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/40 via-ink/10 to-transparent"
          />
          <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-paper">
            <div className="max-w-md">
              <div className="mono text-[10px] tracking-[0.2em] uppercase text-paper/80 mb-1.5">
                Plan de table — chaque chapitre, un livrable
              </div>
              <div className="text-[15px] font-semibold leading-snug">
                Du diagnostic à l'attestation, six jalons sans rupture.
              </div>
            </div>
            <span className="hidden md:inline-flex items-center gap-2 mono text-[10px] tracking-[0.18em] uppercase bg-paper/95 text-ink px-2.5 py-1.5 rounded-full">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand" />
              06 étapes · zéro flou
            </span>
          </figcaption>
        </figure>

        <ol className="border-t border-ink/10">
          {methode.map((step) => (
            <li
              key={step.no}
              className="grid grid-cols-12 gap-4 md:gap-10 py-7 md:py-9 border-b border-ink/10 group hover:bg-paper-2/50 transition-colors -mx-3 md:-mx-5 px-3 md:px-5"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="mono text-[12px] tracking-[0.18em] tab-nums text-brand font-semibold">
                  {step.no}
                </span>
              </div>
              <div className="col-span-10 md:col-span-7">
                <h3 className="display-md text-ink">{step.title}</h3>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.6] text-ink-500 max-w-2xl">
                  {step.body}
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 md:flex md:items-start md:justify-end">
                <span className="inline-flex items-center gap-2 mono text-[10.5px] tracking-[0.16em] uppercase text-ink-600 border border-ink/12 bg-paper px-3 py-1.5 rounded-full">
                  <span className="text-brand">↳</span>
                  {step.detail}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────────────────── POURQUOI ────────────────────────────── */

function Pourquoi() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 bg-paper-2/50 border-t border-ink/8">
      <div className="mx-auto max-w-[1280px]">
        <SectionHead
          eyebrow="04 / Pourquoi nous"
          title={
            <>
              Quatre raisons.{" "}
              <span className="text-ink-400">Toutes vérifiables.</span>
            </>
          }
        />

        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* LEFT — feature image, full vertical */}
          <div className="col-span-12 lg:col-span-5 scroll-rise">
            <figure className="relative h-full min-h-[420px] overflow-hidden border border-ink/10 rounded-sm bg-paper-2">
              <img
                src="/section-pourquoi.jpg"
                alt="Apprenante AcademIA en pleine session de mise en application — focus, MacBook, dossier Klein"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* gradient base for label */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/55 via-ink/15 to-transparent"
              />
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-paper">
                <div>
                  <div className="mono text-[10px] tracking-[0.2em] uppercase text-paper/80 mb-2">
                    Mise en application
                  </div>
                  <div className="text-[15.5px] font-semibold leading-tight max-w-[26ch]">
                    « Le module clique. Demain, je l'applique. »
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-2 mono text-[10px] tracking-[0.18em] uppercase bg-paper/95 text-ink px-2.5 py-1.5 rounded-full">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand" />
                  Cas vécu
                </span>
              </figcaption>
            </figure>
          </div>

          {/* RIGHT — 4 reasons, compact rows */}
          <div className="col-span-12 lg:col-span-7">
            <div className="border border-ink/10 rounded-sm overflow-hidden bg-paper">
              {pourquoi.map((p, i) => (
                <article
                  key={p.no}
                  className={`flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-7 p-6 md:p-8 group transition-colors hover:bg-paper-2/70 ${
                    i < pourquoi.length - 1 ? "border-b border-ink/10" : ""
                  } scroll-rise`}
                >
                  <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 sm:w-[88px] shrink-0">
                    <span className="mono text-[12px] tracking-[0.18em] tab-nums text-brand font-semibold">
                      {p.no}
                    </span>
                    <span className="mono text-[10px] tracking-[0.18em] uppercase text-ink-400">
                      {p.eyebrow}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="display-md text-ink max-w-[24ch] text-[1.25rem] md:text-[1.5rem]">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] md:text-[15.5px] leading-[1.6] text-ink-500 max-w-2xl">
                      {p.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PREUVES ─────────────────────────────── */

function Preuves() {
  return (
    <section
      id="preuves"
      className="px-6 md:px-10 py-24 md:py-32 bg-paper-2/50 border-t border-ink/8"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionHead
          eyebrow="05 / Preuves"
          title={
            <>
              Cert. Qualiopi.{" "}
              <span className="text-ink-400">Sans pirouette.</span>
            </>
          }
          subline="Action de formation auditée et reconnue France Compétences — la marque de l'État est apposée sur chaque attestation. Conventionné CPF, OPCO et plan de développement des compétences."
        />

        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Qualiopi badge prominently displayed */}
          <div className="col-span-12 lg:col-span-5">
            <div className="card p-8 lg:p-10 h-full flex flex-col scroll-rise">
              <div className="flex-1 flex items-center justify-center py-6">
                <img
                  src="/qualiopi.png"
                  alt="Marque Qualiopi · La certification qualité des organismes prestataires de formation"
                  className="w-full max-w-[300px] h-auto"
                />
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-ink/10 pt-6">
                <Cred k="Catégorie" v="Action de formation" />
                <Cred k="Reconnaissance" v="France Compétences" />
                <Cred k="Financement" v="CPF · OPCO · plan" />
                <Cred k="Audit" v="Renouvellement annuel" />
              </dl>
            </div>
          </div>

          {/* Sample attestation */}
          <div className="col-span-12 lg:col-span-7 scroll-rise">
            <figure className="relative overflow-hidden border border-ink/10 rounded-sm bg-paper-2 h-full">
              <img
                src="/scene-attestation.jpg"
                alt="Attestation de fin de formation AcademIA — sceau officiel et ruban Klein bleu"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between mono text-[10px] tracking-[0.2em] uppercase text-paper bg-ink/55 backdrop-blur-md px-3 py-2 rounded-sm">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-300" />
                  Attestation type · sceau officiel
                </span>
                <span>Signée numériquement</span>
              </figcaption>
            </figure>
            <p className="mt-3 mono text-[10.5px] tracking-[0.16em] uppercase text-ink-400">
              ↳ Modèle remis en fin de parcours · valable France Compétences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FORMATEUR ───────────────────────────── */

function Formateur() {
  return (
    <section
      id="formateur"
      className="px-6 md:px-10 py-24 md:py-32 border-t border-ink/8"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-5 lg:col-span-4 order-2 md:order-1">
            <figure className="aspect-[3/4] relative overflow-hidden border border-ink/12 rounded-sm bg-paper-2">
              <img
                src="/dt-real.jpg"
                alt="Diakaryou Thiam, juriste public et fondateur d'AcademIA"
                className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
              />
              <div className="absolute top-3 left-3 right-3 flex justify-between mono text-[10px] tracking-[0.18em] uppercase text-paper bg-ink/40 backdrop-blur-sm px-2 py-1 rounded-sm">
                <span>Portrait</span>
                <span>MMXXVI</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between mono text-[10px] tracking-[0.18em] uppercase text-paper bg-ink/40 backdrop-blur-sm px-2 py-1 rounded-sm">
                <span>D. Thiam</span>
                <span>Lead trainer · Founder</span>
              </div>
            </figure>
            <p className="mt-3 mono text-[10.5px] tracking-[0.16em] uppercase text-ink-400">
              ↳ Conçoit, anime et corrige chaque parcours
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6 order-1 md:order-2">
            <span className="eyebrow-brand mb-6 block">05 / Le formateur</span>
            <h2 className="display-lg text-ink">
              Diakaryou Thiam.
            </h2>
            <div className="mt-8 space-y-5 text-[16px] md:text-[17px] leading-[1.7] text-ink-600 max-w-2xl">
              <p>
                Juriste public de formation — Master 2 Droit public de
                l'économie — et praticien opérationnel de l'IA générative
                depuis quatre ans.
              </p>
              <p className="text-ink-500">
                Il conçoit chaque module à partir de cas réels : appels
                d'offres, pièces administratives, conformité RGPD, audit
                prompt. Sa pédagogie privilégie la rigueur méthodologique au
                sensationnel.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 border-t border-ink/12 pt-8 max-w-3xl">
              <Cred k="Expérience" v="04 ans · IA & Droit" />
              <Cred k="Diplôme" v="Master 2 D. public" />
              <Cred k="Spécialités" v="RGPD · prompting · marchés publics" />
              <Cred k="Encadrement" v="Individuel · à chaque livrable" />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cred({ k, v }) {
  return (
    <div>
      <dt className="text-[10.5px] tracking-[0.18em] uppercase font-semibold text-ink-400 mb-2">
        {k}
      </dt>
      <dd className="text-[14.5px] leading-tight text-ink font-medium">{v}</dd>
    </div>
  );
}

function SpecLine({ k, v }) {
  return (
    <div className="leading-snug">
      <span className="text-[10px] tracking-[0.16em] uppercase font-semibold text-ink-400 block">
        {k}
      </span>
      <span className="text-ink mt-0.5 block">{v}</span>
    </div>
  );
}

/* ───────────────────────── TÉMOIGNAGES ─────────────────────────── */

function Temoignages() {
  return (
    <section
      id="temoignages"
      className="px-6 md:px-10 py-24 md:py-32 bg-paper-2/50 border-t border-ink/8"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Alumni group hero image */}
        <figure className="relative overflow-hidden border border-ink/10 rounded-sm bg-paper mb-12 md:mb-16 scroll-rise">
          <img
            src="/alumni-group.jpg"
            alt="Promotion AcademIA — alumni en discussion dans l'espace commun"
            className="w-full h-auto object-cover aspect-[16/7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
          <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
            <div>
              <div className="eyebrow text-paper/85 mb-1">07 / Cas concrets</div>
              <h2 className="display-md text-paper">
                Ce qu'en disent les alumni.{" "}
                <span className="text-paper/70 font-normal">Sans filtre.</span>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-paper/95 text-ink text-[13px] font-medium">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand" />
              Témoignages vérifiés
            </div>
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-ink/8 border border-ink/8 rounded-sm overflow-hidden">
          {temoignages.map((t, i) => (
            <figure
              key={i}
              className="card p-7 md:p-8 scroll-rise flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-[2px]">
                  {[0, 1, 2, 3, 4].map((j) => (
                    <svg
                      key={j}
                      viewBox="0 0 20 20"
                      className="h-[13px] w-[13px] fill-brand"
                    >
                      <path d="M10 1.6l2.5 5.9 6.4.5-4.9 4.2 1.5 6.2L10 15.3l-5.5 3.1 1.5-6.2L1 8l6.4-.5z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-brand bg-brand/8 border border-brand/22 px-2 py-1 rounded-full">
                  {t.metric}
                </span>
              </div>
              <blockquote className="text-[16.5px] lg:text-[17.5px] leading-[1.5] tracking-[-0.005em] text-ink flex-1">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-7 pt-5 border-t border-ink/10 flex items-center gap-4">
                <span className="relative inline-block h-12 w-12 shrink-0 rounded-full overflow-hidden border border-ink/12">
                  <img
                    src={t.avatar}
                    alt={`Portrait de ${t.name}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[14.5px] font-semibold text-ink truncate">
                    {t.name}
                  </div>
                  <div className="text-[12px] text-ink-500 leading-snug">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FINAL CTA ───────────────────────────── */

function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative bg-paper text-ink border-t border-ink/8 overflow-hidden"
    >
      {/* soft Klein-blue atmospherics — keeps section bright but distinct */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_92%_18%,rgba(45,79,224,0.10),transparent_60%),radial-gradient(ellipse_50%_55%_at_8%_100%,rgba(30,58,138,0.08),transparent_55%)]"
      />
      {/* faint grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5] [background-image:linear-gradient(rgba(10,14,26,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(10,14,26,0.035)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_40%,transparent_85%)]"
      />

      <div className="relative mx-auto max-w-[1280px] grid grid-cols-12 gap-8 lg:gap-16 items-center px-6 md:px-10 py-24 md:py-32">
        {/* LEFT — content */}
        <div className="col-span-12 lg:col-span-7 lg:pr-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block h-px w-8 bg-brand/60" />
            <span className="text-[10.5px] tracking-[0.24em] uppercase font-semibold text-brand">
              08 · Réservation
            </span>
          </div>
          <h2 className="display-xl text-ink text-balance leading-[0.98]">
            Bloquez 30 minutes{" "}
            <span className="text-ink-400 font-normal">au calendrier.</span>
          </h2>
          <p className="mt-8 max-w-[54ch] text-[17px] md:text-[19px] leading-[1.55] text-ink-500">
            Visio. Sans engagement. Avec un conseiller pédagogique qui cadre
            votre cas d'usage, votre calendrier, votre éligibilité{" "}
            <span className="text-ink font-medium">CPF / OPCO</span>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper hover:bg-ink-700 transition-colors shadow-[0_18px_48px_-18px_rgba(30,58,138,0.45)]"
            >
              <span className="text-[15.5px] font-semibold tracking-[-0.005em]">
                Réserver mon créneau
              </span>
              <span className="grid place-items-center h-10 w-10 rounded-full bg-brand text-paper group-hover:bg-brand-bright transition-colors">
                <svg
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.4]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </a>
            <span className="text-[12px] tracking-[0.16em] uppercase font-semibold text-ink-400">
              Calendrier en direct · cal.com
            </span>
          </div>

          {/* Alt channels */}
          <div className="mt-10 pt-8 border-t border-ink/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="tel:+33638368218"
              className="group flex items-center gap-3 text-ink-600 hover:text-ink transition-colors"
            >
              <span className="grid place-items-center h-9 w-9 rounded-full border border-ink/15 group-hover:border-brand/50 group-hover:bg-brand-50 transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 fill-none stroke-brand stroke-[2.2]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-[10px] tracking-[0.2em] uppercase font-semibold text-ink-400">
                  Préférez un appel ?
                </div>
                <div className="text-[14.5px] font-semibold tab-nums mt-1 text-ink">
                  06 38 36 82 18
                </div>
              </div>
            </a>
            <a
              href="https://wa.me/33638368218"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-ink-600 hover:text-ink transition-colors"
            >
              <span className="grid place-items-center h-9 w-9 rounded-full border border-ink/15 group-hover:border-brand/50 group-hover:bg-brand-50 transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 fill-brand"
                  aria-hidden
                >
                  <path d="M20.5 3.5A11.9 11.9 0 0 0 12.05 0C5.45 0 .1 5.35.1 11.95c0 2.1.55 4.15 1.6 5.95L0 24l6.25-1.65a11.9 11.9 0 0 0 5.8 1.5h.01c6.6 0 11.95-5.35 11.95-11.95 0-3.2-1.25-6.2-3.51-8.4ZM12.05 21.85h-.01a9.85 9.85 0 0 1-5.05-1.4l-.36-.21-3.7.97 1-3.6-.24-.37a9.85 9.85 0 0 1-1.5-5.29c0-5.45 4.45-9.9 9.91-9.9 2.65 0 5.13 1.03 7 2.9 1.87 1.87 2.9 4.36 2.9 7-.01 5.45-4.45 9.9-9.95 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 0 0-.79.37c-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.21 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35Z" />
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-[10px] tracking-[0.2em] uppercase font-semibold text-ink-400">
                  Ou WhatsApp
                </div>
                <div className="text-[14.5px] font-semibold tab-nums mt-1 text-ink">
                  06 38 36 82 18
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT — calendar mock (light) */}
        <div className="col-span-12 lg:col-span-5 relative">
          <div className="relative mx-auto max-w-[420px] rounded-[14px] border border-ink/10 bg-white p-6 shadow-[0_28px_70px_-30px_rgba(10,14,26,0.22)]">
            {/* mock window dots */}
            <div className="flex items-center gap-1.5 mb-5">
              <span className="h-2 w-2 rounded-full bg-ink/15" />
              <span className="h-2 w-2 rounded-full bg-ink/15" />
              <span className="h-2 w-2 rounded-full bg-ink/15" />
              <span className="ml-auto text-[10px] tracking-[0.18em] uppercase font-semibold text-ink-400">
                cal.com / academia
              </span>
            </div>
            {/* event card */}
            <div className="rounded-[10px] bg-paper-2/70 border border-ink/8 p-5">
              <div className="flex items-center gap-2 text-[10.5px] tracking-[0.18em] uppercase font-semibold text-brand">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                Diagnostic — disponible
              </div>
              <div className="mt-3 text-[18px] font-semibold text-ink leading-tight">
                Diagnostic stratégique
              </div>
              <div className="text-[13px] text-ink-500 mt-1">
                30 min · Visio · gratuit
              </div>
            </div>
            {/* slots */}
            <div className="mt-5 grid grid-cols-3 gap-2">
              {["09:00", "11:30", "14:00", "15:30", "17:00", "18:30"].map(
                (s, i) => (
                  <div
                    key={s}
                    className={`rounded-md py-2.5 text-center tab-nums text-[12.5px] font-medium border transition-colors ${
                      i === 2
                        ? "bg-brand text-paper border-brand"
                        : "bg-paper-2/50 text-ink-700 border-ink/8"
                    }`}
                  >
                    {s}
                  </div>
                ),
              )}
            </div>
            <div className="mt-5 pt-4 border-t border-ink/10 flex items-center justify-between text-[11px] tracking-[0.14em] uppercase font-semibold text-ink-400">
              <span>Cette semaine</span>
              <span className="text-brand">3 créneaux libres</span>
            </div>
          </div>
        </div>
      </div>

      {/* base strip */}
      <div className="relative border-t border-ink/10 bg-paper-2/40">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11.5px] tracking-[0.14em] uppercase font-semibold text-ink-500">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand" />
            Paris · lun–ven · 9 h – 19 h
          </span>
          <span>Réponse rapide · pas de spam</span>
          <span>Organisme certifié Qualiopi</span>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ──────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-paper-3 px-6 md:px-10 pt-16 pb-10 border-t border-ink/8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <a href="#top" className="inline-block">
              <img
                src="/logo-academia.png"
                alt="AcademIA"
                className="h-11 w-auto"
              />
            </a>
            <p className="mt-5 text-[14px] text-ink-600 max-w-md leading-[1.7]">
              Organisme français de formation, indépendant, certifié Qualiopi.
              Spécialiste de l'IA générative appliquée aux secteurs public,
              juridique et marketing.
            </p>
            <div className="mt-6 flex items-start gap-4">
              <img
                src="/qualiopi.png"
                alt="Marque Qualiopi"
                className="h-14 w-14 object-contain shrink-0"
              />
              <div className="flex flex-col gap-2">
                <div className="text-[13.5px] font-semibold text-ink leading-tight">
                  Certifié Qualiopi · action de formation
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="chip">CPF</span>
                  <span className="chip">OPCO</span>
                  <span className="chip">France Compétences</span>
                </div>
              </div>
            </div>
          </div>

          <FooterCol title="Programmes">
            <FootLink>IA pour juristes</FootLink>
            <FootLink>Marketing augmenté</FootLink>
            <FootLink>Veille &amp; rédaction</FootLink>
            <FootLink>Prompting opérationnel</FootLink>
            <FootLink>Agents &amp; automatisation</FootLink>
            <FootLink>Conformité IA</FootLink>
          </FooterCol>

          <FooterCol title="Cabinet">
            <FootLink>Qui sommes-nous ?</FootLink>
            <FootLink>Le formateur</FootLink>
            <FootLink>Témoignages</FootLink>
            <FootLink>Contact</FootLink>
          </FooterCol>

          <FooterCol title="Ressources">
            <FootLink>Blog</FootLink>
            <FootLink>E-learning</FootLink>
            <FootLink>Glossaire IA</FootLink>
            <FootLink>FAQ</FootLink>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col md:flex-row justify-between gap-4 pt-6 border-t border-ink/10 mono text-[10px] tracking-[0.16em] uppercase text-ink-400">
          <div>© MMXXVI · AcademIA SAS — Paris, France</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-brand transition-colors">Règlement intérieur</a>
            <a href="#" className="hover:text-brand transition-colors">CGV</a>
            <a href="#" className="hover:text-brand transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-brand transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div className="col-span-6 md:col-span-3 lg:col-span-2">
      <div className="mono text-[10.5px] tracking-[0.18em] uppercase text-ink-400 mb-4">
        {title}
      </div>
      <ul className="space-y-2.5 text-[14px]">{children}</ul>
    </div>
  );
}

function FootLink({ children }) {
  return (
    <li>
      <a href="#" className="text-ink-600 hover:text-brand transition-colors">
        {children}
      </a>
    </li>
  );
}
