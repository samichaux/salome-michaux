import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { localePath } from "@/lib/i18n-routes";

// Illustrative only — generic placeholder data, no real client information.
const deals = [
  { company: "Nova Toitures", stage: "Lead Entry", tone: "neutral" },
  { company: "Bâti Sud SRL", stage: "Qualification", tone: "blue" },
  { company: "Client Group", stage: "Client", tone: "mint" },
] as const;

const themes = [
  { label: "Interpersonal qualities", tone: "blue" },
  { label: "Drive & work ethic", tone: "mint" },
  { label: "Institutional knowledge", tone: "neutral" },
] as const;

const sampleQuotes = [
  "Hard-working, strong sense of ownership.",
  "Reliable, great to collaborate with.",
];

const chips = ["Enrichissement de données", "IA Insights", "Sync with Aircall", "Onboarding automatique"];

const stats = [
  { label: "Qualified rate", value: "38%" },
  { label: "Avg. sales cycle", value: "12 days" },
  { label: "Monthly deals", value: "24" },
];

const stageTone: Record<(typeof deals)[number]["tone"], string> = {
  neutral: "bg-secondary text-ink-muted",
  blue: "bg-blue-tint text-blue-signature",
  mint: "bg-mint-light/40 text-blue-deep",
};

const dotTone: Record<(typeof themes)[number]["tone"], string> = {
  neutral: "bg-ink-muted",
  blue: "bg-blue-signature",
  mint: "bg-mint",
};

const MockupChrome = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="relative bg-white/95 rounded-[18px] shadow-medium p-5 w-full h-full">
    <div className="flex items-center gap-1.5 mb-4">
      <span className="w-2.5 h-2.5 rounded-full bg-blue-pale" />
      <span className="w-2.5 h-2.5 rounded-full bg-blue-pale" />
      <span className="w-2.5 h-2.5 rounded-full bg-blue-pale" />
      <span className="ml-auto font-mono-ui text-[9px] uppercase tracking-wider text-ink-muted">{label}</span>
    </div>
    {children}
  </div>
);

const PipelineMockup = () => (
  <MockupChrome label="Pipeline">
    <div className="space-y-2 mb-4">
      {deals.map((deal, i) => (
        <div key={deal.company} className="flex items-center gap-2.5 rounded-lg border border-border/50 px-2.5 py-2">
          <span
            className="w-7 h-7 rounded-full shrink-0"
            style={{ background: `linear-gradient(135deg, hsl(var(--blue-signature)), hsl(var(--mint)))`, opacity: 1 - i * 0.15 }}
          />
          <div className="h-2 flex-1 rounded-full bg-ink/12" />
          <span className={`font-mono-ui text-[9px] px-1.5 py-0.5 rounded whitespace-nowrap ${stageTone[deal.tone]}`}>
            {deal.stage}
          </span>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-2 rounded-lg bg-blue-tint px-2.5 py-2">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-signature shrink-0" />
      <span className="font-mono-ui text-[9px] uppercase tracking-wide text-blue-signature">Next action</span>
      <span className="ml-auto h-2 w-16 rounded-full bg-blue-signature/20" />
    </div>
  </MockupChrome>
);

const QualificationMockup = () => (
  <MockupChrome label="AI Insights">
    <div className="flex items-center justify-between mb-3">
      <span className="font-mono-ui text-[9px] uppercase tracking-wide text-ink-muted">Theme identifier</span>
      <span
        className="relative inline-flex h-4 w-7 items-center rounded-full shrink-0"
        style={{ background: `linear-gradient(120deg, hsl(var(--blue-signature)), hsl(var(--mint)))` }}
      >
        <span className="absolute right-0.5 w-3 h-3 rounded-full bg-white shadow-soft" />
      </span>
    </div>
    <div className="space-y-1.5 mb-3">
      {themes.map((th) => (
        <div key={th.label} className="flex items-center justify-between rounded-lg border border-border/50 px-2.5 py-1.5">
          <span className="font-mono-ui text-[9px] text-ink-soft">{th.label}</span>
          <span className={`w-1.5 h-1.5 rounded-full ${dotTone[th.tone]}`} />
        </div>
      ))}
    </div>
    <div className="rounded-lg bg-blue-tint/60 px-2.5 py-2 space-y-1.5">
      {sampleQuotes.map((q) => (
        <p key={q} className="text-[9px] text-ink-soft leading-snug">
          "{q}"
        </p>
      ))}
      <p className="font-mono-ui text-[8px] text-blue-signature/70 flex items-center gap-1.5">
        <span className="w-1 h-1 rounded-full bg-blue-signature animate-pulse" aria-hidden="true" />
        AI is looking for more quotes…
      </p>
    </div>
  </MockupChrome>
);

const StatsMockup = () => (
  <MockupChrome label="Controlling">
    <div className="grid grid-cols-3 gap-2">
      {stats.map((s) => (
        <div key={s.label} className="rounded-lg border border-border/50 px-2 py-3 text-center">
          <div
            className="font-fraunces font-semibold text-lg mb-1"
            style={{
              backgroundImage: `linear-gradient(120deg, hsl(var(--blue-signature)) 0%, hsl(var(--mint)) 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {s.value}
          </div>
          <div className="font-mono-ui text-[8px] uppercase tracking-wide text-ink-muted leading-tight">{s.label}</div>
        </div>
      ))}
    </div>
    <div className="mt-3 h-16 rounded-lg bg-gradient-to-t from-blue-tint to-transparent border border-border/50 flex items-end gap-1.5 px-2 pb-1.5">
      {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-t"
          style={{ height: `${h}%`, background: `linear-gradient(180deg, hsl(var(--mint)), hsl(var(--blue-signature)))`, opacity: 0.7 }}
        />
      ))}
    </div>
  </MockupChrome>
);

const CrmCarousel = () => (
  <div className="relative w-full max-w-sm mx-auto aspect-[4/3.1]">
    <div className="absolute inset-0 animate-crossfade" style={{ animationDelay: "0s" }}>
      <PipelineMockup />
    </div>
    <div className="absolute inset-0 animate-crossfade" style={{ animationDelay: "3s" }}>
      <QualificationMockup />
    </div>
    <div className="absolute inset-0 animate-crossfade" style={{ animationDelay: "6s" }}>
      <StatsMockup />
    </div>
  </div>
);

const FeaturedCaseSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="cas-client" className="py-20 bg-gradient-wash-tint">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-center">
          {/* Left — plain, no card, matches the section's own eyebrow language */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-soft text-xs font-medium text-ink-soft mb-4">
              {t("home.proof.eyebrow")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t("home.proof.title")}</h2>
            <p className="text-ink-soft max-w-md mx-auto lg:mx-0">{t("home.proof.desc")}</p>
          </div>

          {/* Right — the case study card, visual stacked at the bottom */}
          <div className="relative overflow-hidden bg-gradient-case rounded-[28px] shadow-medium px-8 py-10 sm:px-10 sm:py-12">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
              viewBox="0 0 540 480" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true"
            >
              <path
                d="M 480,40 C 520,70 500,120 460,130 C 420,140 430,190 470,210"
                stroke="#ffffff" strokeWidth="1.4" strokeOpacity=".18" strokeLinecap="round" strokeDasharray="3 6"
                className="animate-flow-dash"
              />
              <circle cx="480" cy="40" r="4" fill="#ffffff" fillOpacity=".35" />
              <circle cx="470" cy="210" r="5" fill="#ffffff" fillOpacity=".22" />
            </svg>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white/90"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <CrmCarousel />

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-center mt-8">
                <Link
                  to={localePath("/cas-clients/purpose-recruiting", lang)}
                  className="group inline-flex items-center justify-center gap-1.5 bg-white text-ink font-semibold px-6 py-3 rounded-[14px] hover:shadow-glow transition-all duration-300"
                >
                  {t("home.proof.link")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to={localePath("/cas-clients", lang)}
                  className="inline-flex items-center justify-center text-sm font-semibold text-blue-light hover:text-white transition-colors px-2 py-3"
                >
                  {t("home.proof.all")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseSection;
