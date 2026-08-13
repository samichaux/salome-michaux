import { Link } from "@tanstack/react-router";
import { ArrowRight, Layers, Workflow, LifeBuoy } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  { icon: Layers, to: "/application-metier-sur-mesure", key: "1" },
  { icon: Workflow, to: "/digitalisation-des-processus", key: "2" },
  { icon: LifeBuoy, to: "/accompagnement-continu", key: "3" },
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-jost text-xl text-primary mb-2">{t("home.services.eyebrow")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t("home.services.title")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.key} delay={i * 100}>
              <Link
                to={service.to}
                className="group flex flex-col h-full bg-card rounded-[18px] p-6 border border-border/50 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{t(`home.services.${service.key}.title`)}</h3>
                <p className="text-sm text-ink-soft mb-5">{t(`home.services.${service.key}.desc`)}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {t(`home.services.${service.key}.link`)}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
