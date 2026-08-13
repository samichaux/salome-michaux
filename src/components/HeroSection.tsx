import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/contexts/LanguageContext";
import { localePath } from "@/lib/i18n-routes";
import BeforeAfter from "@/components/BeforeAfter";

const HeroSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section
      className="relative flex items-center overflow-hidden pt-36 pb-20"
      style={{ backgroundColor: "#fafbfc" }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-left">
        <div className="inline-flex items-center gap-2 mb-6">
          <span
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#4ecdc4",
              borderRadius: "50%",
            }}
          />
          <span className="type-label" style={{ color: "#8494a6" }}>
            {t("home.hero.badge")}
          </span>
        </div>

        <h1
          className="type-display"
          style={{ fontSize: "clamp(44px,8.4vw,108px)", color: "#2c4a6e" }}
        >
          {t("home.hero.h1.before")}
          <span>{t("home.hero.h1.highlight")}</span>
          <span style={{ color: "#1a2632" }}>{t("home.hero.h1.after")}</span>
        </h1>

        <hr
          style={{
            width: "64px",
            height: "2px",
            backgroundColor: "#4ecdc4",
            border: 0,
            margin: "0 0 24px",
          }}
        />

        <p
          className="font-jost text-lg sm:text-xl text-ink-soft mb-9"
          style={{ fontWeight: 300, maxWidth: "34em" }}
        >
          {t("home.hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-3 w-full sm:w-auto">
          <Link
            to={localePath("/audit-de-process", lang)}
            className="w-full sm:w-auto inline-flex items-center justify-center text-primary-foreground font-semibold px-7 py-3 transition-colors duration-200 hover:bg-[#1a2632]"
            style={{ backgroundColor: "#2c4a6e", borderRadius: "3px" }}
          >
            {t("home.hero.cta.primary")}
          </Link>
          <Link
            to={localePath("/application-metier-sur-mesure", lang)}
            className="text-sm font-semibold text-primary px-4 py-3 transition-colors duration-200 hover:border-b-[#4ecdc4]"
            style={{ borderBottom: "1px solid #a8c5db" }}
          >
            {t("home.hero.cta.secondary")}
          </Link>
        </div>

        <BeforeAfter />
      </div>
    </section>
  );
};

export default HeroSection;
