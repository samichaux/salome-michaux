import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { localePath } from "@/lib/i18n-routes";

const HeroSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="bg-white pt-2 sm:pt-3 pb-2 px-2 sm:px-3">
      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-gradient-hero shadow-medium max-w-[1600px] mx-auto px-6 sm:px-12 py-20 sm:py-28 text-center">
        {/* Flow network — nodes and drifting paths standing in for the blurred blobs */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 900 560"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="heroLineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="hsl(var(--blue-signature))" />
              <stop offset="1" stopColor="hsl(var(--mint))" />
            </linearGradient>
            <radialGradient id="heroWashGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="hsl(var(--blue-light))" stopOpacity=".35" />
              <stop offset="1" stopColor="hsl(var(--blue-light))" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heroWashGrad2" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="hsl(var(--mint))" stopOpacity=".2" />
              <stop offset="1" stopColor="hsl(var(--mint))" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="700" cy="140" r="230" fill="url(#heroWashGrad)" />
          <circle cx="120" cy="470" r="190" fill="url(#heroWashGrad2)" />

          <path
            d="M 600,55 C 690,35 760,95 745,165 C 730,235 800,270 860,300"
            stroke="url(#heroLineGrad)" strokeWidth="1.6" strokeOpacity=".55" strokeLinecap="round"
            strokeDasharray="4 7" className="animate-flow-dash"
          />
          <path
            d="M 40,430 C 110,390 100,470 175,478 C 230,484 250,440 310,455"
            stroke="url(#heroLineGrad)" strokeWidth="1.4" strokeOpacity=".4" strokeLinecap="round"
            strokeDasharray="3 6" className="animate-flow-dash" style={{ animationDuration: "9s", animationDirection: "reverse" }}
          />

          <circle cx="600" cy="55" r="6" fill="url(#heroLineGrad)" className="animate-node-pulse" />
          <circle cx="745" cy="165" r="4" fill="none" stroke="url(#heroLineGrad)" strokeWidth="1.5" />
          <circle cx="860" cy="300" r="7" fill="url(#heroLineGrad)" className="animate-node-pulse" style={{ animationDelay: ".6s" }} />
          <circle cx="40" cy="430" r="4" fill="none" stroke="url(#heroLineGrad)" strokeWidth="1.5" />
          <circle cx="310" cy="455" r="5" fill="url(#heroLineGrad)" className="animate-node-pulse" style={{ animationDelay: "1.3s" }} />
        </svg>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-soft mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
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
      </div>
    </section>
  );
};

export default HeroSection;
