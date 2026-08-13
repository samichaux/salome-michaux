import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturedCaseSection = () => {
  const { t } = useLanguage();

  return (
    <section id="cas-client" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-card rounded-[20px] border border-border/50 shadow-card p-8 sm:p-10">
          <p className="font-jost text-xl text-primary mb-2">{t("home.proof.eyebrow")}</p>
          <p className="text-xs uppercase tracking-[0.18em] text-ink-muted mb-4">{t("home.proof.client")}</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{t("home.proof.title")}</h2>
          <p className="text-ink-soft mb-8 max-w-2xl">{t("home.proof.desc")}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <Link
              to="/cas-clients/purpose-recruiting"
              className="group inline-flex items-center justify-center gap-1.5 bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-[14px] hover:shadow-glow transition-all duration-300"
            >
              {t("home.proof.link")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/cas-clients" className="inline-flex items-center justify-center text-sm font-semibold text-primary px-2 py-3">
              {t("home.proof.all")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseSection;
