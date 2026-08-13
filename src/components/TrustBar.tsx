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
    <section className="py-10" style={{ backgroundColor: "#fafbfc", borderBottom: "1px solid #e8f1f8" }}>
      <div className="max-w-6xl mx-auto px-6 text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <p className="type-label" style={{ color: "#8494a6" }}>
            {t("home.trust.label")}
          </p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-6">
            {clients.map((client) => (
              <li key={client.name} className="flex items-center">
                <span
                  className="type-display-sm"
                  style={{ fontSize: "20px", color: "#2c4a6e" }}
                >
                  {client.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
