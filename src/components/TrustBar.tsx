import { useLanguage } from "@/contexts/LanguageContext";

const clients = ["WWF", "Purpose Recruiting", "Teach for Belgium"];

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
              <li key={client} className="flex items-center">
                <span
                  className="type-display-sm"
                  style={{ fontSize: "20px", color: "#2c4a6e" }}
                >
                  {client}
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
