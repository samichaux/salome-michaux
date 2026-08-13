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
    <section id="methode" className="py-20" style={{ backgroundColor: "#fafbfc" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-left mb-12">
          <p className="type-label mb-2" style={{ color: "#8494a6" }}>
            {t("method.eyebrow")}
          </p>
          <h2 className="type-display-sm mb-3" style={{ color: "#2c4a6e" }}>
            {t("method.title")}
          </h2>
          <p className="max-w-lg" style={{ color: "#4a5c6f" }}>
            {t("method.subtitle")}
          </p>
        </div>

        <style>{`
          .method-steps {
            border-left: 1px solid #e8f1f8;
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .method-steps > li {
            position: relative;
            padding-left: 30px;
            padding-bottom: 40px;
          }
          .method-steps > li:last-child {
            padding-bottom: 0;
          }
          .method-steps > li::before {
            content: "";
            position: absolute;
            left: -4px;
            top: 6px;
            width: 7px;
            height: 7px;
            background-color: #4ecdc4;
            transform: rotate(45deg);
          }
        `}</style>

        <ol className="method-steps">
          {steps.map((step, i) => (
            <li key={step.num}>
              <ScrollReveal delay={i * 120}>
                <div className="type-label mb-1" style={{ color: "#4ecdc4" }}>
                  {step.num}
                </div>
                <h3
                  className="type-display-sm mb-2"
                  style={{ fontSize: "21px", color: "#1a2632" }}
                >
                  {t(step.titleKey)}
                </h3>
                <p style={{ color: "#4a5c6f" }}>{t(step.descKey)}</p>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default MethodSection;
