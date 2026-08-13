import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const MethodSection = () => {
  const { t } = useLanguage();

  const steps = [
    { num: "01", titleKey: "method.1.title", descKey: "method.1.desc" },
    { num: "02", titleKey: "method.2.title", descKey: "method.2.desc" },
    { num: "03", titleKey: "method.3.title", descKey: "method.3.desc" },
    { num: "04", titleKey: "method.4.title", descKey: "method.4.desc" },
  ];

  return (
    <section id="methode" className="py-20 bg-gradient-method">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-jost text-xl text-mint-light mb-2">{t("method.eyebrow")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t("method.title")}</h2>
          <p className="text-blue-pale max-w-lg mx-auto">{t("method.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 120}>
              <div className="rounded-xl p-6 bg-white/10 backdrop-blur-xs border border-white/10 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="font-fraunces font-semibold text-4xl text-blue-pale mb-3">{step.num}</div>
                <h3 className="font-bold text-lg text-white mb-2">{t(step.titleKey)}</h3>
                <p className="text-sm text-blue-pale">{t(step.descKey)}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
