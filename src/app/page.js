const programmes = [
  {
    no: "I",
    code: "JUR-IA-101",
    title: "IA pour juristes publics",
    summary:
      "Maîtriser les usages, les risques, la rédaction assistée — sans compromis sur la conformité.",
    duration: "21 h",
    format: "100 % à distance",
    badge: "Phare",
  },
  {
    no: "II",
    code: "MKT-IA-201",
    title: "Marketing augmenté par l'IA",
    summary:
      "Pipelines de contenu, copywriting structuré, mesure d'impact. Du brief à la campagne.",
    duration: "28 h",
    format: "Mixte synchrone",
    badge: null,
  },
  {
    no: "III",
    code: "VEI-IA-110",
    title: "Veille & rédaction augmentée",
    summary: "Synthèses sourcées, dossiers thématiques, livrables vérifiables.",
    duration: "14 h",
    format: "100 % à distance",
    badge: null,
  },
  {
    no: "IV",
    code: "PRT-IA-301",
    title: "Prompting opérationnel",
    summary:
      "Architecture du prompt, gabarits, chaînages. Méthode complète et reproductible.",
    duration: "16 h",
    format: "Atelier intensif",
    badge: "Nouveau",
  },
  {
    no: "V",
    code: "AGT-IA-401",
    title: "Agents & automatisation",
    summary:
      "Orchestrer plusieurs modèles, outils et bases pour des workflows fiables.",
    duration: "21 h",
    format: "Mixte synchrone",
    badge: null,
  },
  {
    no: "VI",
    code: "CMP-IA-205",
    title: "Conformité & prompt sécurité",
    summary:
      "Données sensibles, RGPD, traçabilité — produire en confiance avec l'IA générative.",
    duration: "18 h",
    format: "100 % à distance",
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
    body: "Rien de générique. Chaque module porte un livrable concret que vos équipes activent dès la fin de la session — pas dans six semaines.",
  },
  {
    no: "02",
    eyebrow: "Sur-mesure",
    title: "Ajusté à vos contraintes métier.",
    body: "Programmes co-construits avec votre cellule formation. Cas issus de votre secteur — droit public, marketing, communication institutionnelle.",
  },
  {
    no: "03",
    eyebrow: "Suivi humain",
    title: "Un humain, à chaque étape.",
    body: "Pas de tunnel automatisé. Conseiller pédagogique dédié, formateur joignable, retour personnalisé sur chaque livrable rendu.",
  },
  {
    no: "04",
    eyebrow: "Garantie",
    title: "Engagement résultat — ou remboursement.",
    body: "Si à l'issue du parcours vos équipes n'ont pas activé un cas d'usage opérationnel, on rembourse. Inscrit à la convention.",
  },
];

const temoignages = [
  {
    quote:
      "Top suivi sur ma formation IA. Les cas d'usage publics étaient enfin sérieux, pas des gadgets de démo. ROI sur la semaine d'après.",
    name: "C. Martin",
    role: "Responsable conformité — collectivité territoriale",
    promo: "Promotion IV",
    metric: "8 h / semaine économisées",
  },
  {
    quote:
      "Le passage par les agents et l'automatisation a transformé ma manière de produire et de mesurer. Je signe la formation entreprise pour l'équipe.",
    name: "L. Dubois",
    role: "Directrice de la communication",
    promo: "Promotion III",
    metric: "+ 220 % volume publié",
  },
  {
    quote:
      "Accompagnement, écoute, rigueur. AcademIA tient ses promesses, du diagnostic à la certification — sans détour. Je recommande sans réserve.",
    name: "S. Khelifi",
    role: "Juriste — service public",
    promo: "Promotion V",
    metric: "Audit RGPD validé",
  },
];

export default function Home() {
  return (
    <div className="relative bg-paper text-ink">
      <AnnouncementBar />
      <Nav />
      <div className="relative -mt-[68px] md:-mt-[80px]">
        <Hero />
      </div>
      <TrustStrip />
      <Programmes />
      <Promesse />
      <Methode />
      <Pourquoi />
      <Formateur />
      <Temoignages />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ───────────────────────── ANNOUNCEMENT ────────────────────────── */

function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-paper-warm border-b border-ink/8">
      <div className="mx-auto max-w-[1360px] px-5 md:px-12 h-9 flex items-center justify-between gap-4 mono text-[10.5px] tracking-[0.18em] uppercase text-ink-500">
        <div className="flex items-center gap-2.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand pulse-dot-brand" />
          <span>Promotion VI · Inscriptions ouvertes — Rentrée 2026</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span>Qualiopi · CPF · OPCO</span>
          <span>Paris · Distanciel</span>
          <span>FR</span>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── NAV ─────────────────────────────────── */

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/82 border-b border-ink/10">
      <div className="mx-auto max-w-[1360px] px-5 md:px-12 h-[68px] md:h-[80px] flex items-center justify-between gap-6">
        <a
          href="#top"
          aria-label="AcademIA"
          className="inline-flex items-center gap-2.5 leading-none"
        >
          <span className="grid place-items-center h-7 w-7 rounded-md bg-brand/10 border border-brand/25">
            <span className="mono text-[11px] tracking-[0.04em] font-semibold text-brand">
              AE
            </span>
          </span>
          <span className="font-medium tracking-[-0.02em] text-[18px] text-ink">
            Academ<span className="font-semibold text-brand">IA</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          <a href="#programmes" className="nav-link">
            Programmes
          </a>
          <a href="#methode" className="nav-link">
            Méthode
          </a>
          <a href="#formateur" className="nav-link">
            Formateur
          </a>
          <a href="#temoignages" className="nav-link">
            Témoignages
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <span className="nav-status hidden md:inline-flex">
            <span className="nav-status-dot" />
            <span>14 places · Promo VI</span>
          </span>
          <a href="#contact" className="btn-brand text-[13.5px] py-2 pl-4 pr-2">
            Diagnostic gratuit
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ───────────────────────── HERO ────────────────────────────────── */

function Hero() {
  const services = [
    "IA pour juristes",
    "Marketing IA",
    "Prompting",
    "Veille augmentée",
    "Agents IA",
    "Conformité IA",
  ];
  return (
    <section
      id="top"
      className="relative overflow-hidden bright-stage min-h-screen flex flex-col"
    >
      <div className="relative flex-1 flex flex-col">
        {/* Background image — bright Salle Labrouste, occupies bottom 60% */}
        <img
          src="/hero-academia.jpg"
          alt="Salle de lecture institutionnelle française à l'heure dorée, accent bleu Klein"
          aria-hidden
          draggable={false}
          className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-[62%] md:h-[60%] object-cover object-[center_bottom] opacity-[0.95] select-none z-0 [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.35)_8%,black_22%,black_88%,rgba(0,0,0,0.5)_98%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.35)_8%,black_22%,black_88%,rgba(0,0,0,0.5)_98%,transparent_100%)]"
        />
        {/* Paper gradient overlay — fades image into white at top */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(251,250,246,1)_0%,rgba(251,250,246,0.96)_18%,rgba(251,250,246,0.65)_36%,rgba(251,250,246,0.18)_56%,rgba(251,250,246,0.05)_82%,rgba(251,250,246,0.45)_100%)]"
        />
        {/* Klein-blue radial glow at the bottom */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_92%,rgba(30,58,138,0.18),transparent_60%)]"
        />
        {/* Atmospheric corner glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-[-8%] top-[-5%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(45,79,224,0.08),transparent_70%)] blur-[100px]" />
          <div className="absolute right-[-8%] top-[-5%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,238,217,0.55),transparent_70%)] blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 md:px-12 pt-[16vh] md:pt-[12vh] pb-[16vh] md:pb-[20vh] flex-1 flex flex-col justify-center">
          {/* Eyebrow chip */}
          <div className="rise rise-1 flex justify-center mb-6 md:mb-8">
            <span className="chip">
              <span className="dot" />
              Organisme Qualiopi · Promotion VI ouverte
            </span>
          </div>

          {/* Centered headline — promise + risk reversal */}
          <h1 className="rise rise-2 display-lg text-center text-balance max-w-[18ch] md:max-w-[22ch] mx-auto text-ink">
            Vos équipes maîtrisent l'IA en 30 jours.
            <br />
            <em className="text-shimmer-brand">Sinon, on vous rembourse.</em>
          </h1>

          {/* Subhead */}
          <p className="rise rise-3 text-center max-w-[58ch] mx-auto mt-7 md:mt-9 text-[16px] md:text-[18px] leading-[1.55] text-ink-500">
            L'école française d'IA appliquée. Pour juristes publics, marketeurs
            et acteurs publics.{" "}
            <span className="text-ink font-medium">
              Diagnostic gratuit, programme calé en 30 min.
            </span>
          </p>

          {/* Service strip */}
          <div className="rise rise-3 mt-7 md:mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 max-w-[760px] mx-auto">
            {services.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 mono text-[10.5px] md:text-[11px] tracking-[0.2em] uppercase text-ink-600"
              >
                <span className="h-1 w-1 rounded-full bg-brand shadow-[0_0_6px_rgba(45,79,224,0.6)]" />
                {s}
              </span>
            ))}
          </div>

          {/* Primary CTA + trust row */}
          <div className="rise rise-4 mt-9 md:mt-12 flex flex-col items-center gap-5">
            <a
              href="#contact"
              className="btn-brand text-[16px] py-4 pl-7 pr-4"
            >
              Lancer mon diagnostic gratuit
              <span className="arrow">→</span>
            </a>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex -space-x-1.5">
                <Avatar letter="C" from="#d5c7a1" to="#8a7a52" />
                <Avatar letter="L" from="#7b93e8" to="#1e3a8a" />
                <Avatar letter="S" from="#a3b5c7" to="#4d6a87" />
              </div>
              <span className="h-5 w-px bg-ink/15" />
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-[2px]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      className="h-[13px] w-[13px] fill-brand drop-shadow-[0_0_4px_rgba(45,79,224,0.35)]"
                    >
                      <path d="M10 1.6l2.5 5.9 6.4.5-4.9 4.2 1.5 6.2L10 15.3l-5.5 3.1 1.5-6.2L1 8l6.4-.5z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[13.5px] font-semibold text-ink leading-none">
                  5,0/5
                </span>
              </div>
              <span className="h-5 w-px bg-ink/15 hidden sm:inline-block" />
              <span className="mono text-[10.5px] tracking-[0.16em] uppercase text-ink-500 leading-none whitespace-nowrap hidden sm:inline">
                Qualiopi · 120 + formés
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Avatar({ letter, from, to }) {
  return (
    <span
      className="relative inline-grid h-[22px] w-[22px] place-items-center rounded-full border border-white/40 font-semibold text-[10px] text-white/95 shadow-[0_1px_2px_rgba(12,20,38,0.18),0_0_0_2px_rgba(251,250,246,0.85)]"
      style={{
        backgroundImage: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        textShadow: "0 1px 1px rgba(0,0,0,0.35)",
      }}
    >
      {letter}
    </span>
  );
}

/* ───────────────────────── TRUST STRIP ─────────────────────────── */

function TrustStrip() {
  const items = [
    "Qualiopi",
    "CPF",
    "OPCO",
    "Datadock",
    "France Compétences",
    "Préfecture · agréé",
  ];
  return (
    <section className="bg-paper border-y border-ink/10">
      <div className="mx-auto max-w-[1360px] px-5 md:px-12 py-7 flex flex-wrap items-center gap-x-8 gap-y-3">
        <span className="mono text-[10.5px] tracking-[0.18em] uppercase text-ink-400">
          Reconnaissances
        </span>
        <span className="hidden md:block flex-1 h-px bg-ink/10" />
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {items.map((l) => (
            <span
              key={l}
              className="font-medium text-[14.5px] tracking-[-0.005em] text-ink-700"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PROGRAMMES ──────────────────────────── */

function Programmes() {
  return (
    <section
      id="programmes"
      className="relative bg-paper py-24 md:py-32 px-5 md:px-12"
    >
      <div aria-hidden className="absolute inset-0 grid-rule opacity-50" />
      <div className="relative mx-auto max-w-[1360px]">
        <SectionHead
          eyebrow="01 / Catalogue"
          title={
            <>
              Six programmes spécialisés.
              <br />
              <em className="text-ink-400 font-light">Aucun superflu.</em>
            </>
          }
          subline="Calé sur des usages métier précis — du prompting aux agents, avec un volet conformité indissociable. Cohortes restreintes, cas réels, livrables vérifiables."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {programmes.map((p) => (
            <article
              key={p.code}
              className="card-surface p-7 md:p-8 group flex flex-col"
            >
              <div className="flex items-center justify-between mb-7">
                <span className="mono text-[10.5px] tracking-[0.18em] uppercase text-ink-500 tab-nums">
                  {p.no} · {p.code}
                </span>
                {p.badge && (
                  <span className="mono text-[10px] tracking-[0.18em] uppercase bg-brand text-white px-2 py-1 rounded-full font-semibold">
                    {p.badge}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-[22px] md:text-[24px] leading-[1.15] tracking-[-0.02em] text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-500 flex-1">
                {p.summary}
              </p>
              <div className="mt-7 pt-5 border-t border-ink/10 flex items-center gap-3 mono text-[10.5px] tracking-[0.16em] uppercase text-ink-500">
                <span>{p.duration}</span>
                <span className="w-px h-3 bg-ink/15" />
                <span>{p.format}</span>
                <span className="ml-auto text-ink-400 group-hover:text-brand transition-colors">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <a
            href="#contact"
            className="mono text-[10.5px] tracking-[0.18em] uppercase text-ink-500 hover:text-brand transition-colors inline-flex items-center gap-2"
          >
            ↓ Catalogue PDF — 2,4 Mo
          </a>
          <span className="mono text-[10.5px] tracking-[0.16em] uppercase text-ink-400">
            Sur-mesure entreprise · sur demande
          </span>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PROMESSE ────────────────────────────── */

function Promesse() {
  return (
    <section className="relative bg-paper-warm py-24 md:py-32 px-5 md:px-12 border-y border-ink/10">
      <div aria-hidden className="absolute inset-0 grid-rule opacity-40" />
      <div className="relative mx-auto max-w-[1100px] text-center scroll-rise">
        <span className="eyebrow mb-7 block">02 / Promesse</span>
        <p className="display-md text-balance text-ink">
          On forme des professionnels qui doivent{" "}
          <em className="text-shimmer-brand">livrer</em>.
          <br />
          Pas des amateurs qui veulent comprendre.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border border-ink/10 max-w-3xl mx-auto">
          {[
            ["VI", "Programmes"],
            ["120+", "Apprenants"],
            ["5,0/5", "Satisfaction"],
            ["100%", "Recommandent"],
          ].map(([n, l], i) => (
            <div key={i} className="bg-paper py-6 px-4">
              <div className="font-semibold text-[26px] md:text-[34px] leading-none tracking-[-0.04em] tab-nums text-ink">
                {n}
              </div>
              <div className="mt-2 mono text-[10px] tracking-[0.16em] uppercase text-ink-500">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── METHODE ─────────────────────────────── */

function Methode() {
  return (
    <section
      id="methode"
      className="relative bg-paper py-24 md:py-32 px-5 md:px-12"
    >
      <div className="relative mx-auto max-w-[1360px]">
        <SectionHead
          eyebrow="03 / Méthode"
          title={
            <>
              Le parcours,<br />
              <em className="text-ink-400 font-light">en six étapes.</em>
            </>
          }
          subline="Du diagnostic à la certification, chaque jalon est tenu — sans latence administrative, sans dilution pédagogique."
        />

        <ol className="border-t border-ink/10">
          {methode.map((step) => (
            <li
              key={step.no}
              className="grid grid-cols-12 gap-4 md:gap-10 py-7 md:py-9 border-b border-ink/10 group transition-colors hover:bg-paper-warm -mx-3 md:-mx-5 px-3 md:px-5"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="mono text-[12px] tracking-[0.18em] tab-nums text-brand font-semibold">
                  {step.no}
                </span>
              </div>
              <div className="col-span-10 md:col-span-7">
                <h3 className="font-semibold text-[22px] md:text-[28px] leading-[1.15] tracking-[-0.02em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.6] text-ink-500 max-w-2xl">
                  {step.body}
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 md:flex md:items-start md:justify-end">
                <span className="inline-flex items-center gap-2 mono text-[10.5px] tracking-[0.16em] uppercase text-ink-600 border border-ink/15 bg-paper px-3 py-1.5 rounded-full">
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
    <section className="relative bg-paper-warm py-24 md:py-32 px-5 md:px-12 border-t border-ink/10">
      <div aria-hidden className="absolute inset-0 grid-rule opacity-50" />
      <div className="relative mx-auto max-w-[1360px]">
        <SectionHead
          eyebrow="04 / Pourquoi nous"
          title={
            <>
              Quatre raisons.<br />
              <em className="text-shimmer-brand font-light">Toutes vérifiables.</em>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
          {pourquoi.map((p) => (
            <article key={p.no} className="card-surface p-8 md:p-10 scroll-rise">
              <div className="flex items-baseline justify-between mb-7">
                <span className="mono text-[12px] tracking-[0.18em] tab-nums text-brand font-semibold">
                  {p.no}
                </span>
                <span className="mono text-[10.5px] tracking-[0.18em] uppercase text-ink-400">
                  {p.eyebrow}
                </span>
              </div>
              <h3 className="font-semibold text-[24px] md:text-[30px] leading-[1.15] tracking-[-0.02em] max-w-[22ch] text-ink">
                {p.title}
              </h3>
              <p className="mt-5 text-[15px] md:text-[16px] leading-[1.65] text-ink-500 max-w-xl">
                {p.body}
              </p>
            </article>
          ))}
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
      className="relative bg-paper py-24 md:py-32 px-5 md:px-12 border-t border-ink/10"
    >
      <div className="relative mx-auto max-w-[1360px]">
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-4 lg:col-span-3 order-2 md:order-1">
            <figure className="aspect-[3/4] relative overflow-hidden border border-ink/15 card-surface-dark">
              <div className="absolute inset-0 grid place-items-center">
                <span
                  className="font-semibold tracking-[-0.04em] leading-none text-paper"
                  style={{ fontSize: "clamp(80px, 12vw, 156px)" }}
                >
                  DT
                </span>
              </div>
              <div className="absolute top-3 left-3 right-3 flex justify-between mono text-[10px] tracking-[0.18em] uppercase text-paper/55">
                <span>Portrait</span>
                <span>I / I</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between mono text-[10px] tracking-[0.18em] uppercase text-paper/55">
                <span>D. Thiam</span>
                <span>Founder</span>
              </div>
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,79,224,0.32),transparent_55%)]"
              />
            </figure>
            <p className="mt-3 mono text-[10.5px] tracking-[0.16em] uppercase text-ink-400">
              ↳ Lead trainer · Founder
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-8 lg:col-start-5 order-1 md:order-2">
            <span className="eyebrow mb-6 block">05 / Le formateur</span>
            <h2 className="display-lg text-balance text-ink">
              Diakaryou{" "}
              <em className="text-shimmer-brand font-light">Thiam.</em>
            </h2>
            <div className="mt-8 space-y-5 text-[16px] md:text-[17px] leading-[1.7] text-ink-600 max-w-2xl">
              <p>
                Juriste public de formation — Master 2 Droit public de
                l'économie — et praticien opérationnel de l'IA générative
                depuis quatre ans.
              </p>
              <p className="text-ink-500">
                Diakaryou conçoit chaque module à partir de cas réels :
                appels d'offres, pièces administratives, conformité RGPD,
                audit prompt. Sa pédagogie privilégie la rigueur
                méthodologique au sensationnel.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 border-t border-ink/15 pt-8 max-w-3xl">
              <Cred k="Expérience" v="04 ans · IA & Droit" />
              <Cred k="Diplôme" v="Master 2 D. public" />
              <Cred k="Spécialités" v="RGPD · prompting · marchés publics" />
              <Cred k="Cohortes formées" v="120+" />
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
      <dt className="mono text-[10.5px] tracking-[0.18em] uppercase text-ink-400 mb-2">
        {k}
      </dt>
      <dd className="text-[14.5px] leading-tight text-ink font-medium">{v}</dd>
    </div>
  );
}

/* ───────────────────────── TÉMOIGNAGES ─────────────────────────── */

function Temoignages() {
  return (
    <section
      id="temoignages"
      className="relative bg-paper-warm py-24 md:py-32 px-5 md:px-12 border-t border-ink/10"
    >
      <div className="relative mx-auto max-w-[1360px]">
        <SectionHead
          eyebrow="06 / Cas concrets"
          title={
            <>
              Ce qu'<em className="text-ink-400 font-light">elles et eux</em>
              <br />
              en disent.
            </>
          }
          subline="Avis vérifiés des promotions I à V — note moyenne 5,0 / 5. Indicateurs ROI mesurés à J+30."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {temoignages.map((t, i) => (
            <figure
              key={i}
              className="card-surface p-8 md:p-10 scroll-rise flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-[2px]">
                  {[0, 1, 2, 3, 4].map((j) => (
                    <svg
                      key={j}
                      viewBox="0 0 20 20"
                      className="h-[14px] w-[14px] fill-brand drop-shadow-[0_0_3px_rgba(45,79,224,0.3)]"
                    >
                      <path d="M10 1.6l2.5 5.9 6.4.5-4.9 4.2 1.5 6.2L10 15.3l-5.5 3.1 1.5-6.2L1 8l6.4-.5z" />
                    </svg>
                  ))}
                </div>
                <span className="mono text-[10px] tracking-[0.18em] uppercase text-brand bg-brand/8 border border-brand/25 px-2 py-1 rounded-full">
                  {t.metric}
                </span>
              </div>
              <blockquote className="text-[18px] lg:text-[20px] leading-[1.4] tracking-[-0.005em] font-medium text-ink flex-1">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-ink/10 flex items-end justify-between gap-4">
                <div>
                  <div className="text-[15px] font-semibold text-ink">
                    {t.name}
                  </div>
                  <div className="mono text-[10.5px] tracking-[0.14em] uppercase text-ink-500 mt-1">
                    {t.role}
                  </div>
                </div>
                <div className="mono text-[10.5px] tracking-[0.16em] uppercase text-ink-400">
                  {t.promo}
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
      className="relative dark-stage py-24 md:py-36 px-5 md:px-12 border-t border-ink/10 overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1100px] text-center">
        <span className="eyebrow mb-7 block text-brand-300">07 / Démarrer</span>
        <h2 className="display-lg text-balance max-w-[18ch] md:max-w-[22ch] mx-auto text-paper">
          Lancez votre diagnostic.{" "}
          <em className="text-shimmer-brand">Gratuit. 30 minutes.</em>
        </h2>
        <p className="mt-7 max-w-[58ch] mx-auto text-[16px] md:text-[18px] leading-[1.55] text-paper/70">
          Avec un conseiller pédagogique. Repartez avec un programme calé sur
          vos contraintes — calendrier, budget, conformité, livrables.{" "}
          <span className="text-paper font-medium">Sans engagement.</span>
        </p>

        <form
          action="mailto:contact@academia.fr"
          method="post"
          className="mt-10 max-w-[640px] mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <input
              type="email"
              name="email"
              required
              placeholder="prenom.nom@organisation.fr"
              aria-label="E-mail professionnel"
              className="md:col-span-8 bg-white/[0.06] border border-white/15 px-5 py-4 text-[15px] text-paper placeholder:text-paper/40 focus:outline-none focus:border-brand-300 focus:bg-white/[0.1] rounded-full transition-colors"
            />
            <button
              type="submit"
              className="btn-brand md:col-span-4 justify-center text-[14.5px]"
            >
              Demander mon entretien
              <span className="arrow">→</span>
            </button>
          </div>
          <p className="mt-4 mono text-[10px] tracking-[0.18em] uppercase text-paper/50">
            Réponse sous 24 h ouvrées · RGPD · Sans engagement
          </p>
        </form>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 max-w-3xl mx-auto">
          {[
            ["WhatsApp", "+33 6 XX XX XX XX"],
            ["E-mail", "contact@academia.fr"],
            ["Horaires", "L–V · 09 h – 19 h"],
            ["Bureau", "Paris XV · Distanciel"],
          ].map(([k, v]) => (
            <div key={k} className="card-surface-dark py-5 px-4">
              <div className="mono text-[10px] tracking-[0.18em] uppercase text-brand-300 mb-1.5">
                {k}
              </div>
              <div className="text-[14px] text-paper">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ──────────────────────────────── */

function Footer() {
  return (
    <footer className="relative bg-paper-soft px-5 md:px-12 pt-16 pb-10 border-t border-ink/10">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 leading-none"
            >
              <span className="grid place-items-center h-7 w-7 rounded-md bg-brand/10 border border-brand/25">
                <span className="mono text-[11px] tracking-[0.04em] font-semibold text-brand">
                  AE
                </span>
              </span>
              <span className="font-medium tracking-[-0.02em] text-[18px] text-ink">
                Academ<span className="font-semibold text-brand">IA</span>
              </span>
            </a>
            <p className="mt-5 text-[14px] text-ink-600 max-w-md leading-[1.7]">
              Organisme français de formation, indépendant, certifié Qualiopi.
              Spécialiste de l'IA générative appliquée aux secteurs public,
              juridique et marketing.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="chip">
                <span className="dot" />
                Qualiopi
              </span>
              <span className="chip">CPF · OPCO</span>
              <span className="chip">SIREN 000 000 000</span>
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
            <a href="#" className="hover:text-brand transition-colors">
              Règlement intérieur
            </a>
            <a href="#" className="hover:text-brand transition-colors">
              CGV
            </a>
            <a href="#" className="hover:text-brand transition-colors">
              Confidentialité
            </a>
            <a href="#" className="hover:text-brand transition-colors">
              Mentions légales
            </a>
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
      <a
        href="#"
        className="text-ink-600 hover:text-brand transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

/* ───────────────────────── SHARED ──────────────────────────────── */

function SectionHead({ eyebrow, title, subline }) {
  return (
    <div className="mb-12 md:mb-16 max-w-3xl scroll-rise">
      <span className="eyebrow mb-5 block">{eyebrow}</span>
      <h2 className="display-lg text-balance text-ink">{title}</h2>
      {subline && (
        <p className="mt-6 text-[16px] md:text-[18px] leading-[1.6] text-ink-500 max-w-2xl">
          {subline}
        </p>
      )}
    </div>
  );
}
