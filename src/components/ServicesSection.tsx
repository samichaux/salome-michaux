import { Link } from "@tanstack/react-router";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { localePath } from "@/lib/i18n-routes";

const services = [
  { num: "01", to: "/application-metier-sur-mesure", key: "1" },
  { num: "02", to: "/digitalisation-des-processus", key: "2" },
  { num: "03", to: "/accompagnement-continu", key: "3" },
];

const ServicesSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="services" className="py-20" style={{ backgroundColor: "#fafbfc" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-left mb-12">
          <p className="type-label mb-2" style={{ color: "#8494a6" }}>
            {t("home.services.eyebrow")}
          </p>
          <h2 className="type-display-sm" style={{ color: "#2c4a6e" }}>
            {t("home.services.title")}
          </h2>
        </div>

        <div>
          {services.map((service, i) => (
            <ScrollReveal key={service.key} delay={i * 100}>
              <Link
                to={localePath(service.to, lang)}
                className="group block"
                style={{
                  borderBottom: "1px solid #e8f1f8",
                  padding: "30px 0",
                }}
              >
                <div
                  className="grid"
                  style={{ gridTemplateColumns: "64px 1fr" }}
                >
                  <div className="type-label" style={{ color: "#4ecdc4" }}>
                    {service.num}
                  </div>
                  <div>
                    <h3
                      className="type-display-sm mb-2"
                      style={{ fontSize: "21px", color: "#2c4a6e" }}
                    >
                      {t(`home.services.${service.key}.title`)}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "#4a5c6f" }}>
                      {t(`home.services.${service.key}.desc`)}
                    </p>
                    <span
                      className="text-sm font-semibold"
                      style={{
                        color: "#2c4a6e",
                        borderBottom: "1px solid #a8c5db",
                      }}
                    >
                      {t(`home.services.${service.key}.link`)}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
