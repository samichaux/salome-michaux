import { GraduationCap, Rocket, Zap, Briefcase, Globe, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import photoSalome from "@/assets/photo-salome.jpeg";

const milestones = [
  {
    year: "2018",
    icon: GraduationCap,
    title: "Solvay & Entrepreneuriat",
    text: "Ingénieure de gestion à Solvay Brussels School. Premiers projets entrepreneuriaux en parallèle des études, dont un semestre Erasmus à Bilbao.",
  },
  {
    year: "2020",
    icon: Rocket,
    title: "Co-fondatrice de HireRing",
    text: "Lancement du MVP en 30 jours avec du no-code. Levée de 362 000$ et développement du matching IA pour connecter entreprises et agences de recrutement.",
  },
  {
    year: "2023",
    icon: Briefcase,
    title: "Consultante chez dualoop",
    text: "Product Owner coordonnant équipes cross-fonctionnelles (CISO, CTO, devs). Gestion de crise cybersécurité, automatisation de processus et déploiement de features à fort impact.",
  },
  {
    year: "2025",
    icon: Zap,
    title: "Freelance IA & Automatisation",
    text: "Consultante indépendante pour de nombreux clients dont Boldys.ai. Conception d'agents IA, voicebots, workflows intelligents et MVPs rapides pour startups et PMEs.",
  },
];

const expertise = [
  { icon: Lightbulb, title: "IA appliquée", text: "Agents IA (WhatsApp, email, web), scoring intelligent, matching IA, extraction et génération de contenu avec GPT." },
  { icon: Zap, title: "Automatisation", text: "Workflows métiers avancés avec Make, n8n, Zapier. Intégration multi-canaux : WhatsApp, CRM, webhooks." },
  { icon: Rocket, title: "Prototypage rapide", text: "Création de MVPs avec Bubble, Lovable, Airtable. Du concept au produit en cycles courts." },
  { icon: Briefcase, title: "Stratégie & conseil", text: "Diagnostic IA, cartographie de processus, roadmaps de transformation digitale et accompagnement au changement." },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-32 w-[400px] h-[400px] rounded-full bg-blue-pale/40 blur-3xl" />
          <div className="absolute top-40 right-0 w-[350px] h-[350px] rounded-full bg-mint-light/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Photo placeholder */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl border-2 border-border/50 flex-shrink-0 overflow-hidden shadow-card">
              <img src={photoSalome} alt="Salomé Michaux" className="w-full h-full object-cover" />
            </div>

            <div>
              <p className="font-handwriting text-xl text-primary mb-2">hey, c'est moi!</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Salomé Michaux
              </h1>
              <p className="text-ink-soft leading-relaxed">
                Ingénieure de gestion diplômée de <strong className="text-foreground">Solvay</strong>, 
                avec 4+ ans d'expérience en automatisation IA, product management et développement no-code. 
                Je fais le lien entre métier et technologie en concevant des workflows intelligents, 
                des agents IA et des MVPs rapides. Basée à <strong className="text-foreground">Bruxelles</strong>.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["FR native", "EN C1", "NL B1", "ES A1"].map((lang) => (
                  <span key={lang} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-ink-muted font-medium">{lang}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="font-handwriting text-xl text-primary mb-2">comment tout a commencé</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Mon parcours</h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <ScrollReveal key={m.year} delay={i * 120}>
                  <div className={`relative flex items-start gap-6 md:gap-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10" />

                    {/* Content */}
                    <div className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:text-right md:pr-0" : "md:text-left md:pl-0"}`}>
                      <span className="font-handwriting text-lg text-mint">{m.year}</span>
                      <h3 className="font-bold text-lg text-foreground mt-1 mb-2">{m.title}</h3>
                      <p className="text-sm text-ink-soft leading-relaxed">{m.text}</p>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-handwriting text-xl text-primary mb-2">ce que je fais le mieux</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Domaines d'expertise</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {expertise.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 100}>
                <div className="bg-background rounded-xl p-6 border border-border/50 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <e.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{e.title}</h3>
                  <p className="text-sm text-ink-soft">{e.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="font-handwriting text-xl text-primary mb-3">envie de collaborer ?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Discutons de votre <span className="text-gradient-blue">projet</span>
            </h2>
            <p className="text-ink-soft mb-8 max-w-md mx-auto">
              Que ce soit pour un SaaS, une automatisation ou un agent IA, je suis là pour vous aider.
            </p>
            <a
              href="mailto:info@salomemichaux.eu"
              className="inline-block bg-gradient-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-[14px] hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              Prendre rendez-vous
            </a>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
