import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const MethodSection = () => {
  const { t } = useLanguage();

  const steps = [
    { num: "01", titleKey: "method.1.title", descKey: "method.1.desc", cx: 195, cy: 45, offset: false },
    { num: "02", titleKey: "method.2.title", descKey: "method.2.desc", cx: 445, cy: 105, offset: true },
    { num: "03", titleKey: "method.3.title", descKey: "method.3.desc", cx: 695, cy: 45, offset: false },
    { num: "04", titleKey: "method.4.title", descKey: "method.4.desc", cx: 945, cy: 105, offset: true },
  ];

  return (
    <section id="methode" className="py-24 sm:py-28 bg-gradient-wash-continue">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-soft text-xs font-medium text-ink-soft mb-4">
            {t("method.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{t("method.title")}</h2>
          <p className="text-ink-soft max-w-lg mx-auto">{t("method.subtitle")}</p>
        </div>

        <div className="relative">
          {/* Wavy line threading between the cards — alternates behind/in front of the row for depth */}
          <div className="hidden lg:block absolute inset-x-0 top-0 h-[200px] z-0" aria-hidden="true">
            <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
              <defs>
                <linearGradient id="methodLineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="hsl(var(--blue-signature))" />
                  <stop offset="1" stopColor="hsl(var(--mint))" />
                </linearGradient>
              </defs>
              <path d="M 445,105 C 580,105 560,45 695,45" stroke="url(#methodLineGrad)" strokeWidth="1.8" strokeOpacity=".5" strokeLinecap="round" strokeDasharray="5 6" fill="none" className="animate-flow-dash" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 120}>
                <div
                  className={`rounded-[18px] p-6 bg-card border border-border/50 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full ${step.offset ? "lg:mt-14" : ""}`}
                >
                  <div className="relative inline-block mb-3">
                    <span className="absolute -inset-3 rounded-full bg-white/30 backdrop-blur-md" aria-hidden="true" />
                    <div
                      className="relative font-fraunces font-semibold text-5xl"
                      style={{
                        backgroundImage: `linear-gradient(120deg, hsl(var(--blue-signature)) 0%, hsl(var(--mint)) 100%)`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {step.num}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{t(step.titleKey)}</h3>
                  <p className="text-sm text-ink-soft">{t(step.descKey)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Front layer: middle segment + nodes pass over the cards for a woven, more lively feel */}
          <div className="hidden lg:block absolute inset-x-0 top-0 h-[200px] z-20 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
              <defs>
                <linearGradient id="methodLineGrad2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="hsl(var(--blue-signature))" />
                  <stop offset="1" stopColor="hsl(var(--mint))" />
                </linearGradient>
              </defs>
              <path d="M 195,45 C 330,45 310,105 445,105" stroke="url(#methodLineGrad2)" strokeWidth="1.8" strokeOpacity=".6" strokeLinecap="round" strokeDasharray="5 6" fill="none" className="animate-flow-dash" />
              <path d="M 695,45 C 830,45 810,105 945,105" stroke="url(#methodLineGrad2)" strokeWidth="1.8" strokeOpacity=".6" strokeLinecap="round" strokeDasharray="5 6" fill="none" className="animate-flow-dash" />
            </svg>
            {steps.map((s, i) => (
              <span
                key={s.num}
                className="absolute w-3 h-3 -ml-1.5 -mt-1.5 rounded-full animate-node-pulse shadow-soft"
                style={{
                  left: `${(s.cx / 1000) * 100}%`,
                  top: `${(s.cy / 200) * 100}%`,
                  background: `linear-gradient(120deg, hsl(var(--blue-signature)) 0%, hsl(var(--mint)) 100%)`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
