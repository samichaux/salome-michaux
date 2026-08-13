import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const pains = [
  { key: "1", to: "/automatiser-un-reporting" },
  { key: "2", to: "/synchroniser-ses-outils" },
  { key: "3", to: "/reprendre-un-outil-interne" },
  { key: "4", to: "/transformation-digitale-pme" },
];

const PainPointsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="symptomes" className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-jost text-xl text-primary mb-2">{t("home.pains.eyebrow")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t("home.pains.title")}</h2>
        </div>

        <ul className="divide-y divide-border/60 border-y border-border/60">
          {pains.map((pain, i) => (
            <li key={pain.key}>
              <ScrollReveal delay={i * 80}>
                <Link
                  to={pain.to}
                  className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5"
                >
                  <span className="font-fraunces text-lg sm:text-xl text-foreground flex-1">
                    « {t(`home.pains.${pain.key}.quote`)} »
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary whitespace-nowrap">
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
