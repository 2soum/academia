const programmes = [
  {
    no: "I",
    code: "JUR-IA-101",
    title: "IA pour juristes publics",
    summary:
      "Maîtriser les usages, les risques et la rédaction assistée — sans compromis sur la conformité.",
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
    summary:
      "Synthèses sourcées, dossiers thématiques, livrables vérifiables.",
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
    title: "Entretien diagnostic",
    body: "Trente minutes avec un conseiller pour cadrer vos objectifs, votre cas d'usage, votre budget.",
    detail: "Visio · 30 min · sans engagement",
  },
  {
    no: "02",
    title: "Inscription & ouverture des accès",
    body: "Convention pédagogique signée, accès e-learning ouverts, calendrier livré sous 48 heures.",
    detail: "Démarrage en 48 h",
  },
  {
    no: "03",
    title: "Formation 100 % en ligne",
    body: "Modules brefs, cas réels, exercices avec correction. Rythme libre, accompagnement humain.",
    detail: "Plateforme propriétaire",
  },
  {
    no: "04",
    title: "Échanges & entraide",
    body: "Café-classe hebdomadaire, fil de discussion, retours formateur sur livrables.",
    detail: "Communauté privée",
  },
  {
    no: "05",
    title: "Attestation de suivi",
    body: "Document officiel signé numériquement, remis à l'issue du parcours pédagogique.",
    detail: "PDF · Conforme Qualiopi",
  },
  {
    no: "06",
    title: "Passage de la certification",
    body: "Examen surveillé, jury indépendant, passeport de compétences valorisable en entretien.",
    detail: "Reconnaissance France Compétences",
  },
];

const pourquoi = [
  {
    eyebrow: "Méthode",
    title: "Pratique, cadré, immédiatement réutilisable.",
    body: "Rien de générique. Chaque module porte un livrable concret que vos équipes peuvent activer dès la fin de la session — pas dans six semaines.",
  },
  {
    eyebrow: "Sur-mesure",
    title: "Ajusté à vos contraintes métier.",
    body: "Programmes co-construits avec votre cellule formation. Cas d'études issus de votre secteur — droit public, marketing, communication institutionnelle.",
  },
  {
    eyebrow: "Format",
    title: "Flexible, asynchrone, exigeant.",
    body: "Capsules brèves, jalons hebdomadaires, exercices corrigés individuellement. Compatible avec un emploi du temps soutenu.",
  },
  {
    eyebrow: "Suivi",
    title: "Un humain, à chaque étape.",
    body: "Pas de tunnel automatisé. Conseiller pédagogique dédié, formateur joignable, retour personnalisé sur chaque livrable rendu.",
  },
];

const temoignages = [
  {
    quote:
      "Top suivi sur ma formation IA — je recommande sans réserve. Les cas d'usage publics étaient enfin sérieux, pas des gadgets de démo.",
    name: "C. Martin",
    role: "Responsable conformité — collectivité territoriale",
    promo: "Promotion IV",
  },
  {
    quote:
      "Je recommande, top formation Marketing. Le passage par les agents et l'automatisation a transformé ma manière de produire et de mesurer.",
    name: "L. Dubois",
    role: "Directrice de la communication",
    promo: "Promotion III",
  },
  {
    quote:
      "Merci pour l'accompagnement, l'écoute et la rigueur. AcademIA tient ses promesses, du diagnostic à la certification — sans détour.",
    name: "S. Khelifi",
    role: "Juriste — service public",
    promo: "Promotion V",
  },
];

const tickerItems = [
  "Rentrée 2026 — Inscriptions ouvertes",
  "Promotion VI · Places limitées",
  "Certifié Qualiopi — Actions de formation",
  "Public visé : juristes, marketeurs, agents publics",
  "Financement CPF · OPCO · plan d'entreprise",
  "Paris ⸱ Toulouse ⸱ Distanciel",
];

export default function Home() {
  return (
    <main className="font-sans text-ink bg-parchment">
      <TopTicker />
      <Header />
      <Hero />
      <Manifesto />
      <Stats />
      <Catalogue />
      <Methode />
      <Pourquoi />
      <Formateur />
      <Temoignages />
      <Accreditations />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ────────────────────────────────────────────────────────── */

function TopTicker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="bg-ink text-parchment overflow-hidden border-b border-ink/40">
      <div className="flex whitespace-nowrap py-2.5">
        <div className="flex marquee min-w-max">
          {items.map((t, i) => (
            <span key={i} className="micro mx-7 inline-flex items-center gap-3">
              <span className="text-acide">✦</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-parchment/85 border-b border-ink/15">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between gap-6">
        <a
          href="#"
          aria-label="AcademIA — accueil"
          className="font-serif text-2xl tracking-[-0.02em] flex items-center gap-2 leading-none"
        >
          <span>
            Academ<span className="italic text-bordeaux">IA</span>
          </span>
          <span className="text-acide text-base translate-y-[-2px]">●</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-[13px] tracking-[0.01em]">
          <a href="#catalogue" className="hover:text-bordeaux transition-colors">
            Formations
          </a>
          <a href="#methode" className="hover:text-bordeaux transition-colors">
            Méthode
          </a>
          <a href="#formateur" className="hover:text-bordeaux transition-colors">
            Le&nbsp;formateur
          </a>
          <a
            href="#temoignages"
            className="hover:text-bordeaux transition-colors"
          >
            Témoignages
          </a>
          <a href="#contact" className="hover:text-bordeaux transition-colors">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="lift hidden sm:inline-flex items-center gap-2 bg-ink text-parchment px-5 py-2.5 rounded-full micro hover:bg-bordeaux"
        >
          Demander ma formation
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

/* ────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative pt-16 pb-28 lg:pt-24 lg:pb-44 px-6 lg:px-12 overflow-hidden">
      {/* Decorative oversize glyph */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-4 hidden lg:block opacity-[0.08] select-none"
      >
        <span className="font-serif italic text-[460px] leading-none tracking-[-0.04em]">
          Æ
        </span>
      </div>

      <div className="max-w-[1480px] mx-auto relative">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {/* Left meta column */}
          <aside className="col-span-12 lg:col-span-2 rise">
            <div className="micro mb-6">§ Établi · MMXXIV</div>
            <div className="text-sm leading-snug text-ink-soft max-w-[14ch]">
              Organisme français
              <br /> de formation
              <br /> spécialisé en
              <br /> intelligence
              <br /> artificielle.
            </div>
            <div className="mt-10 hidden lg:block">
              <CompassMark />
            </div>
          </aside>

          {/* Headline */}
          <div className="col-span-12 lg:col-span-8">
            <div className="micro mb-8 rise">
              <span className="text-bordeaux">●</span> Promotion VI ·
              Inscriptions ouvertes
            </div>
            <h1
              className="font-serif tracking-[-0.025em] leading-[0.9] balance"
              style={{ fontSize: "clamp(56px, 13vw, 224px)" }}
            >
              <span className="block rise">Exigez</span>
              <span className="block italic rise-2">l'excellence</span>
              <span className="block rise-3">en intelligence</span>
              <span className="block italic text-bordeaux rise-4">
                artificielle.
              </span>
            </h1>

            <div className="mt-12 lg:mt-16 grid grid-cols-12 gap-6 items-end">
              <p className="col-span-12 md:col-span-7 text-lg lg:text-xl leading-relaxed pretty rise-3 max-w-xl">
                AcademIA est l'organisme français de formation à l'IA appliquée
                au secteur public, juridique et marketing. Programmes courts,
                cadrés, certifiants — pour praticiens exigeants.
              </p>
              <div className="col-span-12 md:col-span-5 flex flex-col sm:flex-row gap-3 rise-4">
                <a
                  href="#contact"
                  className="lift inline-flex items-center justify-center gap-2 bg-ink text-parchment px-6 py-4 rounded-full micro hover:bg-bordeaux"
                >
                  Demander ma formation
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#catalogue"
                  className="lift inline-flex items-center justify-center gap-2 px-6 py-4 border border-ink/30 rounded-full micro hover:bg-ink hover:text-parchment"
                >
                  Voir le catalogue
                </a>
              </div>
            </div>
          </div>

          {/* Right meta */}
          <aside className="col-span-12 lg:col-span-2 lg:text-right">
            <div className="micro mb-6">№ MMXXVI · École · IA</div>
            <div className="lg:flex lg:justify-end">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-acide text-ink tag glow-pulse">
                ● Qualiopi
              </span>
            </div>
            <div className="mt-8 text-sm text-ink-soft max-w-[16ch] lg:ml-auto">
              <div className="flex justify-between border-t border-ink/20 pt-2 mt-2">
                <span className="micro">Cohorte</span>
                <span>VI</span>
              </div>
              <div className="flex justify-between border-t border-ink/20 pt-2 mt-2">
                <span className="micro">Places</span>
                <span>14</span>
              </div>
              <div className="flex justify-between border-t border-ink/20 pt-2 mt-2">
                <span className="micro">Note</span>
                <span>5/5</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Editorial fold rule + epigraph */}
        <div className="mt-16 lg:mt-24 grid grid-cols-12 gap-6 items-center text-sm">
          <div className="col-span-2 lg:col-span-3">
            <span className="ink-rule" />
          </div>
          <div className="col-span-8 lg:col-span-6 text-center font-serif italic text-base lg:text-lg text-ink-soft">
            «&nbsp;Une école pour praticiens — pas pour curieux.&nbsp;»
          </div>
          <div className="col-span-2 lg:col-span-3">
            <span className="ink-rule" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CompassMark() {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      className="w-20 h-20 text-bordeaux spin-slow"
    >
      <g fill="currentColor">
        <path d="M50 4 L54 46 L96 50 L54 54 L50 96 L46 54 L4 50 L46 46 Z" />
      </g>
      <circle
        cx="50"
        cy="50"
        r="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <text
        x="50"
        y="53"
        textAnchor="middle"
        fontSize="9"
        fill="currentColor"
        fontFamily="var(--font-mono)"
        letterSpacing="0.4"
      >
        AE
      </text>
    </svg>
  );
}

/* ────────────────────────────────────────────────────────── */

function Manifesto() {
  return (
    <section className="relative bg-ink text-parchment py-28 lg:py-44 px-6 lg:px-12 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 -bottom-32 opacity-[0.06] select-none"
      >
        <span className="font-serif italic text-[520px] leading-none text-acide">
          ¶
        </span>
      </div>
      <div className="max-w-[1480px] mx-auto relative">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-3 micro text-acide">
            § 01 — Manifeste
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              className="font-serif leading-[1.02] tracking-[-0.018em] balance scroll-rise"
              style={{ fontSize: "clamp(36px, 5.6vw, 88px)" }}
            >
              Nous formons des professionnels qui doivent{" "}
              <em className="text-acide">livrer</em> — pas des amateurs qui
              veulent <em className="text-acide">comprendre</em>.
            </h2>
            <div className="mt-14 lg:mt-20 grid grid-cols-12 gap-6 lg:gap-12 text-base lg:text-[17px] leading-relaxed text-parchment/85">
              <p className="col-span-12 md:col-span-4 scroll-rise">
                <span className="micro text-acide block mb-3">i</span>
                AcademIA refuse les buffets de modules. Chaque parcours
                s'engage sur un livrable, un cas réel, une mesure de progrès —
                et un formateur joignable.
              </p>
              <p className="col-span-12 md:col-span-4 scroll-rise">
                <span className="micro text-acide block mb-3">ii</span>
                Le contenu est rigoureux parce qu'il est utile. Nos cohortes
                restreintes garantissent un suivi sérieux et une exigence
                partagée — pas un MOOC anonyme.
              </p>
              <p className="col-span-12 md:col-span-4 scroll-rise">
                <span className="micro text-acide block mb-3">iii</span>
                Nous vous remettons une boîte à outils que vos équipes
                activent dès le lundi — pas une promesse marketing à
                archiver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */

function Stats() {
  const stats = [
    { num: "VI", suffix: null, label: "programmes spécialisés", caption: "Catalogue 2026" },
    { num: "120", suffix: "+", label: "apprenants formés", caption: "Promotions I à V" },
    { num: "5", suffix: "/5", label: "note de satisfaction", caption: "Avis vérifiés" },
    { num: "Q", suffix: null, label: "Qualiopi · actions de formation", caption: "Cert. n° MMXXIV-128" },
  ];
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1480px] mx-auto">
        <div className="flex items-baseline justify-between mb-10 lg:mb-14">
          <div className="micro">Chiffres clefs · MMXXVI</div>
          <div className="micro hidden md:block text-ink-mute">
            audit interne · janvier 2026
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15 border border-ink/15">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-parchment p-7 lg:p-10 relative scroll-rise"
            >
              <div className="micro text-bordeaux mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                className="font-serif leading-[0.85] tracking-[-0.045em]"
                style={{ fontSize: "clamp(64px, 10vw, 156px)" }}
              >
                <span className="italic">{s.num}</span>
                {s.suffix && (
                  <span className="text-bordeaux">{s.suffix}</span>
                )}
              </div>
              <div className="mt-6 lg:mt-8 text-sm leading-snug max-w-[18ch]">
                {s.label}
              </div>
              <div className="mt-2 micro text-ink-mute">{s.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */

function Catalogue() {
  return (
    <section
      id="catalogue"
      className="py-28 lg:py-44 px-6 lg:px-12 bg-parchment-2 border-y border-ink/15"
    >
      <div className="max-w-[1480px] mx-auto">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 micro">
            § 02 — Catalogue
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              className="font-serif leading-[0.95] tracking-[-0.022em] balance scroll-rise"
              style={{ fontSize: "clamp(40px, 7.5vw, 116px)" }}
            >
              Six programmes. <em>Aucun</em> superflu.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft scroll-rise">
              Chaque programme est calé sur un usage métier précis — depuis la
              maîtrise du prompt jusqu'à l'orchestration d'agents, avec un
              volet conformité indissociable.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/15 border border-ink/15">
          {programmes.map((p) => (
            <article
              key={p.code}
              className="bg-parchment p-7 lg:p-10 group relative lift hover:bg-parchment-2"
            >
              <div className="flex items-baseline justify-between mb-7">
                <span className="font-serif italic text-3xl text-bordeaux">
                  {p.no}
                </span>
                <div className="flex items-center gap-2">
                  {p.badge && (
                    <span className="tag bg-acide text-ink px-2 py-1 rounded-full">
                      {p.badge}
                    </span>
                  )}
                  <span className="micro text-ink-mute">{p.code}</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl lg:text-[28px] leading-[1.1] tracking-[-0.012em] pretty">
                {p.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft text-[15px]">
                {p.summary}
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm">
                <span className="micro">{p.duration}</span>
                <span className="ink-rule flex-1" />
                <span className="micro">{p.format}</span>
              </div>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm border-b border-ink/30 pb-1 hover:border-bordeaux hover:text-bordeaux transition-colors"
              >
                Demander ce parcours
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <a
            href="#contact"
            className="micro inline-flex items-center gap-2 hover:text-bordeaux"
          >
            ↓ Catalogue complet (PDF — 2,4 Mo)
          </a>
          <div className="micro text-ink-mute">
            Programmes individuels · sur-mesure entreprise · sur demande
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */

function Methode() {
  return (
    <section id="methode" className="py-28 lg:py-44 px-6 lg:px-12">
      <div className="max-w-[1480px] mx-auto">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 micro">§ 03 — Méthode</div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              className="font-serif leading-[0.95] tracking-[-0.022em] balance scroll-rise"
              style={{ fontSize: "clamp(40px, 7.5vw, 116px)" }}
            >
              Le parcours, en <em>six chapitres</em>.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft scroll-rise">
              Du diagnostic à la certification, chaque jalon est tenu — sans
              latence administrative, sans dilution pédagogique.
            </p>
          </div>
        </div>

        <ol className="border-t border-ink/20">
          {methode.map((step) => (
            <li
              key={step.no}
              className="grid grid-cols-12 gap-4 lg:gap-10 py-8 lg:py-12 border-b border-ink/20 group transition-colors hover:bg-parchment-2"
            >
              <div className="col-span-3 lg:col-span-2">
                <div
                  className="font-serif leading-none tracking-[-0.04em] text-ink/30 group-hover:text-bordeaux transition-colors duration-700"
                  style={{ fontSize: "clamp(56px, 8.5vw, 132px)" }}
                >
                  {step.no}
                </div>
              </div>
              <div className="col-span-9 lg:col-span-6">
                <h3 className="font-serif text-2xl lg:text-[34px] leading-[1.1] tracking-[-0.01em] pretty">
                  {step.title}
                </h3>
                <p className="mt-4 text-base lg:text-lg leading-relaxed text-ink-soft max-w-2xl">
                  {step.body}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 flex items-start lg:justify-end">
                <span className="micro inline-flex items-center gap-2 self-start px-3.5 py-1.5 border border-ink/25 rounded-full">
                  <span className="text-bordeaux">↳</span>
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

/* ────────────────────────────────────────────────────────── */

function Pourquoi() {
  return (
    <section className="relative py-28 lg:py-44 px-6 lg:px-12 bg-ink text-parchment overflow-hidden">
      <div
        aria-hidden
        className="absolute right-8 top-12 hidden lg:block opacity-70"
      >
        <CompassMarkAcid />
      </div>
      <div className="max-w-[1480px] mx-auto relative">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 micro text-acide">
            § 04 — Pourquoi nous
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              className="font-serif leading-[0.95] tracking-[-0.022em] balance scroll-rise"
              style={{ fontSize: "clamp(40px, 7.5vw, 116px)" }}
            >
              Quatre raisons. <em className="text-acide">Toutes vérifiables.</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-parchment/20 border border-parchment/20">
          {pourquoi.map((p, i) => (
            <article
              key={i}
              className="bg-ink p-8 lg:p-12 relative scroll-rise"
            >
              <div className="flex items-baseline justify-between mb-6">
                <div className="micro text-acide">
                  {String(i + 1).padStart(2, "0")} · {p.eyebrow}
                </div>
                <span className="font-serif italic text-acide text-3xl leading-none">
                  *
                </span>
              </div>
              <h3 className="font-serif text-2xl lg:text-[36px] leading-[1.08] tracking-[-0.012em] pretty">
                {p.title}
              </h3>
              <p className="mt-6 leading-relaxed text-parchment/75 max-w-xl">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompassMarkAcid() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className="w-36 h-36 spin-slow">
      <g fill="#cee04a">
        <path d="M50 4 L54 46 L96 50 L54 54 L50 96 L46 54 L4 50 L46 46 Z" />
      </g>
      <circle
        cx="50"
        cy="50"
        r="36"
        fill="none"
        stroke="#cee04a"
        strokeWidth="0.6"
        opacity="0.5"
      />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────── */

function Formateur() {
  return (
    <section
      id="formateur"
      className="py-28 lg:py-44 px-6 lg:px-12 bg-parchment-2 border-y border-ink/15"
    >
      <div className="max-w-[1480px] mx-auto">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-7 lg:col-start-2 order-2 lg:order-1">
            <div className="micro mb-8">§ 05 — Le formateur</div>
            <h2
              className="font-serif leading-[0.92] tracking-[-0.025em] mb-12 balance scroll-rise"
              style={{ fontSize: "clamp(48px, 8.5vw, 132px)" }}
            >
              Diakaryou <span className="italic">Thiam</span>.
            </h2>
            <div className="space-y-6 text-lg leading-relaxed max-w-2xl scroll-rise">
              <p>
                Juriste public de formation — Master 2 Droit public de
                l'économie — avec une expérience approfondie en marchés
                publics et une pratique opérationnelle de l'IA générative
                depuis quatre ans.
              </p>
              <p className="text-ink-soft">
                Diakaryou conçoit chaque module à partir de cas réels :
                appels d'offres, pièces administratives, conformité RGPD,
                audit prompt. Sa pédagogie privilégie la rigueur
                méthodologique au sensationnel.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <CredItem k="Expérience" v="04 ans · IA & Droit" />
              <CredItem k="Diplôme" v="Master 2 D. public" />
              <CredItem
                k="Spécialités"
                v="Marchés publics, RGPD, prompting"
              />
              <CredItem k="Cohortes formées" v="120+ apprenants" />
            </div>
          </div>

          {/* Stylized portrait card */}
          <div className="col-span-12 lg:col-span-3 lg:col-start-9 order-1 lg:order-2">
            <figure className="aspect-[3/4] bg-ink relative overflow-hidden border border-ink/30 lift">
              <div className="absolute inset-0 grid place-items-center text-parchment">
                <div className="text-center px-6">
                  <div
                    className="font-serif italic leading-none tracking-[-0.04em]"
                    style={{ fontSize: "clamp(80px, 14vw, 180px)" }}
                  >
                    DT
                  </div>
                  <div className="micro text-acide mt-6">
                    Lead trainer · Founder
                  </div>
                </div>
              </div>
              {/* Frame ornaments */}
              <div className="absolute top-3 left-3 right-3 flex justify-between micro text-parchment/70">
                <span>PORTRAIT N° I</span>
                <span>MMXXVI</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between micro text-parchment/70">
                <span>D. THIAM</span>
                <span>FONDATEUR</span>
              </div>
              {/* Corners */}
              <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-parchment/40" />
              <span className="absolute top-2 right-2 w-3 h-3 border-t border-r border-parchment/40" />
              <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-parchment/40" />
              <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-parchment/40" />
            </figure>
            <p className="mt-5 text-xs text-ink-soft italic max-w-xs leading-relaxed">
              «&nbsp;La technique sans rigueur juridique produit du
              risque. Nous enseignons les deux ensemble.&nbsp;»
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredItem({ k, v }) {
  return (
    <div className="border-t border-ink/30 pt-3">
      <div className="micro mb-1">{k}</div>
      <div className="text-base leading-tight">{v}</div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */

function Temoignages() {
  return (
    <section id="temoignages" className="py-28 lg:py-44 px-6 lg:px-12">
      <div className="max-w-[1480px] mx-auto">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20">
          <div className="col-span-12 lg:col-span-3 micro">
            § 06 — Témoignages
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              className="font-serif leading-[0.95] tracking-[-0.022em] balance scroll-rise"
              style={{ fontSize: "clamp(40px, 7.5vw, 116px)" }}
            >
              Ce qu'<em>elles et eux</em> en disent.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft scroll-rise">
              Avis vérifiés des promotions I à V. Note moyenne : 5/5.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-ink/15 border border-ink/15">
          {temoignages.map((t, i) => (
            <figure
              key={i}
              className="bg-parchment-2 p-8 lg:p-10 relative scroll-rise"
            >
              <div
                aria-hidden
                className="font-serif leading-none italic text-bordeaux mb-4"
                style={{ fontSize: "clamp(60px, 9vw, 120px)" }}
              >
                "
              </div>
              <blockquote className="font-serif text-xl lg:text-[26px] leading-[1.18] tracking-[-0.01em] pretty -mt-2">
                {t.quote}
              </blockquote>
              <figcaption className="mt-10 pt-6 border-t border-ink/20 flex items-end justify-between gap-4">
                <div>
                  <div className="text-base font-medium">{t.name}</div>
                  <div className="micro text-ink-mute mt-1">{t.role}</div>
                </div>
                <div className="text-right">
                  <div className="micro text-bordeaux mb-1">★★★★★</div>
                  <div className="micro text-ink-mute">{t.promo}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */

function Accreditations() {
  const items = [
    { label: "Qualiopi", italic: false, sub: "Actions de formation · Cert. MMXXIV-128" },
    { label: "CPF", italic: true, sub: "Compte personnel de formation" },
    { label: "OPCO", italic: false, sub: "Financement opérateurs de compétences" },
    { label: "Datadock", italic: true, sub: "Référencé · 21 indicateurs" },
  ];
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12 bg-parchment-3 border-y border-ink/15 relative overflow-hidden">
      <div className="max-w-[1480px] mx-auto relative">
        <div className="micro mb-10 text-center">
          Labels &amp; accréditations · Reconnaissance officielle
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 items-center justify-items-center">
          {items.map((it, i) => (
            <div key={i} className="text-center px-4">
              <div
                className={`font-serif leading-none mb-3 tracking-[-0.02em] ${it.italic ? "italic" : ""}`}
                style={{ fontSize: "clamp(40px, 5vw, 76px)" }}
              >
                {it.label}
              </div>
              <div className="micro text-ink-soft">{it.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */

function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-28 lg:py-44 px-6 lg:px-12 bg-ink text-parchment overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-12 select-none"
      >
        <span
          className="font-serif italic text-acide opacity-[0.07] leading-none"
          style={{ fontSize: "clamp(280px, 50vw, 720px)" }}
        >
          &amp;
        </span>
      </div>

      <div className="max-w-[1480px] mx-auto relative">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-3 micro text-acide">
            § 07 — Démarrer
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              className="font-serif leading-[0.9] tracking-[-0.025em] balance scroll-rise"
              style={{ fontSize: "clamp(48px, 9.5vw, 168px)" }}
            >
              Réservez votre <em className="text-acide">entretien</em>{" "}
              diagnostic.
            </h2>
            <p className="mt-8 lg:mt-10 text-xl lg:text-[22px] max-w-2xl leading-relaxed text-parchment/80 scroll-rise">
              30 minutes, sans engagement, avec un conseiller pédagogique.
              Repartez avec un programme calé sur vos contraintes — calendrier,
              budget, conformité, livrables.
            </p>

            <div className="mt-14 max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <input
                  type="email"
                  placeholder="prenom.nom@organisation.fr"
                  aria-label="Adresse e-mail professionnelle"
                  className="md:col-span-8 bg-transparent border border-parchment/30 px-5 py-5 text-base placeholder:text-parchment/45 focus:outline-none focus:border-acide focus:bg-parchment/5 rounded-full transition-colors"
                />
                <a
                  href="mailto:contact@academia.fr"
                  className="lift md:col-span-4 inline-flex items-center justify-center gap-2 bg-acide text-ink px-6 py-5 rounded-full font-medium tracking-wider uppercase text-xs hover:bg-parchment"
                >
                  Demander un entretien
                  <span aria-hidden>→</span>
                </a>
              </div>
              <p className="mt-4 micro text-parchment/55">
                Réponse sous 24 h ouvrées · Données traitées conformément au
                RGPD.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <Detail k="WhatsApp" v="+33 6 XX XX XX XX" />
              <Detail k="E-mail" v="contact@academia.fr" />
              <Detail k="Horaires" v="L–V · 09 h – 19 h" />
              <Detail k="Bureau" v="Paris XV · Distanciel" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({ k, v }) {
  return (
    <div className="border-t border-parchment/25 pt-3">
      <div className="micro text-acide mb-1">{k}</div>
      <div className="text-base">{v}</div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-parchment-3 px-6 lg:px-12 py-16 lg:py-20 border-t border-ink/15 relative">
      <div className="max-w-[1480px] mx-auto">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-serif text-3xl tracking-[-0.02em] flex items-center gap-2">
              <span>
                Academ<span className="italic text-bordeaux">IA</span>
              </span>
              <span className="text-acide text-base translate-y-[-2px]">●</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-sm text-ink-soft">
              Organisme de formation français, indépendant, certifié Qualiopi.
              Spécialiste de l'IA générative appliquée aux secteurs public,
              juridique et marketing.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="tag bg-acide text-ink px-3 py-1.5 rounded-full">
                ● Qualiopi
              </span>
              <span className="tag bg-ink text-parchment px-3 py-1.5 rounded-full">
                CPF · OPCO
              </span>
            </div>
          </div>

          <FooterCol title="Programmes">
            <FootLink>IA pour juristes publics</FootLink>
            <FootLink>Marketing augmenté</FootLink>
            <FootLink>Veille &amp; rédaction</FootLink>
            <FootLink>Prompting opérationnel</FootLink>
            <FootLink>Agents &amp; automatisation</FootLink>
            <FootLink>Conformité &amp; sécurité</FootLink>
          </FooterCol>

          <FooterCol title="Ressources">
            <FootLink>Blog</FootLink>
            <FootLink>E-learning</FootLink>
            <FootLink>Cas d'études</FootLink>
            <FootLink>Glossaire IA</FootLink>
          </FooterCol>

          <FooterCol title="Cabinet">
            <FootLink>Qui sommes-nous ?</FootLink>
            <FootLink>Nos membres</FootLink>
            <FootLink>Certifications</FootLink>
            <FootLink>Contact</FootLink>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col lg:flex-row justify-between gap-4 pt-6 border-t border-ink/15 micro text-ink-mute">
          <div>© MMXXVI · AcademIA SAS — Paris, France</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a className="hover:text-bordeaux" href="#">
              Règlement intérieur
            </a>
            <a className="hover:text-bordeaux" href="#">
              CGV
            </a>
            <a className="hover:text-bordeaux" href="#">
              Politique de confidentialité
            </a>
            <a className="hover:text-bordeaux" href="#">
              Mentions légales
            </a>
          </div>
        </div>

        {/* Oversize wordmark closing */}
        <div className="mt-16 -mb-6 overflow-hidden select-none" aria-hidden>
          <div
            className="font-serif italic leading-[0.85] tracking-[-0.045em] text-center"
            style={{ fontSize: "clamp(120px, 28vw, 540px)" }}
          >
            Academ<span className="text-bordeaux">IA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div className="col-span-6 md:col-span-4 lg:col-span-2 lg:col-start-auto">
      <div className="micro mb-5 text-ink-mute">{title}</div>
      <ul className="space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function FootLink({ children }) {
  return (
    <li>
      <a href="#" className="hover:text-bordeaux transition-colors">
        {children}
      </a>
    </li>
  );
}
