import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { localePath } from "@/lib/i18n-routes";

const HeroSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-36 pb-20">
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-1 absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-blob-cool blur-3xl" />
        <div className="blob-2 absolute top-40 -right-24 w-[400px] h-[400px] rounded-full bg-blob-deep blur-3xl" />
        <div className="blob-3 absolute -bottom-20 left-1/3 w-[450px] h-[450px] rounded-full bg-blob-accent blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border/50 shadow-soft mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-xs font-medium text-ink-soft">{t("home.hero.badge")}</span>
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {t("home.hero.h1.before")}
          <span className="text-gradient-blue">{t("home.hero.h1.highlight")}</span>
          {t("home.hero.h1.after")}
        </h1>

        <p
          className="font-jost text-lg sm:text-xl text-ink-soft max-w-2xl mx-auto mb-9 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          {t("home.hero.subtitle")}
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            to={localePath("/audit-de-process", lang)}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-gradient-primary text-primary-foreground font-semibold px-7 py-3 rounded-[14px] hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
          >
            {t("home.hero.cta.primary")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to={localePath("/application-metier-sur-mesure", lang)}
            className="w-full sm:w-auto text-center text-sm font-semibold text-primary px-4 py-3"
          >
            {t("home.hero.cta.secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
