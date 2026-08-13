import { useLanguage } from "@/contexts/LanguageContext";

const clients = ["WWF", "Purpose Recruiting", "Teach for Belgium"];

const TrustBar = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 bg-card border-y border-border/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-ink-muted mb-5">{t("home.trust.label")}</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {clients.map((name) => (
            <li key={name} className="font-fraunces text-lg sm:text-xl text-ink-soft">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBar;
