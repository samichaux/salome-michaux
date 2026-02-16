import ScrollReveal from "@/components/ScrollReveal";

const tools = [
  { name: "Lovable", logo: "https://lovable.dev/favicon.ico" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/supabase.svg" },
  { name: "Make.com", logo: "https://images.ctfassets.net/qqlj6g4ee76j/2EAhGiEjMrIRBsBrawJm0z/79e5ac0c7e5fc5fb4e2edcbd1e830e6e/make-logo-square.png" },
  { name: "Bubble", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/bubble.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg" },
  { name: "Airtable", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/airtable.svg" },
  { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg" },
  { name: "Wix", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/wix.svg" },
  { name: "Zapier", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zapier.svg" },
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
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border/50 hover:bg-blue-pale/50 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                <img src={tool.logo} alt={tool.name} className="w-4 h-4 object-contain" />
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
