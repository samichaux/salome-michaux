import { Sparkles, Rocket, Heart, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import photoSalome from "@/assets/photo-salome.jpeg";

const milestones = [
  {
    year: "2020",
    icon: Sparkles,
    title: "La découverte du no-code",
    text: "Fascinée par la possibilité de créer sans coder, je plonge dans l'univers Bubble, Wix et Figma. Premiers projets, premières nuits blanches.",
  },
  {
    year: "2022",
    icon: Rocket,
    title: "Le lancement de HireRing",
    text: "Je crée ma première marketplace B2B de recrutement. Un projet ambitieux qui me pousse à maîtriser Supabase, les APIs et l'automatisation.",
  },
  {
    year: "2023",
    icon: Zap,
    title: "L'automatisation & l'IA",
    text: "Make.com, agents WhatsApp, voicebots… Je me spécialise dans les workflows intelligents qui libèrent du temps et boostent la productivité.",
  },
  {
    year: "2024",
    icon: Heart,
    title: "Freelance à plein temps",
    text: "Je me lance à 100%. SaaS, web apps, automatisations sur mesure — chaque projet est une nouvelle aventure.",
  },
];

const values = [
  { title: "Orientée résultat", text: "Chaque ligne de workflow, chaque écran a un but précis." },
  { title: "Transparente", text: "Communication claire, pas de jargon inutile, des livrables concrets." },
  { title: "Rapide", text: "Du concept au MVP en quelques semaines, pas en mois." },
  { title: "Créative", text: "J'adore trouver des solutions élégantes à des problèmes complexes." },
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
                Développeuse no-code & spécialiste en automatisation basée à <strong className="text-foreground">Bruxelles</strong>. 
                Je transforme des idées en produits digitaux concrets — web apps, SaaS et systèmes intelligents — 
                sans écrire une seule ligne de code. Mon objectif ? Vous faire gagner du temps et de l'argent 
                en automatisant ce qui peut l'être.
              </p>
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

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-handwriting text-xl text-primary mb-2">ce qui me drive</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Mes valeurs</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="bg-background rounded-xl p-6 border border-border/50 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-bold text-foreground mb-1">{v.title}</h3>
                  <p className="text-sm text-ink-soft">{v.text}</p>
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
