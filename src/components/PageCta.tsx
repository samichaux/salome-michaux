import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/contexts/LanguageContext";
import { localePath } from "@/lib/i18n-routes";

interface PageCtaProps {
  to: string;
}

const PageCta = ({ to }: PageCtaProps) => {
  const { t, lang } = useLanguage();

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#fff", borderTop: "1px solid #e8f1f8" }}
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6 text-left">
        <p className="type-label" style={{ color: "#8494a6", marginBottom: "14px" }}>
          {t("cta.eyebrow")}
        </p>
        <h2 className="type-display-sm" style={{ color: "#2c4a6e", marginBottom: "18px" }}>
          {t("cta.title")}
        </h2>
        <p style={{ color: "#4a5c6f", maxWidth: "34em", marginBottom: "28px" }}>
          {t("cta.subtitle")}
        </p>
        <Link
          to={localePath(to, lang)}
          className="inline-block font-semibold px-8 py-3.5 transition-colors duration-200 hover:bg-[#1a2632]"
          style={{ backgroundColor: "#2c4a6e", color: "#fff", borderRadius: "3px" }}
        >
          {t("cta.button")}
        </Link>
      </div>
    </section>
  );
};

export default PageCta;
