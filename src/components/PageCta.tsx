import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/contexts/LanguageContext";
import { localePath } from "@/lib/i18n-routes";

interface PageCtaProps {
  to: string;
}

const PageCta = ({ to }: PageCtaProps) => {
  const { t, lang } = useLanguage();

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-gradient-wash-up">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] max-w-full h-[400px] rounded-full bg-blob-accent blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-12 text-center">
        <div className="max-w-2xl mx-auto">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-soft text-xs font-medium text-ink-soft mb-4">
          {t("cta.eyebrow")}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t("cta.title")}</h2>
        <p className="text-ink-soft mb-8 max-w-md mx-auto">{t("cta.subtitle")}</p>
        <Link
          to={localePath(to, lang)}
          className="inline-block bg-gradient-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-[14px] hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
        >
          {t("cta.button")}
        </Link>
        </div>
      </div>
    </section>
  );
};

export default PageCta;
