import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const tools = [
  { name: "Lovable", logo: "https://lovable.dev/favicon.ico", bg: "rgba(255,56,92,0.06)", color: "#e8607a" },
  { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3ECF8E", bg: "rgba(62,207,142,0.06)", color: "#4db88a" },
  { name: "Make.com", logo: "https://cdn.simpleicons.org/make/6D00CC", bg: "rgba(109,0,204,0.06)", color: "#9b5de5" },
  { name: "Bubble", logo: "https://cdn.simpleicons.org/bubble/0040FF", bg: "rgba(0,64,255,0.06)", color: "#5b8def" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E", bg: "rgba(242,78,30,0.06)", color: "#e07a5f" },
  { name: "Airtable", logo: "https://cdn.simpleicons.org/airtable/18BFFF", bg: "rgba(24,191,255,0.06)", color: "#4dabcf" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion/000000", bg: "rgba(0,0,0,0.04)", color: "#6b7280" },
  { name: "Wix", logo: "https://cdn.simpleicons.org/wix/0C6EFC", bg: "rgba(12,110,252,0.06)", color: "#6b9bf5" },
  { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier/FF4A00", bg: "rgba(255,74,0,0.06)", color: "#e08a5e" },
];

const ToolsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-handwriting text-xl text-primary text-center mb-8">
          {t("tools.label")}
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:flex-nowrap md:gap-3">
          {tools.map((tool, i) => (
            <ScrollReveal key={tool.name} delay={i * 60}>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 md:gap-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 cursor-default whitespace-nowrap"
                style={{
                  backgroundColor: tool.bg,
                  color: tool.color,
                  borderColor: `${tool.color}20`,
                }}
              >
                <img src={tool.logo} alt={tool.name} className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                {tool.name}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
