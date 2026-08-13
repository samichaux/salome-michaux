import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { localePath } from "@/lib/i18n-routes";

const FeaturedCaseSection = () => {
  const { t, lang } = useLanguage();

  const facts = [
    { label: t("home.proof.fact.sector"), value: t("home.proof.fact.sector.value") },
    { label: t("home.proof.fact.team"), value: t("home.proof.fact.team.value") },
    { label: t("home.proof.fact.scope"), value: t("home.proof.fact.scope.value") },
    { label: t("home.proof.fact.status"), value: t("home.proof.fact.status.value") },
  ];

  return (
    <section id="cas-client" style={{ backgroundColor: "#1a2632" }}>
      <div
        className="max-w-6xl mx-auto px-6 py-20"
        style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: "48px", alignItems: "end" }}
      >
        <div className="text-left">
          <p className="type-label" style={{ color: "#a8c5db", marginBottom: "14px" }}>
            {t("home.proof.eyebrow")}
          </p>
          <h2 className="type-display-sm" style={{ color: "#fff", marginBottom: "18px" }}>
            {t("home.proof.title")}
          </h2>
          <p style={{ color: "#a8c5db", maxWidth: "34em", marginBottom: "28px" }}>
            {t("home.proof.desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <Link
              to={localePath("/cas-clients/purpose-recruiting", lang)}
              className="group inline-flex items-center justify-center gap-1.5 font-semibold px-6 py-3 transition-colors duration-200"
              style={{ backgroundColor: "#4ecdc4", color: "#1a2632", borderRadius: "3px" }}
            >
              {t("home.proof.link")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={localePath("/cas-clients", lang)}
              className="inline-flex items-center justify-center text-sm font-semibold px-2 py-3"
              style={{ color: "#a8c5db" }}
            >
              {t("home.proof.all")}
            </Link>
          </div>
        </div>

        <div style={{ color: "#fff" }}>
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              style={{
                borderBottom: index === facts.length - 1 ? 0 : "1px solid rgba(168,197,219,.22)",
                padding: "14px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "16px",
              }}
            >
              <span className="type-label" style={{ color: "#a8c5db" }}>{fact.label}</span>
              <span style={{ fontFamily: "var(--font-mono-ui)", fontSize: "12.5px", color: "#fff" }}>
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #cas-client > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedCaseSection;
