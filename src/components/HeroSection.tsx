import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-24 pb-16">
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-1 absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-blue-pale/40 blur-3xl" />
        <div className="blob-2 absolute top-40 right-0 w-[400px] h-[400px] rounded-full bg-mint-light/30 blur-3xl" />
        <div className="blob-3 absolute -bottom-20 left-1/3 w-[450px] h-[450px] rounded-full bg-blue-wash/50 blur-3xl" />

        {/* Sketchy arrows - hidden on mobile */}
        <svg className="hidden md:block absolute top-32 right-[15%] w-16 h-16 text-blue-light/50" viewBox="0 0 64 64" fill="none">
          <path d="M10 50 C20 20 40 15 55 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M48 8 L55 12 L50 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
        </svg>
        <svg className="hidden md:block absolute bottom-40 left-[10%] w-14 h-14 text-blue-light/40 rotate-45" viewBox="0 0 64 64" fill="none">
          <path d="M10 50 C20 20 40 15 55 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M48 8 L55 12 L50 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border/50 shadow-soft mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-xs font-medium text-ink-soft">{t("hero.badge")}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {t("hero.title.1")}
          <span className="text-gradient-blue">{t("hero.title.highlight")}</span>
          {t("hero.title.2")}
        </h1>

        {/* Tagline */}
        <p className="font-handwriting text-xl text-ink-soft mb-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {t("hero.tagline")}
        </p>

        {/* Description */}
        <p className="text-base text-ink-muted max-w-xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          {t("hero.description")}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="https://calendly.com/salomemichaux/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-primary text-primary-foreground font-semibold px-7 py-3 rounded-[14px] hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
          >
           </a>
          <a
            href="#projets"
            className="bg-card text-primary font-semibold px-7 py-3 rounded-[14px] border border-border hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
          >
            {t("hero.cta.projects")}
          </a>

          {/* Annotation */}
          <span className="hidden sm:block font-handwriting text-lg text-mint rotate-[-6deg] ml-2">
            {t("hero.annotation")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
