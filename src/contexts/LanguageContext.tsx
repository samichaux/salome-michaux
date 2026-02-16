import { createContext, useContext, useState, ReactNode } from "react";

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

    // Hero
    "hero.badge": "Disponible pour nouveaux projets",
    "hero.title.1": "Je crée des ",
    "hero.title.highlight": "produits digitaux",
    "hero.title.2": " qui font la différence",
    "hero.tagline": "— du concept au lancement, sans une ligne de code",
    "hero.description": "Développeuse no-code spécialisée dans la création de SaaS, web apps et systèmes d'automatisation.",
    "hero.cta.start": "Démarrer un projet",
    "hero.cta.projects": "Voir mes projets",
    "hero.annotation": "let's go! →",

    // Tools
    "tools.label": "mes outils favoris ✦",

    // Stats
    "stats.projects": "Projets livrés",
    "stats.sectors": "Secteurs",
    "stats.experience": "Expérience",
    "stats.satisfaction": "Satisfaction",

    // Projects
    "projects.eyebrow": "une sélection de mes créations",
    "projects.title": "Projets sélectionnés",
    "projects.subtitle": "Web apps, SaaS et sites sur-mesure pour de vrais problèmes business.",
    "projects.discover": "Découvrir",
    "projects.baebles.desc": "Communauté fantasy pour lecteurs passionnés.",
    "projects.bookoo.desc": "Plateforme de réservation pour prothésistes ongulaires.",
    "projects.banti.desc": "Plateforme de networking pour entrepreneurs et investisseurs.",
    "projects.charline.desc": "Site pour médiatrice familiale à Bruxelles.",
    "projects.relentless.desc": "Site de coaching fitness avec réservation.",
    "projects.ria.desc": "Portfolio pour conteuse professionnelle.",
    "projects.hirering.desc": "Marketplace B2B connectant entreprises et agences de recrutement via un algorithme de matching intelligent.",
    "projects.liftclub.desc": "Landing page pour nightclub bruxellois.",

    // Automation
    "automation.eyebrow": "l'IA au service de votre business",
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
    "method.eyebrow": "comment ça marche?",
    "method.title": "Ma méthode",
    "method.subtitle": "Une approche structurée pour transformer votre vision en produit.",
    "method.1.title": "Discovery",
    "method.1.desc": "Comprendre vos besoins, votre marché et vos utilisateurs.",
    "method.2.title": "Design",
    "method.2.desc": "Maquettes et prototypes alignés sur vos objectifs.",
    "method.3.title": "Build",
    "method.3.desc": "Développement rapide avec les meilleurs outils no-code.",
    "method.4.title": "Launch",
    "method.4.desc": "Déploiement, tests et itérations pour un lancement réussi.",

    // CTA
    "cta.eyebrow": "prête à donner vie à votre idée?",
    "cta.title.1": "Un projet ",
    "cta.title.highlight": "en tête",
    "cta.title.2": " ?",
    "cta.subtitle": "Discutons de comment je peux vous aider à concrétiser votre vision.",
    "cta.button": "Prendre rendez-vous",

    // Footer
    "footer.description": "Développeuse no-code & spécialiste en automatisation. Du concept au lancement, sans une ligne de code.",
    "footer.navigation": "Navigation",
    "footer.nav.projects": "Projets",
    "footer.nav.services": "Services",
    "footer.nav.automation": "Automatisation & IA",
    "footer.nav.contact": "Contact",
    "footer.contact": "Contact",
    "footer.rights": "Tous droits réservés",
    "footer.top": "Retour en haut",

    // About
    "about.hello": "hello!",
    "about.intro": "Ingénieure de gestion Solvay, j'accompagne startups et PMEs dans leur transformation digitale. Mon créneau : des solutions IA et automatisation qui génèrent un impact mesurable, livrées rapidement. Basée à Bruxelles.",
    "about.skills": "Agents IA,Automatisation,No-code,Product Management",
    "about.timeline.eyebrow": "le chemin parcouru",
    "about.timeline.title.1": "De Solvay au ",
    "about.timeline.title.highlight": "freelance",
    "about.m1.year": "2018",
    "about.m1.title": "Solvay & premiers ventures",
    "about.m1.text": "Master en Ingénierie de Gestion à Solvay Brussels School. Déjà le goût d'entreprendre avec des projets lancés en parallèle.",
    "about.m2.year": "2020",
    "about.m2.title": "HireRing — de 0 à 362K$ levés",
    "about.m2.text": "Co-fondation d'une plateforme de recrutement IA. MVP livré en 30 jours en no-code, product-market fit validé et première levée de fonds.",
    "about.m3.year": "2023",
    "about.m3.title": "dualoop — Product Owner",
    "about.m3.text": "Pilotage de squads tech (CISO, CTO, devs). Résolution de crises cyber, mise en place d'automatisations et livraison de features à fort ROI.",
    "about.m4.year": "2025",
    "about.m4.title": "Freelance — IA & Scale",
    "about.m4.text": "J'aide startups et PMEs à accélérer avec des agents IA, des workflows automatisés et des MVPs livrés en semaines. Boldys.ai parmi mes clients.",
    "about.expertise.eyebrow": "pourquoi me choisir ?",
    "about.expertise.title.1": "Ce que j'apporte à ",
    "about.expertise.title.highlight": "votre projet",
    "about.e1.title": "IA sur-mesure",
    "about.e1.text": "Agents conversationnels, scoring prédictif et génération de contenu — déployés en production, pas en démo.",
    "about.e2.title": "Automatisation end-to-end",
    "about.e2.text": "Des workflows qui tournent tout seuls. Make, n8n, Zapier connectés à vos outils métier.",
    "about.e3.title": "MVP en semaines",
    "about.e3.text": "Du brief au produit live avec Bubble, Lovable et Airtable. Itérations rapides, résultats concrets.",
    "about.e4.title": "Conseil stratégique",
    "about.e4.text": "Audit IA, cartographie des opportunités d'automatisation et feuille de route actionnable.",
    "about.cta.eyebrow": "prêt à passer à l'action ?",
    "about.cta.title.1": "Transformons vos idées en ",
    "about.cta.title.highlight": "résultats",
    "about.cta.subtitle": "Un premier échange gratuit pour identifier vos opportunités d'automatisation et d'IA.",
    "about.cta.button": "Prendre rendez-vous",
  },
  en: {
    // Navbar
    "nav.projects": "Projects",
    "nav.automation": "Automation",
    "nav.method": "Method",
    "nav.about": "About",
    "nav.cta": "Let's talk",

    // Hero
    "hero.badge": "Available for new projects",
    "hero.title.1": "I create ",
    "hero.title.highlight": "digital products",
    "hero.title.2": " that make a difference",
    "hero.tagline": "— from concept to launch, without a single line of code",
    "hero.description": "No-code developer specializing in building SaaS, web apps and automation systems.",
    "hero.cta.start": "Start a project",
    "hero.cta.projects": "View my projects",
    "hero.annotation": "let's go! →",

    // Tools
    "tools.label": "my favorite tools ✦",

    // Stats
    "stats.projects": "Projects delivered",
    "stats.sectors": "Industries",
    "stats.experience": "Experience",
    "stats.satisfaction": "Satisfaction",

    // Projects
    "projects.eyebrow": "a selection of my work",
    "projects.title": "Selected Projects",
    "projects.subtitle": "Web apps, SaaS and custom websites solving real business problems.",
    "projects.discover": "Discover",
    "projects.baebles.desc": "Fantasy community for passionate readers.",
    "projects.bookoo.desc": "Booking platform for nail technicians.",
    "projects.banti.desc": "Networking platform for entrepreneurs and investors.",
    "projects.charline.desc": "Website for a family mediator in Brussels.",
    "projects.relentless.desc": "Fitness coaching website with booking.",
    "projects.ria.desc": "Portfolio for a professional storyteller.",
    "projects.hirering.desc": "B2B marketplace connecting companies and recruitment agencies through an intelligent matching algorithm.",
    "projects.liftclub.desc": "Landing page for a Brussels nightclub.",

    // Automation
    "automation.eyebrow": "AI at the service of your business",
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
    "automation.matching.desc": "Matching algorithm that analyzes candidate profiles and connects them to the most relevant opportunities.",
    "automation.setting.title": "Automated Setting",
    "automation.setting.desc": "Fully automated appointment booking and client setup systems, from first contact to follow-up.",

    // Method
    "method.eyebrow": "how it works",
    "method.title": "My Method",
    "method.subtitle": "A structured approach to turn your vision into a product.",
    "method.1.title": "Discovery",
    "method.1.desc": "Understanding your needs, market and users.",
    "method.2.title": "Design",
    "method.2.desc": "Mockups and prototypes aligned with your goals.",
    "method.3.title": "Build",
    "method.3.desc": "Rapid development with the best no-code tools.",
    "method.4.title": "Launch",
    "method.4.desc": "Deployment, testing and iterations for a successful launch.",

    // CTA
    "cta.eyebrow": "ready to bring your idea to life?",
    "cta.title.1": "Have a project ",
    "cta.title.highlight": "in mind",
    "cta.title.2": "?",
    "cta.subtitle": "Let's discuss how I can help turn your vision into reality.",
    "cta.button": "Book a call",

    // Footer
    "footer.description": "No-code developer & automation specialist. From concept to launch, without a single line of code.",
    "footer.navigation": "Navigation",
    "footer.nav.projects": "Projects",
    "footer.nav.services": "Services",
    "footer.nav.automation": "Automation & AI",
    "footer.nav.contact": "Contact",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved",
    "footer.top": "Back to top",

    // About
    "about.hello": "hello!",
    "about.intro": "Solvay-trained management engineer, I help startups and SMEs with their digital transformation. My niche: AI and automation solutions that deliver measurable impact, shipped fast. Based in Brussels.",
    "about.skills": "AI Agents,Automation,No-code,Product Management",
    "about.timeline.eyebrow": "the journey so far",
    "about.timeline.title.1": "From Solvay to ",
    "about.timeline.title.highlight": "freelance",
    "about.m1.year": "2018",
    "about.m1.title": "Solvay & first ventures",
    "about.m1.text": "Master's in Management Engineering at Solvay Brussels School. Already driven to build, with side projects launched in parallel.",
    "about.m2.year": "2020",
    "about.m2.title": "HireRing — from 0 to $362K raised",
    "about.m2.text": "Co-founded an AI recruitment platform. MVP shipped in 30 days using no-code, product-market fit validated and first fundraise closed.",
    "about.m3.year": "2023",
    "about.m3.title": "dualoop — Product Owner",
    "about.m3.text": "Led tech squads (CISO, CTO, devs). Resolved cyber crises, set up automations and shipped high-ROI features.",
    "about.m4.year": "2025",
    "about.m4.title": "Freelance — AI & Scale",
    "about.m4.text": "Helping startups and SMEs accelerate with AI agents, automated workflows and MVPs delivered in weeks. Boldys.ai among my clients.",
    "about.expertise.eyebrow": "why choose me?",
    "about.expertise.title.1": "What I bring to ",
    "about.expertise.title.highlight": "your project",
    "about.e1.title": "Custom AI",
    "about.e1.text": "Conversational agents, predictive scoring and content generation — deployed in production, not in demos.",
    "about.e2.title": "End-to-end Automation",
    "about.e2.text": "Workflows that run on their own. Make, n8n, Zapier connected to your business tools.",
    "about.e3.title": "MVP in weeks",
    "about.e3.text": "From brief to live product with Bubble, Lovable and Airtable. Fast iterations, tangible results.",
    "about.e4.title": "Strategic Consulting",
    "about.e4.text": "AI audit, automation opportunity mapping and actionable roadmap.",
    "about.cta.eyebrow": "ready to take action?",
    "about.cta.title.1": "Let's turn your ideas into ",
    "about.cta.title.highlight": "results",
    "about.cta.subtitle": "A free initial call to identify your automation and AI opportunities.",
    "about.cta.button": "Book a call",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr");

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
