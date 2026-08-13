import { useLanguage } from "@/contexts/LanguageContext";

const tools = ["Lovable", "Supabase", "Make.com", "Bubble", "Airtable", "Notion", "Zapier", "Figma"];

const ToolsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-14 bg-card border-t border-border/50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-ink-muted mb-3">{t("home.tools.label")}</p>
        <p className="text-sm text-ink-soft mb-4">{t("home.tools.desc")}</p>
        <p className="text-sm text-ink-muted">{tools.join(" · ")}</p>
      </div>
    </section>
  );
};

export default ToolsSection;
