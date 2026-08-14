import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Context } from "react";

export type Lang = "fr" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  fr: {
    // Navbar
    "nav.projects": "Projets",
    "nav.automation": "Automatisation",
    "nav.method": "Méthode",
    "nav.about": "À propos",
    "nav.cta": "Discutons",
    "nav.link.app": "Application métier",
    "nav.link.process": "Digitalisation",
    "nav.link.cases": "Cas clients",

    // Hero
    "hero.badge": "Disponible pour nouveaux projets",
    "hero.title.1": "Je crée des ",
    "hero.title.highlight": "produits digitaux",
    "hero.title.2": " qui font la différence",
    "hero.cta.start": "Démarrer un projet",
    "hero.cta.projects": "Voir mes projets",

    // Tools
    "tools.label": "Outils",

    // Projects
    "projects.eyebrow": "Projets",
    "projects.title": "Projets sélectionnés",
    "projects.subtitle": "Web apps, SaaS et sites sur-mesure pour de vrais problèmes business.",
    "projects.discover": "Découvrir",
    "projects.baebles.desc": "Plateforme communautaire pour lecteurs de fantasy.",
    "projects.bookoo.desc": "Plateforme de réservation pour prothésistes ongulaires.",
    "projects.banti.desc": "Mise en relation entre entrepreneurs et investisseurs.",
    "projects.charline.desc": "Site pour médiatrice familiale à Bruxelles.",
    "projects.relentless.desc": "Site de coaching fitness avec réservation.",
    "projects.ria.desc": "Portfolio pour conteuse professionnelle.",
    "projects.hirering.desc": "Marketplace B2B connectant entreprises et agences de recrutement via un algorithme de matching intelligent.",
    "projects.liftclub.desc": "Landing page pour nightclub bruxellois.",

    // Automation
    "automation.eyebrow": "Automatisation & IA",
    "automation.title": "Automatisation & IA",
    "automation.subtitle": "Des agents IA, voicebots et workflows intelligents qui travaillent pour vous, 24h/24.",
    "automation.whatsapp.title": "Agents IA WhatsApp",
    "automation.whatsapp.desc": "Assistants intelligents sur WhatsApp qui qualifient vos leads, répondent aux questions et prennent des rendez-vous automatiquement.",
    "automation.voicebot.title": "Voicebots IA",
    "automation.voicebot.desc": "Agents vocaux qui gèrent vos appels entrants, prennent des messages et orientent vos clients vers le bon interlocuteur.",
    "automation.process.title": "Automatisation de processus",
    "automation.process.desc": "Workflows sur mesure qui connectent vos outils et éliminent les tâches répétitives : onboarding, relances, reporting.",
    "automation.crm.title": "CRM automatisé",
    "automation.crm.desc": "Pipeline de vente intelligent avec suivi automatique, relances programmées et notifications en temps réel.",
    "automation.matching.title": "Matching IA recrutement",
    "automation.matching.desc": "Algorithme de matching qui analyse les profils candidats et les connecte aux offres les plus pertinentes.",
    "automation.setting.title": "Setting automatisé",
    "automation.setting.desc": "Systèmes de prise de rendez-vous et de configuration client entièrement automatisés, du premier contact au suivi.",

    // Method
    "method.eyebrow": "Méthode",
    "method.title": "Comment se déroule un projet",
    "method.subtitle": "Quatre étapes, du diagnostic à la vie courante de l'outil.",
    "method.1.title": "Audit",
    "method.1.desc": "Je cartographie le processus et j'identifie ce qui coûte le plus de temps.",
    "method.2.title": "Conception",
    "method.2.desc": "Je définis l'outil cible, ses écrans et ses règles métier.",
    "method.3.title": "Construction et mise en production",
    "method.3.desc": "Je construis l'outil, je le teste avec vos équipes et je le mets en service.",
    "method.4.title": "Accompagnement",
    "method.4.desc": "Je fais évoluer l'outil au rythme de votre organisation.",

    // CTA
    "cta.eyebrow": "Un process à digitaliser ?",
    "cta.title": "Commençons par un audit de vos processus",
    "cta.subtitle": "Un cadrage clair de ce qui coince, de ce qui se digitalise et dans quel ordre.",
    "cta.button": "Demander un audit de process",

    // Footer
    "footer.role": "Product Consultant & Builder",
    "footer.description": "Je transforme les processus internes en outils sur-mesure, de l'audit à la mise en production.",
    "footer.offer": "Offre",
    "footer.references": "Références",
    "footer.contact": "Contact",
    "footer.offer.1": "Application métier sur mesure",
    "footer.offer.2": "Digitalisation des processus",
    "footer.offer.3": "Accompagnement continu",
    "footer.offer.4": "Audit de process",
    "footer.references.all": "Tous les cas clients",
    "footer.about": "À propos",
    "footer.legal.notice": "Mentions légales",
    "footer.legal.privacy": "Politique de confidentialité",
    "footer.lang.switch": "Passer en anglais",

    // About
    "about.hello": "À propos",
    "about.intro": "Ingénieure de gestion Solvay, j'accompagne startups et PMEs dans leur transformation digitale. Mon créneau : des solutions IA et automatisation qui génèrent un impact mesurable, livrées rapidement. Basée à Bruxelles.",
    "about.skills": "Agents IA,Automatisation,Applications métier,Product Management",
    "about.timeline.eyebrow": "Parcours",
    "about.timeline.title.1": "De Solvay au ",
    "about.timeline.title.highlight": "freelance",
    "about.m1.year": "2018",
    "about.m1.title": "Solvay & premiers ventures",
    "about.m1.text": "Master en Ingénierie de Gestion à Solvay Brussels School. Déjà le goût d'entreprendre avec des projets lancés en parallèle.",
    "about.m2.year": "2020",
    "about.m2.title": "HireRing — de 0 à 362K€ levés",
    "about.m2.text":
      "Co-fondation d'une marketplace B2B de recrutement reliant entreprises et agences via un algorithme de matching. Product-market fit validé et première levée de fonds.",
    "about.m3.year": "2024",
    "about.m3.title": "dualoop — Product Owner",
    "about.m3.text": "Pilotage de squads tech (CISO, CTO, devs). Gestion des exigences, des parties prenantes et du backlog, mise en place d'automatisations et livraison de features à fort ROI.",
    "about.m4.year": "2023",
    "about.m4.title": "Freelance — IA & Scale",
    "about.m4.text": "J'aide startups et PMEs à accélérer avec des agents IA, des workflows automatisés et des MVPs livrés en semaines.",
    "about.expertise.title.1": "Ce que j'apporte à ",
    "about.expertise.title.highlight": "votre projet",
    "about.e1.title": "IA sur-mesure",
    "about.e1.text": "Agents conversationnels, scoring prédictif et génération de contenu — déployés en production, pas en démo.",
    "about.e2.title": "Automatisation end-to-end",
    "about.e2.text": "Des workflows qui tournent tout seuls. Make et Zapier connectés à vos outils métier.",
    "about.e3.title": "MVP en semaines",
    "about.e3.text": "Du brief au produit live avec Bubble, Lovable et Airtable. Itérations rapides, résultats concrets.",
    "about.e4.title": "Conseil stratégique",
    "about.e4.text": "Audit IA, cartographie des opportunités d'automatisation et feuille de route actionnable.",
    "about.cta.eyebrow": "Un process à digitaliser ?",
    "about.cta.title.1": "Transformons vos idées en ",
    "about.cta.title.highlight": "résultats",
    "about.cta.subtitle": "Un premier échange gratuit pour identifier vos opportunités d'automatisation et d'IA.",
    "about.cta.button": "Prendre rendez-vous",

    // Home — hero
    "home.hero.badge": "Consultante produit indépendante — Bruxelles",
    "home.hero.h1.before": "",
    "home.hero.h1.highlight": "Digitalisation des processus",
    "home.hero.h1.after": " pour équipes sans tech interne",
    "home.hero.subtitle": "Vos processus internes deviennent un outil que votre équipe utilise tous les jours, à la place des fichiers partagés et des ressaisies.",
    "home.hero.cta.primary": "Démarrer par un audit de process",
    "home.hero.cta.secondary": "Voir l'application métier sur mesure",

    // Home — trust
    "home.trust.label": "Organisations accompagnées",

    // Home — services
    "home.services.eyebrow": "Ce que je fais",
    "home.services.title": "Trois façons de travailler ensemble",
    "home.services.1.title": "Application métier sur mesure",
    "home.services.1.desc": "Un outil interne conçu pour votre métier, vos règles et vos utilisateurs.",
    "home.services.1.link": "Découvrir l'application métier sur mesure",
    "home.services.2.title": "Digitalisation des processus",
    "home.services.2.desc": "Vos processus manuels cartographiés, simplifiés puis outillés de bout en bout.",
    "home.services.2.link": "Découvrir la digitalisation des processus",
    "home.services.3.title": "Accompagnement continu",
    "home.services.3.desc": "Vos outils maintenus, corrigés et enrichis mois après mois.",
    "home.services.3.link": "Découvrir l'accompagnement continu",

    // Home — pain points
    "home.pains.eyebrow": "Ce qui coince souvent",
    "home.pains.title": "Vous reconnaissez une de ces phrases ?",
    "home.pains.1.quote": "On refait le même tableau tous les lundis",
    "home.pains.1.link": "Automatiser un reporting",
    "home.pains.2.quote": "Nos données sont dans quatre outils",
    "home.pains.2.link": "Synchroniser ses outils",
    "home.pains.3.quote": "Notre outil interne, plus personne ne le maîtrise",
    "home.pains.3.link": "Reprendre un outil interne",
    "home.pains.4.quote": "On sait que ça coince, pas par où commencer",
    "home.pains.4.link": "Transformation digitale d'une PME",

    // Home — proof
    "home.proof.eyebrow": "Cas client",
    "home.proof.client": "Purpose Recruiting",
    "home.proof.title": "Un CRM et un ATS sur mesure",
    "home.proof.desc": "Le suivi des candidats et des clients réuni dans un seul outil, aligné sur la façon de travailler de l'équipe. L'onboarding d'un nouveau client est passé de plusieurs heures à quatre clics.",
    "home.proof.link": "Lire le cas Purpose Recruiting",
    "home.proof.all": "Voir tous les cas clients",

    // Application métier sur mesure
    "app.h1.before": "",
    "app.h1.highlight": "Application métier sur mesure",
    "app.h1.after": " pour équipes sans IT",
    "app.answer":
      "Une application métier sur mesure est un outil interne construit autour de votre processus réel, et non l'inverse. Elle remplace les fichiers partagés, les ressaisies et les outils détournés par un seul endroit où votre équipe travaille, avec vos règles métier et vos droits d'accès.",
    "app.meta": "Écrit par Salomé Michaux — mis à jour le 14 août 2026",
    "app.s1.title": "Quand un outil sur mesure se justifie",
    "app.s1.text":
      "Un outil sur mesure se justifie quand votre processus est votre différence : suivi de dossiers, validation interne, planification, reporting réglementaire. Si un logiciel du marché couvre 90 % du besoin, je vous le dis et je m'arrête là. Le sur-mesure sert ce que le marché ne couvre pas.",
    "app.s2.title": "Ce que contient une application métier",
    "app.s2.text":
      "Des écrans par rôle, les règles de gestion qui bloquent les erreurs à la saisie, un historique consultable, des exports vers vos outils existants et les droits d'accès de votre organisation. Tout est hébergé sur votre propre base de données, dont vous restez propriétaire.",
    "app.s3.title": "Comment se déroule le projet",
    "app.s3.text":
      "Audit du processus, conception des écrans et des règles, construction par itérations testées avec vos équipes, mise en production, puis accompagnement. Vous voyez l'outil fonctionner sur vos données bien avant la mise en service.",
    "app.s4.title": "Preuve : Purpose Recruiting",
    "app.s4.text":
      "Pour Purpose Recruiting, le suivi des candidats et des clients a été réuni dans un CRM et un ATS sur mesure, alignés sur la façon de travailler de l'équipe. L'onboarding d'un nouveau client est passé de plusieurs heures à quatre clics.",
    "app.faq.q1": "Combien de temps prend une application métier sur mesure ?",
    "app.faq.a1":
      "Une première version utilisable en production se construit généralement en quelques semaines, puis s'enrichit par itérations. Le calendrier exact est fixé après l'audit de process, une fois le périmètre de la première mise en service arrêté.",
    "app.faq.q2": "Qui est propriétaire de l'outil et des données ?",
    "app.faq.a2":
      "Vous. Le code et la base de données vous appartiennent, sur vos propres comptes d'hébergement. Vous pouvez reprendre l'outil en interne ou le confier à un autre prestataire à tout moment.",
    "app.faq.q3": "Et si mon processus change après la mise en production ?",
    "app.faq.a3":
      "C'est le cas normal. L'outil est construit pour être modifié : les règles métier sont isolées et l'accompagnement continu permet de faire évoluer les écrans au rythme de l'organisation.",
    "app.faq.q4": "Faut-il une équipe technique en interne ?",
    "app.faq.a4":
      "Non. Ces projets s'adressent précisément aux organisations sans équipe tech. Un référent métier disponible pour les décisions et les tests suffit.",
    "app.faq.title": "Questions fréquentes",

    // Cas clients
    "cases.h1.before": "",
    "cases.h1.highlight": "Cas clients",
    "cases.h1.after": " : process digitalisés",
    "cases.answer":
      "Ces missions ont un point commun : une organisation sans équipe tech interne, un processus tenu à la main, et un outil construit puis mis en production avec les équipes concernées. Chaque cas décrit le problème de départ, l'outil livré et ce qui a changé au quotidien.",
    "cases.meta": "Écrit par Salomé Michaux — mis à jour le 14 août 2026",
    "cases.1.client": "Purpose Recruiting",
    "cases.1.title": "Un CRM et un ATS sur mesure",
    "cases.1.text":
      "Le suivi des candidats et des clients réuni dans un seul outil, aligné sur la façon de travailler de l'équipe. L'onboarding d'un nouveau client est passé de plusieurs heures à quatre clics.",
    "cases.1.link": "Lire le cas Purpose Recruiting",
    "cases.2.client": "WWF",
    "cases.2.title": "Outillage d'un processus interne",
    "cases.2.text":
      "Un processus interne cartographié puis outillé, avec des écrans par rôle et un historique consultable, pour remplacer la circulation de fichiers entre équipes.",
    "cases.2.link": "Lire le cas WWF",
    "cases.3.client": "Teach for Belgium",
    "cases.3.title": "Suivi de programme digitalisé",
    "cases.3.text":
      "Le suivi du programme et des participants centralisé dans un outil unique, avec des exports vers les outils déjà utilisés par l'organisation.",
    "cases.3.link": "Lire le cas Teach for Belgium",
    "cases.4.client": "MediCheck",
    "cases.4.title": "Produit digital — mission via dualoop",
    "cases.4.text":
      "Cadrage produit et livraison de fonctionnalités au sein d'une équipe technique existante, en tant que Product Owner. Mission via dualoop.",
    "cases.4.link": "Lire le cas MediCheck",
  },
  en: {
    // Navbar
    "nav.projects": "Projects",
    "nav.automation": "Automation",
    "nav.method": "Method",
    "nav.about": "About",
    "nav.cta": "Let's talk",
    "nav.link.app": "Business apps",
    "nav.link.process": "Digitalisation",
    "nav.link.cases": "Client cases",

    // Hero
    "hero.badge": "Available for new projects",
    "hero.title.1": "I create ",
    "hero.title.highlight": "digital products",
    "hero.title.2": " that make a difference",
    "hero.cta.start": "Start a project",
    "hero.cta.projects": "View my projects",

    // Tools
    "tools.label": "Tools",

    // Projects
    "projects.eyebrow": "Projects",
    "projects.title": "Selected Projects",
    "projects.subtitle": "Web apps, SaaS and custom websites solving real business problems.",
    "projects.discover": "Discover",
    "projects.baebles.desc": "Community platform for fantasy readers.",
    "projects.bookoo.desc": "Booking platform for nail technicians.",
    "projects.banti.desc": "Connecting entrepreneurs with investors.",
    "projects.charline.desc": "Website for a family mediator in Brussels.",
    "projects.relentless.desc": "Fitness coaching website with booking.",
    "projects.ria.desc": "Portfolio for a professional storyteller.",
    "projects.hirering.desc": "B2B marketplace connecting companies and recruitment agencies through an intelligent matching algorithm.",
    "projects.liftclub.desc": "Landing page for a Brussels nightclub.",

    // Automation
    "automation.eyebrow": "Automation & AI",
    "automation.title": "Automation & AI",
    "automation.subtitle": "AI agents, voicebots and intelligent workflows working for you, 24/7.",
    "automation.whatsapp.title": "WhatsApp AI Agents",
    "automation.whatsapp.desc": "Smart WhatsApp assistants that qualify your leads, answer questions and book appointments automatically.",
    "automation.voicebot.title": "AI Voicebots",
    "automation.voicebot.desc": "Voice agents that handle incoming calls, take messages and route clients to the right person.",
    "automation.process.title": "Process Automation",
    "automation.process.desc": "Custom workflows connecting your tools and eliminating repetitive tasks: onboarding, follow-ups, reporting.",
    "automation.crm.title": "Automated CRM",
    "automation.crm.desc": "Smart sales pipeline with automatic tracking, scheduled follow-ups and real-time notifications.",
    "automation.matching.title": "AI Recruitment Matching",
    "automation.matching.desc": "Matching algorithm that analyses candidate profiles and connects them to the most relevant opportunities.",
    "automation.setting.title": "Automated Setting",
    "automation.setting.desc": "Fully automated appointment booking and client setup systems, from first contact to follow-up.",

    // Method
    "method.eyebrow": "Method",
    "method.title": "How a project runs",
    "method.subtitle": "Four steps, from diagnosis to the daily life of the tool.",
    "method.1.title": "Audit",
    "method.1.desc": "I map the process and pinpoint what costs the most time.",
    "method.2.title": "Design",
    "method.2.desc": "I define the target tool, its screens and its business rules.",
    "method.3.title": "Build and go live",
    "method.3.desc": "I build the tool, test it with your teams and put it into service.",
    "method.4.title": "Ongoing support",
    "method.4.desc": "I evolve the tool at the pace of your organisation.",

    // CTA
    "cta.eyebrow": "A process to digitalise?",
    "cta.title": "Let's start with an audit of your processes",
    "cta.subtitle": "A clear picture of what is stuck, what can be digitalised, and in which order.",
    "cta.button": "Request a process audit",

    // Footer
    "footer.role": "Product Consultant & Builder",
    "footer.description": "I turn internal processes into custom-built tools, from the audit through to going live.",
    "footer.offer": "Services",
    "footer.references": "Client cases",
    "footer.contact": "Contact",
    "footer.offer.1": "Custom business application",
    "footer.offer.2": "Process digitalisation",
    "footer.offer.3": "Ongoing support",
    "footer.offer.4": "Process audit",
    "footer.references.all": "All client cases",
    "footer.about": "About",
    "footer.legal.notice": "Legal notice",
    "footer.legal.privacy": "Privacy policy",
    "footer.lang.switch": "Passer en français",

    // About
    "about.hello": "About",
    "about.intro": "Solvay-trained management engineer, I help startups and SMEs with their digital transformation. My niche: AI and automation solutions that deliver measurable impact, shipped fast. Based in Brussels.",
    "about.skills": "AI Agents,Automation,Bespoke software,Product Management",
    "about.timeline.eyebrow": "Journey",
    "about.timeline.title.1": "From Solvay to ",
    "about.timeline.title.highlight": "freelance",
    "about.m1.year": "2018",
    "about.m1.title": "Solvay & first ventures",
    "about.m1.text": "Master's in Management Engineering at Solvay Brussels School. Already driven to build, with side projects launched in parallel.",
    "about.m2.year": "2020",
    "about.m2.title": "HireRing — from 0 to €362K raised",
    "about.m2.text":
      "Co-founded a B2B recruitment marketplace connecting companies and agencies through a matching algorithm. Product-market fit validated, first fundraise closed.",
    "about.m3.year": "2024",
    "about.m3.title": "dualoop — Product Owner",
    "about.m3.text": "Led tech squads (CISO, CTO, devs). Managed requirements, stakeholders and the backlog, set up automations and shipped high-ROI features.",
    "about.m4.year": "2023",
    "about.m4.title": "Freelance — AI & Scale",
    "about.m4.text": "Helping startups and SMEs accelerate with AI agents, automated workflows and MVPs delivered in weeks.",
    "about.expertise.title.1": "What I bring to ",
    "about.expertise.title.highlight": "your project",
    "about.e1.title": "Custom AI",
    "about.e1.text": "Conversational agents, predictive scoring and content generation — deployed in production, not in demos.",
    "about.e2.title": "End-to-end Automation",
    "about.e2.text": "Workflows that run on their own. Make and Zapier connected to your business tools.",
    "about.e3.title": "MVP in weeks",
    "about.e3.text": "From brief to live product with Bubble, Lovable and Airtable. Fast iterations, tangible results.",
    "about.e4.title": "Strategic Consulting",
    "about.e4.text": "AI audit, automation opportunity mapping and actionable roadmap.",
    "about.cta.eyebrow": "A process to digitalise?",
    "about.cta.title.1": "Let's turn your ideas into ",
    "about.cta.title.highlight": "results",
    "about.cta.subtitle": "A free initial call to identify your automation and AI opportunities.",
    "about.cta.button": "Book a call",

    // Home — hero
    "home.hero.badge": "Independent product consultant — Brussels",
    "home.hero.h1.before": "",
    "home.hero.h1.highlight": "Bespoke software development",
    "home.hero.h1.after": " for teams without IT",
    "home.hero.subtitle": "Your internal processes become bespoke software your team uses every day, instead of shared spreadsheets and double data entry.",
    "home.hero.cta.primary": "Start with a process audit",
    "home.hero.cta.secondary": "See bespoke software development",

    // Home — trust
    "home.trust.label": "Organisations I have worked with",

    // Home — services
    "home.services.eyebrow": "What I do",
    "home.services.title": "Three ways to work together",
    "home.services.1.title": "Bespoke software development",
    "home.services.1.desc": "Software built around your trade, your rules and the people who use it daily.",
    "home.services.1.link": "Explore bespoke software development",
    "home.services.2.title": "Custom internal tools",
    "home.services.2.desc": "Your manual processes mapped, simplified, then automated end to end.",
    "home.services.2.link": "Explore custom internal tools",
    "home.services.3.title": "Ongoing support",
    "home.services.3.desc": "Your software maintained, fixed and extended month after month.",
    "home.services.3.link": "Explore ongoing support",

    // Home — pain points
    "home.pains.eyebrow": "What usually gets stuck",
    "home.pains.title": "Does one of these sound familiar?",
    "home.pains.1.quote": "We rebuild the same spreadsheet every Monday",
    "home.pains.1.link": "Automate a report",
    "home.pains.2.quote": "Our data lives in four different tools",
    "home.pains.2.link": "Connect your tools",
    "home.pains.3.quote": "Nobody understands our internal tool any more",
    "home.pains.3.link": "Take over an internal tool",
    "home.pains.4.quote": "We know it is stuck, not where to start",
    "home.pains.4.link": "Talk to a digital transformation consultant",

    // Home — proof
    "home.proof.eyebrow": "Client case",
    "home.proof.client": "Purpose Recruiting",
    "home.proof.title": "A bespoke CRM and ATS",
    "home.proof.desc": "Candidate and client tracking brought together in a single tool, aligned with how the team actually works. Onboarding a new client went from several hours to four clicks.",
    "home.proof.link": "Read the Purpose Recruiting case",
    "home.proof.all": "See all client cases",
  },
};

// The context instance is cached on globalThis so a hot-module reload of this
// file cannot create a second instance (the provider would then live in a
// different context than the consumers, which crashed the page in dev).
const globalStore = globalThis as unknown as {
  __smLanguageContext?: Context<LanguageContextType>;
};

const fallbackContext: LanguageContextType = {
  lang: "fr",
  setLang: () => {},
  t: (key: string) => translations.fr[key] ?? key,
};

const LanguageContext =
  globalStore.__smLanguageContext ??
  (globalStore.__smLanguageContext = createContext<LanguageContextType>(fallbackContext));

export const LanguageProvider = ({
  children,
  initialLang = "fr",
}: {
  children: ReactNode;
  initialLang?: Lang;
}) => {
  const [lang, setLang] = useState<Lang>(initialLang);

  // Client-side FR <-> EN navigation changes the URL without a reload, so the
  // language deduced from the pathname has to flow back into the provider.
  useEffect(() => {
    setLang(initialLang);
  }, [initialLang]);

  const t = (key: string): string => {
    return translations[lang][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
