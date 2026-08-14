import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { localePath } from "@/lib/i18n-routes";
import { cn } from "@/lib/utils";

const pains = [
  { key: "1", to: "/automatiser-un-reporting" },
  { key: "2", to: "/synchroniser-ses-outils" },
  { key: "3", to: "/reprendre-un-outil-interne" },
  { key: "4", to: "/transformation-digitale-pme" },
];

const PainPointsSection = () => {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % pains.length), 2600);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="symptomes" className="relative py-20 bg-gradient-wash-up overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 50% at 85% 15%, hsl(var(--mint) / 0.14) 0%, transparent 60%), radial-gradient(45% 45% at 10% 85%, hsl(var(--blue-light) / 0.2) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-12">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-soft text-xs font-medium text-ink-soft mb-3">
            {t("home.pains.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t("home.pains.title")}</h2>
        </div>

        <ul className="flex flex-col gap-4 max-w-4xl mx-auto" onMouseLeave={() => setPaused(false)}>
          {pains.map((pain, i) => {
            const isActive = active === i;
            return (
              <li key={pain.key}>
                <ScrollReveal delay={i * 80}>
                  <Link
                    to={localePath(pain.to, lang)}
                    onMouseEnter={() => {
                      setActive(i);
                      setPaused(true);
                    }}
                    onFocus={() => setActive(i)}
                    className={cn(
                      "group flex min-h-11 flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-5 rounded-[18px] border transition-all duration-500 ease-out origin-left",
                      isActive
                        ? "scale-[1.03] bg-card border-border/50 shadow-card-hover"
                        : "scale-100 bg-card/60 border-border/30 shadow-card"
                    )}
                  >
                    <span
                      className={cn(
                        "font-fraunces text-lg sm:text-xl flex-1 min-w-0 transition-colors duration-500",
                        isActive ? "text-foreground" : "text-foreground/60"
                      )}
                    >
                      « {t(`home.pains.${pain.key}.quote`)} »
                    </span>
                    <span
                      className={cn(
                        "inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold transition-colors duration-500",
                        isActive ? "text-primary" : "text-primary/60"
                      )}
                    >
                      {t(`home.pains.${pain.key}.link`)}
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </Link>
                </ScrollReveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PainPointsSection;
