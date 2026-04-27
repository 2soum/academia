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
      "Top formation Marketing. Le passage par les agents et l'automatisation a transformé ma manière de produire et de mesurer.",
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

export default function Home() {
  return (
    <main className="font-sans text-ink">
      <StatusBar />
      <Header />
      <Hero />
      <TrustStrip />
      <Statement />
      <Stats />
      <Catalogue />
      <Methode />
      <Pourquoi />
      <Formateur />
      <Temoignages />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ───────────────────────────────────────── */

function StatusBar() {
  return (
    <div className="border-b border-ink/10 bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-9 flex items-center justify-between micro text-ink-mute">
        <div className="flex items-center gap-2.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-acide-3" />
          <span>Promotion VI · Inscriptions ouvertes — Rentrée 2026</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span>Qualiopi · CPF · OPCO</span>
          <span>FR</span>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────── */

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/85 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
        <a
          href="#"
          aria-label="AcademIA"
          className="font-medium tracking-[-0.02em] text-[19px] leading-none"
        >
          Academ<span className="font-semibold">IA</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-[14px] text-ink-soft">
          <a href="#catalogue" className="hover:text-ink transition-colors">
            Formations
          </a>
          <a href="#methode" className="hover:text-ink transition-colors">
            Méthode
          </a>
          <a href="#formateur" className="hover:text-ink transition-colors">
            Formateur
          </a>
          <a href="#temoignages" className="hover:text-ink transition-colors">
            Témoignages
          </a>
          <a href="#contact" className="hover:text-ink transition-colors">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="lift hidden sm:inline-flex items-center gap-2 bg-ink text-paper px-4 py-2 text-[13px] font-medium hover:bg-ink-soft"
        >
          Demander un entretien
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

/* ───────────────────────────────────────── */

function Hero() {
  return (
    <section className="px-6 lg:px-10 pt-14 lg:pt-24 pb-20 lg:pb-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="col-span-12 lg:col-span-8 rise">
            <div className="micro text-ink-mute mb-8 flex items-center gap-2.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-acide-3" />
              Organisme de formation IA · Qualiopi
            </div>
            <h1
              className="font-medium tracking-[-0.035em] leading-[0.98] balance"
              style={{ fontSize: "clamp(44px, 7.4vw, 122px)" }}
            >
              Une école d'
              <span className="font-light italic">intelligence artificielle</span>
              <span className="text-ink-mute">.</span> Pour les{" "}
              <span className="border-b-[3px] border-acide-2 pb-1">
                praticiens
              </span>{" "}
              exigeants.
            </h1>
            <p className="mt-10 max-w-2xl text-[17px] lg:text-[19px] text-ink-soft leading-[1.55] pretty rise-1">
              Programmes courts, certifiants Qualiopi, conçus pour le secteur
              public, juridique et marketing. Cohortes restreintes, suivi
              humain, livrables vérifiables.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 rise-2">
              <a
                href="#contact"
                className="lift inline-flex items-center justify-center gap-2 bg-ink text-paper px-6 py-3.5 text-[14px] font-medium hover:bg-ink-soft"
              >
                Demander ma formation
                <span aria-hidden>→</span>
              </a>
              <a
                href="#catalogue"
                className="lift inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ink/20 text-[14px] hover:bg-ink hover:text-paper hover:border-ink"
              >
                Voir les programmes
              </a>
            </div>
          </div>

          {/* Cohort info card */}
          <div className="col-span-12 lg:col-span-4 rise-3">
            <div className="border border-ink/15 bg-paper">
              <div className="flex items-center justify-between border-b border-ink/15 px-5 py-3">
                <span className="micro">Promotion VI</span>
                <span className="micro tab text-ink-mute">MMXXVI</span>
              </div>
              <dl className="px-5 py-1 divide-y divide-ink/10">
                <Row k="Début" v="Mars 2026" />
                <Row k="Places" v="14 / 21" />
                <Row k="Format" v="100 % en ligne" />
                <Row k="Durée" v="14 – 28 h" />
                <Row k="Suivi" v="Personnalisé" />
                <Row k="Note" v="5,0 / 5" />
              </dl>
              <div className="border-t border-ink/15 px-5 py-3 flex items-center justify-between">
                <span className="micro text-ink-mute">Statut</span>
                <span className="micro flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-acide-3" />
                  Inscriptions ouvertes
                </span>
              </div>
            </div>
            <p className="mt-3 micro text-ink-mute leading-relaxed">
              ↳ Cohorte limitée à 21 places · Sélection sur entretien
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }) {
  return (
    <div className="flex items-baseline justify-between py-2.5">
      <dt className="micro text-ink-mute">{k}</dt>
      <dd className="text-[14px] tab">{v}</dd>
    </div>
  );
}

/* ───────────────────────────────────────── */

function TrustStrip() {
  const items = ["Qualiopi", "CPF", "OPCO", "Datadock", "France Compétences"];
  return (
    <section className="border-y border-ink/10 bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-7 flex flex-wrap items-center gap-x-8 gap-y-3">
        <span className="micro text-ink-mute">Reconnaissances</span>
        <span className="hidden md:block flex-1 h-px bg-ink/10" />
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {items.map((l) => (
            <span
              key={l}
              className="font-medium text-[15px] tracking-[-0.01em] text-ink-soft"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────── */

function Statement() {
  return (
    <section className="px-6 lg:px-10 py-20 lg:py-28">
      <div className="max-w-[1100px] mx-auto text-center scroll-rise">
        <div className="micro text-ink-mute mb-8">Promesse</div>
        <p
          className="font-light tracking-[-0.025em] leading-[1.15] balance"
          style={{ fontSize: "clamp(28px, 4.2vw, 60px)" }}
        >
          Nous formons des professionnels qui doivent{" "}
          <span className="font-semibold">livrer</span> — pas des amateurs qui
          veulent <span className="font-semibold">comprendre</span>.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────── */

function Stats() {
  const stats = [
    {
      num: "06",
      suffix: null,
      label: "Programmes spécialisés",
      caption: "Catalogue 2026",
    },
    {
      num: "120",
      suffix: "+",
      label: "Apprenants formés",
      caption: "Promotions I → V",
    },
    {
      num: "5,0",
      suffix: "/5",
      label: "Note de satisfaction",
      caption: "Avis vérifiés",
    },
    {
      num: "100",
      suffix: " %",
      label: "Recommandent AcademIA",
      caption: "Enquête mars 2026",
    },
  ];
  return (
    <section className="px-6 lg:px-10 py-16 lg:py-24 border-t border-ink/15">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <span className="micro text-ink-mute">Chiffres clefs · MMXXVI</span>
          <span className="micro text-ink-mute hidden md:inline">
            Audit interne · janvier 2026
          </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {stats.map((s, i) => (
            <div key={i} className="scroll-rise">
              <div className="micro text-ink-mute mb-4 tab">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                className="font-medium leading-[0.95] tracking-[-0.045em] tab"
                style={{ fontSize: "clamp(48px, 6.4vw, 92px)" }}
              >
                {s.num}
                {s.suffix && (
                  <span className="text-ink-mute font-light">{s.suffix}</span>
                )}
              </div>
              <div className="mt-5 text-[15px] max-w-[22ch]">{s.label}</div>
              <div className="mt-1 micro text-ink-mute">{s.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────── */

function SectionHeader({ eyebrow, title, subline }) {
  return (
    <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-12 lg:mb-16 scroll-rise">
      <div className="col-span-12 lg:col-span-3">
        <div className="micro text-ink-mute">{eyebrow}</div>
      </div>
      <div className="col-span-12 lg:col-span-9">
        <h2
          className="font-medium tracking-[-0.03em] leading-[1.0] balance"
          style={{ fontSize: "clamp(34px, 5.5vw, 80px)" }}
        >
          {title}
        </h2>
        {subline && (
          <p className="mt-6 max-w-2xl text-[16px] lg:text-[18px] text-ink-soft leading-[1.6] pretty">
            {subline}
          </p>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────────────────────── */

function Catalogue() {
  return (
    <section
      id="catalogue"
      className="px-6 lg:px-10 py-20 lg:py-28 border-t border-ink/15"
    >
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="01 / Catalogue"
          title="Six programmes spécialisés."
          subline="Calé sur des usages métier précis — du prompting aux agents, avec un volet conformité indissociable."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/15 border border-ink/15">
          {programmes.map((p) => (
            <article
              key={p.code}
              className="bg-paper p-7 lg:p-8 group lift hover:bg-paper-2/40"
            >
              <div className="flex items-center justify-between mb-7">
                <span className="micro text-ink-mute tab">
                  {p.no} · {p.code}
                </span>
                {p.badge && (
                  <span className="micro bg-acide text-ink px-2 py-0.5">
                    {p.badge}
                  </span>
                )}
              </div>
              <h3 className="font-medium text-[22px] lg:text-[24px] leading-[1.15] tracking-[-0.015em] pretty">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.55] text-ink-soft">
                {p.summary}
              </p>
              <div className="mt-7 pt-5 border-t border-ink/10 flex items-center gap-4 micro text-ink-mute">
                <span>{p.duration}</span>
                <span className="w-px h-3 bg-ink/20" />
                <span>{p.format}</span>
                <span className="ml-auto group-hover:text-ink transition-colors">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <a
            href="#contact"
            className="micro text-ink-mute hover:text-ink inline-flex items-center gap-2"
          >
            ↓ Catalogue PDF — 2,4 Mo
          </a>
          <span className="micro text-ink-mute">
            Sur-mesure entreprise · sur demande
          </span>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────── */

function Methode() {
  return (
    <section
      id="methode"
      className="px-6 lg:px-10 py-20 lg:py-28 border-t border-ink/15"
    >
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="02 / Méthode"
          title="Le parcours, en six étapes."
          subline="Du diagnostic à la certification, chaque jalon est tenu — sans latence administrative, sans dilution pédagogique."
        />
        <ol className="border-t border-ink/15">
          {methode.map((step) => (
            <li
              key={step.no}
              className="grid grid-cols-12 gap-4 lg:gap-10 py-7 lg:py-9 border-b border-ink/15 group transition-colors hover:bg-paper-2/40 -mx-3 px-3"
            >
              <div className="col-span-2 lg:col-span-1 micro text-ink-mute tab pt-1">
                {step.no}
              </div>
              <div className="col-span-10 lg:col-span-7">
                <h3 className="font-medium text-[22px] lg:text-[26px] leading-[1.2] tracking-[-0.015em] pretty">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] lg:text-[16px] leading-[1.6] text-ink-soft max-w-2xl">
                  {step.body}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:flex lg:items-start lg:justify-end">
                <span className="inline-flex items-center gap-2 micro text-ink-mute border border-ink/15 px-3 py-1.5">
                  <span aria-hidden>↳</span>
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

/* ───────────────────────────────────────── */

function Pourquoi() {
  return (
    <section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-ink/15 bg-paper-2/40">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="03 / Pourquoi nous"
          title="Quatre raisons. Toutes vérifiables."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/15 border border-ink/15">
          {pourquoi.map((p, i) => (
            <article key={i} className="bg-paper p-8 lg:p-10 scroll-rise">
              <div className="flex items-baseline justify-between mb-6">
                <span className="micro tab">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="micro text-ink-mute">{p.eyebrow}</span>
              </div>
              <h3 className="font-medium text-[22px] lg:text-[28px] leading-[1.15] tracking-[-0.015em] pretty">
                {p.title}
              </h3>
              <p className="mt-5 text-[15px] lg:text-[16px] text-ink-soft leading-[1.6] max-w-xl">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────── */

function Formateur() {
  return (
    <section
      id="formateur"
      className="px-6 lg:px-10 py-20 lg:py-28 border-t border-ink/15"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-3 order-2 lg:order-1">
            <figure className="aspect-[3/4] bg-ink relative overflow-hidden border border-ink/20">
              <div className="absolute inset-0 grid place-items-center text-paper">
                <span
                  className="font-medium tracking-[-0.04em] leading-none"
                  style={{ fontSize: "clamp(80px, 12vw, 156px)" }}
                >
                  DT
                </span>
              </div>
              <div className="absolute top-3 left-3 right-3 flex justify-between micro text-paper/60">
                <span>Portrait</span>
                <span>I / I</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between micro text-paper/60">
                <span>D. Thiam</span>
                <span>Lead trainer</span>
              </div>
            </figure>
            <p className="mt-3 micro text-ink-mute">
              ↳ Photographie · Studio Paris XV
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5 order-1 lg:order-2">
            <div className="micro text-ink-mute mb-6">04 / Le formateur</div>
            <h2
              className="font-medium tracking-[-0.03em] leading-[1.0] balance"
              style={{ fontSize: "clamp(36px, 5.5vw, 84px)" }}
            >
              Diakaryou Thiam.
            </h2>
            <div className="mt-8 space-y-5 text-[16px] lg:text-[17px] leading-[1.65] max-w-2xl">
              <p>
                Juriste public de formation — Master 2 Droit public de
                l'économie — et praticien opérationnel de l'IA générative
                depuis quatre ans.
              </p>
              <p className="text-ink-soft">
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
      <dt className="micro text-ink-mute mb-1.5">{k}</dt>
      <dd className="text-[15px] leading-tight">{v}</dd>
    </div>
  );
}

/* ───────────────────────────────────────── */

function Temoignages() {
  return (
    <section
      id="temoignages"
      className="px-6 lg:px-10 py-20 lg:py-28 border-t border-ink/15 bg-paper-2/40"
    >
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="05 / Témoignages"
          title="Ce qu'ils en disent."
          subline="Avis vérifiés des promotions I à V — note moyenne 5,0 / 5."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-ink/15 border border-ink/15">
          {temoignages.map((t, i) => (
            <figure key={i} className="bg-paper p-8 lg:p-10 scroll-rise">
              <div className="micro text-acide-3 mb-6 tab">★★★★★ · 5,0</div>
              <blockquote className="text-[18px] lg:text-[20px] leading-[1.4] tracking-[-0.005em] font-medium pretty">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-ink/15 flex items-end justify-between gap-4">
                <div>
                  <div className="text-[15px] font-medium">{t.name}</div>
                  <div className="micro text-ink-mute mt-1">{t.role}</div>
                </div>
                <div className="micro text-ink-mute">{t.promo}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────── */

function FinalCTA() {
  return (
    <section
      id="contact"
      className="px-6 lg:px-10 py-20 lg:py-32 bg-ink text-paper border-t border-ink/15 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto relative">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-3 micro text-paper/55">
            06 / Démarrer
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              className="font-medium tracking-[-0.035em] leading-[0.98] balance"
              style={{ fontSize: "clamp(40px, 6.6vw, 116px)" }}
            >
              Réservez votre{" "}
              <span className="font-light italic">entretien</span> diagnostic.
            </h2>
            <p className="mt-8 max-w-2xl text-[18px] lg:text-[20px] text-paper/75 leading-[1.55] pretty">
              30 minutes, sans engagement, avec un conseiller pédagogique.
              Repartez avec un programme calé sur vos contraintes — calendrier,
              budget, conformité, livrables.
            </p>
            <div className="mt-12 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <input
                  type="email"
                  placeholder="prenom.nom@organisation.fr"
                  aria-label="E-mail professionnel"
                  className="md:col-span-8 bg-transparent border border-paper/25 px-5 py-4 text-[15px] placeholder:text-paper/40 focus:outline-none focus:border-acide focus:ring-0 transition-colors"
                />
                <a
                  href="mailto:contact@academia.fr"
                  className="lift md:col-span-4 inline-flex items-center justify-center gap-2 bg-acide text-ink px-5 py-4 text-[14px] font-medium hover:bg-paper"
                >
                  Demander un entretien
                  <span aria-hidden>→</span>
                </a>
              </div>
              <p className="mt-3 micro text-paper/45">
                Réponse sous 24 h ouvrées · Données conformes RGPD
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 border-t border-paper/20 pt-8">
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
    <div>
      <dt className="micro text-paper/55 mb-1.5">{k}</dt>
      <dd className="text-[15px]">{v}</dd>
    </div>
  );
}

/* ───────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-paper px-6 lg:px-10 pt-14 pb-10 border-t border-ink/15">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="font-medium tracking-[-0.02em] text-[19px] leading-none">
              Academ<span className="font-semibold">IA</span>
            </div>
            <p className="mt-4 text-[14px] text-ink-mute max-w-md leading-[1.65]">
              Organisme français de formation, indépendant, certifié Qualiopi.
              Spécialiste de l'IA générative appliquée aux secteurs public,
              juridique et marketing.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-2 micro border border-ink/15 px-2.5 py-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-acide-3" />
                Qualiopi
              </span>
              <span className="inline-flex items-center micro border border-ink/15 px-2.5 py-1.5 text-ink-mute">
                CPF · OPCO
              </span>
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

        <div className="mt-14 flex flex-col lg:flex-row justify-between gap-4 pt-6 border-t border-ink/15 micro text-ink-mute">
          <div>© MMXXVI · AcademIA SAS — Paris, France</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-ink">
              Règlement intérieur
            </a>
            <a href="#" className="hover:text-ink">
              CGV
            </a>
            <a href="#" className="hover:text-ink">
              Confidentialité
            </a>
            <a href="#" className="hover:text-ink">
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
      <div className="micro text-ink-mute mb-4">{title}</div>
      <ul className="space-y-2.5 text-[14px]">{children}</ul>
    </div>
  );
}

function FootLink({ children }) {
  return (
    <li>
      <a href="#" className="hover:text-ink transition-colors">
        {children}
      </a>
    </li>
  );
}
