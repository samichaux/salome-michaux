import { GraduationCap, Rocket, Zap, Briefcase, Globe, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import photoSalome from "@/assets/photo-salome.jpeg";

const milestones = [
  {
    year: "2018",
    icon: GraduationCap,
    title: "Solvay & premiers ventures",
    text: "Master en Ingénierie de Gestion à Solvay Brussels School. Déjà le goût d'entreprendre avec des projets lancés en parallèle.",
  },
  {
    year: "2020",
    icon: Rocket,
    title: "HireRing — de 0 à 362K$ levés",
    text: "Co-fondation d'une plateforme de recrutement IA. MVP livré en 30 jours en no-code, product-market fit validé et première levée de fonds.",
  },
  {
    year: "2023",
    icon: Briefcase,
    title: "dualoop — Product Owner",
    text: "Pilotage de squads tech (CISO, CTO, devs). Résolution de crises cyber, mise en place d'automatisations et livraison de features à fort ROI.",
  },
  {
    year: "2025",
    icon: Zap,
    title: "Freelance — IA & Scale",
    text: "J'aide startups et PMEs à accélérer avec des agents IA, des workflows automatisés et des MVPs livrés en semaines. Boldys.ai parmi mes clients.",
  },
];

const expertise = [
  { icon: Lightbulb, title: "IA sur-mesure", text: "Agents conversationnels, scoring prédictif et génération de contenu — déployés en production, pas en démo." },
  { icon: Zap, title: "Automatisation end-to-end", text: "Des workflows qui tournent tout seuls. Make, n8n, Zapier connectés à vos outils métier." },
  { icon: Rocket, title: "MVP en semaines", text: "Du brief au produit live avec Bubble, Lovable et Airtable. Itérations rapides, résultats concrets." },
  { icon: Briefcase, title: "Conseil stratégique", text: "Audit IA, cartographie des opportunités d'automatisation et feuille de route actionnable." },
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
              <p className="font-handwriting text-xl text-primary mb-2">hello!</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Salomé <span className="text-gradient-blue">Michaux</span>
              </h1>
              <p className="text-ink-soft leading-relaxed">
                Ingénieure de gestion <strong className="text-foreground">Solvay</strong>, j'accompagne startups et PMEs dans leur transformation digitale. 
                Mon créneau : des solutions IA et automatisation qui génèrent un impact mesurable, livrées rapidement. Basée à <strong className="text-foreground">Bruxelles</strong>.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Agents IA", "Automatisation", "No-code", "Product Management"].map((skill) => (
                  <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-ink-muted font-medium">{skill}</span>
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
              <p className="font-handwriting text-xl text-primary mb-2">le chemin parcouru</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">De Solvay au <span className="text-gradient-blue">freelance</span></h2>
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
              <p className="font-handwriting text-xl text-primary mb-2">pourquoi me choisir ?</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Ce que j'apporte à <span className="text-gradient-blue">votre projet</span></h2>
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
            <p className="font-handwriting text-xl text-primary mb-3">prêt à passer à l'action ?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Transformons vos idées en <span className="text-gradient-blue">résultats</span>
            </h2>
            <p className="text-ink-soft mb-8 max-w-md mx-auto">
              Un premier échange gratuit pour identifier vos opportunités d'automatisation et d'IA.
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
