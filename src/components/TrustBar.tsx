import { useLanguage } from "@/contexts/LanguageContext";
import logoWwf from "@/assets/logo-wwf.svg";
import logoPurpose from "@/assets/logo-purpose-recruiting.svg";
import logoTeach from "@/assets/logo-teach-for-belgium.svg";

const clients = [
  { name: "WWF", src: logoWwf, className: "h-12 sm:h-14 w-auto" },
  { name: "Purpose Recruiting", src: logoPurpose, className: "h-6 sm:h-7 w-auto" },
  { name: "Teach for Belgium", src: logoTeach, className: "h-6 sm:h-7 w-auto" },
];

const TrustBar = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 bg-card border-y border-border/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-ink-muted mb-5">{t("home.trust.label")}</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {clients.map((client) => (
            <li key={client.name} className="flex items-center">
              <img
                src={client.src}
                alt={`Logo ${client.name}`}
                loading="lazy"
                className={`${client.className} opacity-70 transition-opacity duration-300 hover:opacity-100`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBar;
