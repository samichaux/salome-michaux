import ScrollReveal from "@/components/ScrollReveal";

const tools = [
  { name: "Lovable", logo: "https://lovable.dev/favicon.ico", bg: "rgba(255,56,92,0.10)", color: "#FF385C" },
  { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3ECF8E", bg: "rgba(62,207,142,0.10)", color: "#3ECF8E" },
  { name: "Make.com", logo: "https://cdn.simpleicons.org/make/6D00CC", bg: "rgba(109,0,204,0.10)", color: "#6D00CC" },
  { name: "Bubble", logo: "https://cdn.simpleicons.org/bubble/0040FF", bg: "rgba(0,64,255,0.10)", color: "#0040FF" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E", bg: "rgba(242,78,30,0.10)", color: "#F24E1E" },
  { name: "Airtable", logo: "https://cdn.simpleicons.org/airtable/18BFFF", bg: "rgba(24,191,255,0.10)", color: "#18BFFF" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion/000000", bg: "rgba(0,0,0,0.08)", color: "#333333" },
  { name: "Wix", logo: "https://cdn.simpleicons.org/wix/0C6EFC", bg: "rgba(12,110,252,0.10)", color: "#0C6EFC" },
  { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier/FF4A00", bg: "rgba(255,74,0,0.10)", color: "#FF4A00" },
];

const ToolsSection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-handwriting text-xl text-primary text-center mb-8">
          mes outils favoris ✦
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {tools.map((tool, i) => (
            <ScrollReveal key={tool.name} delay={i * 60}>
              <span
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold border hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                style={{
                  backgroundColor: tool.bg,
                  color: tool.color,
                  borderColor: `${tool.color}20`,
                }}
              >
                <img src={tool.logo} alt={tool.name} className="w-4 h-4" />
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
