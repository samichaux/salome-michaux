import { GraduationCap, Rocket, Zap, Briefcase, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import photoSalome from "@/assets/photo-salome.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutPage = () => {
  const { t } = useLanguage();

  const milestones = [
    { year: t("about.m1.year"), icon: GraduationCap, title: t("about.m1.title"), text: t("about.m1.text") },
    { year: t("about.m2.year"), icon: Rocket, title: t("about.m2.title"), text: t("about.m2.text") },
    { year: t("about.m3.year"), icon: Briefcase, title: t("about.m3.title"), text: t("about.m3.text") },
    { year: t("about.m4.year"), icon: Zap, title: t("about.m4.title"), text: t("about.m4.text") },
  ];

  const expertise = [
    { icon: Lightbulb, title: t("about.e1.title"), text: t("about.e1.text") },
    { icon: Zap, title: t("about.e2.title"), text: t("about.e2.text") },
    { icon: Rocket, title: t("about.e3.title"), text: t("about.e3.text") },
    { icon: Briefcase, title: t("about.e4.title"), text: t("about.e4.text") },
  ];

  const skills = t("about.skills").split(",");

  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 -left-32 w-[400px] h-[400px] rounded-full bg-blue-pale/40 blur-3xl" />
              <div className="absolute top-40 right-0 w-[350px] h-[350px] rounded-full bg-mint-light/30 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl border-2 border-border/50 flex-shrink-0 overflow-hidden shadow-card">
                  <img src={photoSalome} alt="Salomé Michaux — Développeuse No-Code à Bruxelles" className="w-full h-full object-cover" loading="eager" />
                </div>

                <div>
                  <p className="font-handwriting text-xl text-primary mb-2">{t("about.hello")}</p>
                  <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    Salomé <span className="text-gradient-blue">Michaux</span>
                  </h1>
                  <p className="text-ink-soft leading-relaxed">{t("about.intro")}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skills.map((skill) => (
                      <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-ink-muted font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Story Timeline */}
          <section className="py-20" aria-label="Parcours professionnel">
            <div className="max-w-3xl mx-auto px-6">
              <ScrollReveal>
                <div className="text-center mb-14">
                  <p className="font-handwriting text-xl text-primary mb-2">{t("about.timeline.eyebrow")}</p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {t("about.timeline.title.1")}<span className="text-gradient-blue">{t("about.timeline.title.highlight")}</span>
                  </h2>
                </div>
              </ScrollReveal>

              <div className="relative">
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
                <div className="space-y-12">
                  {milestones.map((m, i) => (
                    <ScrollReveal key={m.year} delay={i * 120}>
                      <div className={`relative flex items-start gap-6 md:gap-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                        <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10" />
                        <div className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:text-right md:pr-0" : "md:text-left md:pl-0"}`}>
                          <span className="font-handwriting text-lg text-mint">{m.year}</span>
                          <h3 className="font-bold text-lg text-foreground mt-1 mb-2">{m.title}</h3>
                          <p className="text-sm text-ink-soft leading-relaxed">{m.text}</p>
                        </div>
                        <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Expertise */}
          <section className="py-20 bg-card" aria-label="Domaines d'expertise">
            <div className="max-w-4xl mx-auto px-6">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <p className="font-handwriting text-xl text-primary mb-2">{t("about.expertise.eyebrow")}</p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {t("about.expertise.title.1")}<span className="text-gradient-blue">{t("about.expertise.title.highlight")}</span>
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {expertise.map((e, i) => (
                  <ScrollReveal key={e.title} delay={i * 100}>
                    <article className="bg-background rounded-xl p-6 border border-border/50 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
                        <e.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground mb-1">{e.title}</h3>
                      <p className="text-sm text-ink-soft">{e.text}</p>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto px-6 text-center">
                <p className="font-handwriting text-xl text-primary mb-3">{t("about.cta.eyebrow")}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  {t("about.cta.title.1")}<span className="text-gradient-blue">{t("about.cta.title.highlight")}</span>
                </h2>
                <p className="text-ink-soft mb-8 max-w-md mx-auto">{t("about.cta.subtitle")}</p>
                <a
                  href="https://calendly.com/salomemichaux/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-[14px] hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  {t("about.cta.button")}
                </a>
              </div>
            </ScrollReveal>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
