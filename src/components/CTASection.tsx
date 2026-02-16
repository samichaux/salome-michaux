import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blue-wash/60 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <p className="font-handwriting text-xl text-primary mb-3">{t("cta.eyebrow")}</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          {t("cta.title.1")}<span className="text-gradient-blue">{t("cta.title.highlight")}</span>{t("cta.title.2")}
        </h2>
        <p className="text-ink-soft mb-8 max-w-md mx-auto">{t("cta.subtitle")}</p>
        <a
          href="mailto:info@salomemichaux.eu"
          className="inline-block bg-gradient-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-[14px] hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
        >
          {t("cta.button")}
        </a>
      </div>
    </section>
  );
};

export default CTASection;
