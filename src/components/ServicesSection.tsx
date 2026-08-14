import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { localePath } from "@/lib/i18n-routes";
import { cn } from "@/lib/utils";

const services = [
  { to: "/application-metier-sur-mesure", key: "1", demoId: "before-after" },
  { to: "/digitalisation-des-processus", key: "2", demoId: "merge" },
  { to: "/accompagnement-continu", key: "3", demoId: "cycle" },
] as const;

const ServiceDemo = ({ id, gradId }: { id: (typeof services)[number]["demoId"]; gradId: string }) => {
  if (id === "before-after") {
    return (
      <div className="relative flex items-center gap-2 h-14 -mx-2 px-2">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(60% 90% at 30% 50%, hsl(var(--mint) / 0.16) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <span className="relative font-mono-ui text-[10.5px] px-2.5 py-1.5 rounded-lg bg-white/45 backdrop-blur-md text-ink-muted border border-white/70 shadow-soft -rotate-2 whitespace-nowrap">
          Fichiers épars
        </span>
        <svg viewBox="0 0 22 12" width="20" height="11" fill="none" aria-hidden="true" className="relative animate-arrow-bounce">
          <path d="M1 6h18M13 1l6 5-6 5" stroke="hsl(var(--blue-light))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="relative font-mono-ui text-[10.5px] px-2.5 py-1.5 rounded-lg text-white rotate-1 whitespace-nowrap backdrop-blur-md border border-white/30 shadow-soft"
          style={{ background: `linear-gradient(120deg, hsl(var(--blue-signature) / 0.85) 0%, hsl(var(--mint) / 0.85) 130%)` }}
        >
          Appli dédiée
        </span>
      </div>
    );
  }

  if (id === "merge") {
    const steps = [
      { cx: 16, r: 4.5, fill: "hsl(var(--blue-pale))" },
      { cx: 58, r: 5.5, fill: `url(#${gradId})`, opacity: 0.55 },
      { cx: 102, r: 6.5, fill: `url(#${gradId})`, opacity: 0.8 },
      { cx: 146, r: 8, fill: `url(#${gradId})`, opacity: 1 },
    ];
    return (
      <svg viewBox="0 0 160 50" className="h-14 w-full max-w-[160px]" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="hsl(var(--blue-signature))" />
            <stop offset="1" stopColor="hsl(var(--mint))" />
          </linearGradient>
        </defs>
        <path
          d="M16,25 H146"
          stroke={`url(#${gradId})`} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="5 5"
          className="animate-flow-dash"
        />
        {steps.map((s, idx) => (
          <circle key={s.cx} cx={s.cx} cy="25" r={s.r} fill={s.fill} opacity={s.opacity}
            className={idx === steps.length - 1 ? "animate-node-pulse" : undefined} />
        ))}
        <path d="M143 21.5 L148.5 25 L143 28.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }

  return (
    <div className="relative flex items-center gap-2.5 h-14 -mx-2 px-2">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(60% 90% at 20% 50%, hsl(var(--blue-light) / 0.22) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <svg viewBox="0 0 60 60" width="40" height="40" fill="none" aria-hidden="true" className="relative">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="hsl(var(--blue-signature))" />
            <stop offset="1" stopColor="hsl(var(--mint))" />
          </linearGradient>
        </defs>
        <circle cx="30" cy="30" r="21" stroke="hsl(var(--blue-pale))" strokeWidth="2.2" />
        <path
          d="M30 9 A21 21 0 1 1 10.4 21.5"
          stroke={`url(#${gradId})`} strokeWidth="2.4" strokeLinecap="round"
          className="animate-cycle-spin"
        />
      </svg>
      <span className="relative font-mono-ui text-[10.5px] px-2 py-1.5 rounded-md bg-white/45 backdrop-blur-md text-ink-muted border border-white/70 shadow-soft whitespace-nowrap">
        v1 → v2 → v3
      </span>
    </div>
  );
};

const NAV_HEIGHT = 65;

const ServicesSection = () => {
  const { t, lang } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrollActive, setScrollActive] = useState(0);
  const pinRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    let frame: number | null = null;

    const computeActive = () => {
      frame = null;
      const el = pinRef.current;
      if (!el || !mql.matches) return;
      const rect = el.getBoundingClientRect();
      const pinnable = rect.height - window.innerHeight;
      if (pinnable <= 0) return;
      const progress = -rect.top / pinnable;
      const clamped = Math.min(1, Math.max(0, progress));
      const index = Math.min(services.length - 1, Math.floor(clamped * services.length));
      setScrollActive(index);
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(computeActive);
    };

    computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={pinRef}
      id="services"
      className="relative bg-gradient-wash-down md:h-[300vh]"
    >
      <div
        className="md:sticky flex flex-col justify-center overflow-hidden py-24 sm:py-28"
        style={{ top: NAV_HEIGHT, height: `calc(100vh - ${NAV_HEIGHT}px)` }}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 w-full">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-soft text-xs font-medium text-ink-soft mb-4">
            {t("home.services.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t("home.services.title")}</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-stretch" onMouseLeave={() => setHovered(null)}>
          {services.map((service, i) => {
            const activeIndex = hovered ?? scrollActive;
            const isDimmed = i !== activeIndex;
            const isActive = i === activeIndex;
            return (
              <div
                key={service.key}
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                className="min-w-0 transition-[flex-grow] duration-500 ease-out"
                style={{
                  flexGrow: isActive ? 2 : 1,
                  flexBasis: 0,
                }}
              >
                <ScrollReveal delay={i * 100} className="h-full group">
                  <Link
                    to={localePath(service.to, lang)}
                    className={cn(
                      "group relative flex min-w-0 flex-col h-full overflow-hidden rounded-[20px] p-8 border transition-colors duration-500",
                      isDimmed
                        ? "bg-gradient-case border-transparent shadow-medium"
                        : "bg-card border-border/50 shadow-card hover:shadow-card-hover"
                    )}
                  >
                    <span
                      className="absolute top-0 left-8 right-8 h-1 rounded-b-md"
                      style={{ background: `linear-gradient(90deg, hsl(var(--blue-signature)) 0%, hsl(var(--mint)) 100%)` }}
                      aria-hidden="true"
                    />
                    <h3 className={cn("font-bold text-lg mb-2 transition-colors duration-500", isDimmed ? "text-white" : "text-foreground")}>
                      {t(`home.services.${service.key}.title`)}
                    </h3>
                    <p className={cn("text-sm transition-colors duration-500", isDimmed ? "text-blue-light" : "text-ink-soft")}>
                      {t(`home.services.${service.key}.desc`)}
                    </p>
                    <div className="flex-1 flex items-center justify-center min-h-[64px] my-4">
                      <div
                        className="transition-transform duration-500 ease-out"
                        style={{ transform: isActive ? "scale(1.35)" : "scale(1)" }}
                      >
                        <div className="scale-90 opacity-0 transition-all duration-500 delay-150 ease-out group-[&.opacity-100]:scale-100 group-[&.opacity-100]:opacity-100">
                          <ServiceDemo id={service.demoId} gradId={`svcGrad-${service.key}`} />
                        </div>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "mt-auto inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300",
                        isDimmed ? "text-white" : "text-primary",
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
                      )}
                    >
                      {t(`home.services.${service.key}.link`)}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
