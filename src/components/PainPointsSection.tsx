import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { localePath } from "@/lib/i18n-routes";

const pains = [
  { key: "1", to: "/automatiser-un-reporting" },
  { key: "2", to: "/synchroniser-ses-outils" },
  { key: "3", to: "/reprendre-un-outil-interne" },
  { key: "4", to: "/transformation-digitale-pme" },
];

const PainPointsSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="symptomes" className="py-20" style={{ backgroundColor: "#fafbfc" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-left mb-12">
          <p className="type-label mb-2" style={{ color: "#8494a6" }}>
            {t("home.pains.eyebrow")}
          </p>
          <h2 className="type-display-sm" style={{ color: "#2c4a6e" }}>
            {t("home.pains.title")}
          </h2>
        </div>

        <ul className="divide-y divide-border/60 border-y border-border/60">
          {pains.map((pain, i) => (
            <li key={pain.key}>
              <ScrollReveal delay={i * 80}>
                <Link
                  to={localePath(pain.to, lang)}
                  className="group flex min-h-11 flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5 transition-all duration-200 hover:pl-[14px]"
                >
                  <span
                    className="type-display-sm flex-1 min-w-0"
                    style={{ fontSize: "clamp(19px,2.3vw,25px)", color: "#1a2632" }}
                  >
                    « {t(`home.pains.${pain.key}.quote`)} »
                  </span>
                  <span
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
                    style={{ color: "#2c4a6e" }}
                  >
                    {t(`home.pains.${pain.key}.link`)}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PainPointsSection;
