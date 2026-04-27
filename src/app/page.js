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
    name: "C. Martin",
    role: "Responsable conformité — collectivité territoriale",
    promo: "Promotion IV",
    metric: "8 h / sem économisées",
  },
  {
    quote:
      "Le passage par les agents et l'automatisation a transformé ma manière de produire et de mesurer. Je signe pour l'équipe.",
    name: "L. Dubois",
    role: "Directrice de la communication",
    promo: "Promotion III",
    metric: "+ 220 % volume publié",
  },
  {
    quote:
      "Accompagnement, écoute, rigueur. AcademIA tient ses promesses, du diagnostic à la certification — sans détour.",
    name: "S. Khelifi",
    role: "Juriste — service public",
    promo: "Promotion V",
    metric: "Audit RGPD validé",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <TrustStrip />
      <Programmes />
      <Methode />
      <Pourquoi />
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
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/80 border-b border-ink/8">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 h-16 flex items-center justify-between gap-6">
        <a
          href="#top"
          aria-label="AcademIA"
          className="inline-flex items-center gap-2.5 leading-none"
        >
          <span className="font-medium tracking-[-0.02em] text-[18px] text-ink">
            Academ<span className="font-semibold text-brand">IA</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 ml-2 mono text-[10px] tracking-[0.18em] uppercase text-ink-500 border-l border-ink/10 pl-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand" />
            14 places
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          <a href="#programmes" className="nav-link">Programmes</a>
          <a href="#methode" className="nav-link">Méthode</a>
          <a href="#formateur" className="nav-link">Formateur</a>
          <a href="#temoignages" className="nav-link">Témoignages</a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink hover:text-brand transition-colors"
        >
          Diagnostic gratuit
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

/* ───────────────────────── HERO ────────────────────────────────── */

function Hero() {
  return (
    <section
      id="top"
      className="relative px-6 md:px-10 pt-20 md:pt-28 pb-24 md:pb-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-8">
              <span className="chip">
                <span className="dot" />
                Organisme Qualiopi · Promotion VI ouverte
              </span>
            </div>
            <h1 className="display-xl text-ink max-w-[22ch]">
              Vos équipes maîtrisent l'IA en{" "}
              <span className="text-brand">30 jours</span>.{" "}
              <span className="text-ink-500 font-normal">
                Sinon, on rembourse.
              </span>
            </h1>
            <p className="mt-8 max-w-[54ch] text-[17px] md:text-[19px] text-ink-500 leading-[1.55]">
              L'école française d'IA appliquée. Pour juristes publics,
              marketeurs et acteurs du secteur public.{" "}
              <span className="text-ink font-medium">
                Diagnostic gratuit, programme calé en 30 minutes.
              </span>
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-brand">
                Lancer mon diagnostic
                <span className="arrow" aria-hidden>→</span>
              </a>
              <a href="#programmes" className="btn-ghost">
                Voir les programmes
              </a>
            </div>
            {/* Trust row */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-1.5">
                <Avatar letter="C" from="#d8cfb2" to="#8d7a4f" />
                <Avatar letter="L" from="#7b91dd" to="#1e3a8a" />
                <Avatar letter="S" from="#a3b5c7" to="#4d6a87" />
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
              <span className="mono text-[10.5px] tracking-[0.16em] uppercase text-ink-500 leading-none whitespace-nowrap hidden sm:inline">
                Qualiopi · 120 + formés
              </span>
            </div>
          </div>

          {/* Contained image card */}
          <div className="col-span-12 lg:col-span-5">
            <figure className="relative aspect-[4/5] overflow-hidden border border-ink/10 rounded-sm bg-paper-2">
              <img
                src="/hero-academia.jpg"
                alt="Salle de lecture institutionnelle française moderne avec chaises Klein"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Bottom caption strip */}
              <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between mono text-[10px] tracking-[0.2em] uppercase text-paper bg-ink/55 backdrop-blur-md px-3 py-2 rounded-sm">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-300" />
                  Promotion VI
                </span>
                <span>Mars 2026 · 14 places</span>
              </figcaption>
            </figure>
            <div className="mt-3 flex items-center justify-between mono text-[10.5px] tracking-[0.16em] uppercase text-ink-500">
              <span>↳ Cohorte limitée · sélection sur entretien</span>
              <span className="tab-nums">N° MMXXVI / I</span>
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
      className="relative inline-grid h-[22px] w-[22px] place-items-center rounded-full border border-white/40 font-semibold text-[10px] text-white/95 shadow-[0_1px_2px_rgba(10,14,26,0.18),0_0_0_2px_rgba(251,251,253,0.92)]"
      style={{
        backgroundImage: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        textShadow: "0 1px 1px rgba(0,0,0,0.3)",
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
    <section className="border-y border-ink/8 bg-paper-2/40">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-7 flex flex-wrap items-center gap-x-8 gap-y-3">
        <span className="eyebrow text-ink-400">Reconnaissances</span>
        <span className="hidden md:block flex-1 h-px bg-ink/8" />
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {items.map((l) => (
            <span
              key={l}
              className="font-medium text-[14px] tracking-[-0.005em] text-ink-700"
            >
              {l}
            </span>
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
          eyebrow="01 / Catalogue"
          title={
            <>
              Six programmes spécialisés.{" "}
              <span className="text-ink-400">Aucun superflu.</span>
            </>
          }
          subline="Calé sur des usages métier précis — du prompting aux agents, avec un volet conformité indissociable. Cohortes restreintes, cas réels, livrables vérifiables."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/8 border border-ink/8 rounded-sm overflow-hidden">
          {programmes.map((p) => (
            <article
              key={p.code}
              className="card p-7 md:p-8 group flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="mono text-[10.5px] tracking-[0.18em] uppercase text-ink-400 tab-nums">
                  {p.no} · {p.code}
                </span>
                {p.badge && (
                  <span className="mono text-[9.5px] tracking-[0.18em] uppercase bg-brand text-white px-2 py-0.5 rounded-full font-medium">
                    {p.badge}
                  </span>
                )}
              </div>
              <h3 className="display-md text-ink">{p.title}</h3>
              <p className="mt-4 text-[15px] leading-[1.6] text-ink-500 flex-1">
                {p.summary}
              </p>
              <div className="mt-7 pt-5 border-t border-ink/8 flex items-center gap-3 mono text-[10.5px] tracking-[0.16em] uppercase text-ink-500">
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

/* ───────────────────────── METHODE ─────────────────────────────── */

function Methode() {
  return (
    <section id="methode" className="px-6 md:px-10 py-24 md:py-32 border-t border-ink/8">
      <div className="mx-auto max-w-[1280px]">
        <SectionHead
          eyebrow="02 / Méthode"
          title={
            <>
              Le parcours,{" "}
              <span className="text-ink-400">en six étapes.</span>
            </>
          }
          subline="Du diagnostic à la certification, chaque jalon est tenu — sans latence administrative, sans dilution pédagogique."
        />

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
          eyebrow="03 / Pourquoi nous"
          title={
            <>
              Quatre raisons.{" "}
              <span className="text-ink-400">Toutes vérifiables.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/8 border border-ink/8 rounded-sm overflow-hidden">
          {pourquoi.map((p) => (
            <article key={p.no} className="card p-8 md:p-10 scroll-rise">
              <div className="flex items-baseline justify-between mb-6">
                <span className="mono text-[12px] tracking-[0.18em] tab-nums text-brand font-semibold">
                  {p.no}
                </span>
                <span className="mono text-[10.5px] tracking-[0.18em] uppercase text-ink-400">
                  {p.eyebrow}
                </span>
              </div>
              <h3 className="display-md text-ink max-w-[22ch]">{p.title}</h3>
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
      className="px-6 md:px-10 py-24 md:py-32 border-t border-ink/8"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-4 lg:col-span-3 order-2 md:order-1">
            <figure className="aspect-[3/4] relative overflow-hidden border border-ink/12 rounded-sm card-dark">
              <div className="absolute inset-0 grid place-items-center">
                <span
                  className="display font-semibold tracking-[-0.04em] leading-none text-paper"
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
            </figure>
            <p className="mt-3 mono text-[10.5px] tracking-[0.16em] uppercase text-ink-400">
              ↳ Lead trainer · Founder
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-8 lg:col-start-5 order-1 md:order-2">
            <span className="eyebrow-brand mb-6 block">04 / Le formateur</span>
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
      className="px-6 md:px-10 py-24 md:py-32 bg-paper-2/50 border-t border-ink/8"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionHead
          eyebrow="05 / Cas concrets"
          title={
            <>
              Ce qu'ils en disent.{" "}
              <span className="text-ink-400">Avis vérifiés.</span>
            </>
          }
          subline="Promotions I à V — note moyenne 5,0 / 5. Indicateurs ROI mesurés à J+30."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-ink/8 border border-ink/8 rounded-sm overflow-hidden">
          {temoignages.map((t, i) => (
            <figure
              key={i}
              className="card p-8 md:p-10 scroll-rise flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
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
                <span className="mono text-[9.5px] tracking-[0.18em] uppercase text-brand bg-brand/8 border border-brand/22 px-2 py-1 rounded-full">
                  {t.metric}
                </span>
              </div>
              <blockquote className="text-[17px] lg:text-[18px] leading-[1.5] tracking-[-0.005em] text-ink flex-1">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-ink/10 flex items-end justify-between gap-4">
                <div>
                  <div className="text-[14.5px] font-semibold text-ink">
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
      className="px-6 md:px-10 py-24 md:py-32 bg-ink-800 text-paper border-t border-ink/8 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(45,79,224,0.32),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-[1100px]">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="col-span-12 md:col-span-7">
            <span className="mono text-[11px] tracking-[0.22em] uppercase text-brand-300 mb-6 block">
              06 / Démarrer
            </span>
            <h2 className="display-lg text-paper">
              Lancez votre diagnostic.
              <br />
              <span className="text-paper/55 font-normal">
                Gratuit. 30 minutes.
              </span>
            </h2>
            <p className="mt-7 max-w-[52ch] text-[16px] md:text-[18px] leading-[1.55] text-paper/65">
              Avec un conseiller pédagogique. Repartez avec un programme calé
              sur vos contraintes — calendrier, budget, conformité,
              livrables.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <form
              action="mailto:contact@academia.fr"
              method="post"
              className="card-dark p-6 md:p-7 rounded-sm"
            >
              <label
                htmlFor="cta-email"
                className="mono text-[10.5px] tracking-[0.18em] uppercase text-brand-300 block mb-3"
              >
                E-mail professionnel
              </label>
              <input
                id="cta-email"
                type="email"
                name="email"
                required
                placeholder="prenom.nom@organisation.fr"
                className="w-full bg-white/[0.06] border border-white/15 px-4 py-3 text-[14px] text-paper placeholder:text-paper/40 focus:outline-none focus:border-brand-300 focus:bg-white/[0.1] rounded-sm transition-colors"
              />
              <button
                type="submit"
                className="btn-brand w-full justify-center mt-4 text-[14px]"
              >
                Demander mon entretien
                <span className="arrow" aria-hidden>→</span>
              </button>
              <p className="mt-3 mono text-[10px] tracking-[0.16em] uppercase text-paper/45 text-center">
                Réponse 24 h ouvrées · RGPD · Sans engagement
              </p>
            </form>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 border border-white/8 rounded-sm overflow-hidden">
          {[
            ["WhatsApp", "+33 6 XX XX XX XX"],
            ["E-mail", "contact@academia.fr"],
            ["Horaires", "L–V · 09 h – 19 h"],
            ["Bureau", "Paris XV · Distanciel"],
          ].map(([k, v]) => (
            <div key={k} className="card-dark py-5 px-5">
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
    <footer className="bg-paper-3 px-6 md:px-10 pt-16 pb-10 border-t border-ink/8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <a
              href="#top"
              className="font-medium tracking-[-0.02em] text-[18px] text-ink"
            >
              Academ<span className="font-semibold text-brand">IA</span>
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
