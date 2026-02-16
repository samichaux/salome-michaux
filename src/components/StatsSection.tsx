import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "15+", label: t("stats.projects") },
    { value: "10+", label: t("stats.sectors") },
    { value: "3 ans", label: t("stats.experience") },
    { value: "100%", label: t("stats.satisfaction") },
  ];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div className="bg-gradient-to-br from-blue-tint to-card rounded-xl p-6 text-center border border-blue-pale/50 hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
                <div className="font-handwriting text-4xl lg:text-5xl text-primary font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-ink-soft font-medium">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
