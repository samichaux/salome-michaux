import ScrollReveal from "@/components/ScrollReveal";

const tools = [
  "Lovable", "Supabase", "Make.com", "Bubble", "Figma",
  "Airtable", "Notion", "Wix", "Zapier",
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
            <ScrollReveal key={tool} delay={i * 60}>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border/50 hover:bg-blue-pale/50 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                {tool}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
