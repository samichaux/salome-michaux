import { MessageCircle, Users, LayoutGrid } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const automations = [
  {
    icon: MessageCircle,
    title: "WhatsApp IA",
    annotation: "super smart!",
    description: "Chatbot intelligent pour automatiser les réponses clients et qualifier les leads.",
    tools: ["Make.com", "OpenAI", "WhatsApp API"],
  },
  {
    icon: Users,
    title: "CRM Automatisé",
    annotation: "no more chaos!",
    description: "Pipeline automatisé, relances et intégration WhatsApp pour la gestion candidats.",
    tools: ["Airtable", "Make.com", "WhatsApp"],
  },
  {
    icon: LayoutGrid,
    title: "Notion Workspace",
    annotation: "so organized!",
    description: "Espaces de travail sur mesure avec automatisations et dashboards personnalisés.",
    tools: ["Notion", "Notion API", "Zapier"],
  },
];

const AutomationSection = () => {
  return (
    <section id="automatisation" className="py-20 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-handwriting text-xl text-primary mb-2">automatiser pour se concentrer sur l'essentiel</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Automatisation & IA</h2>
          <p className="text-ink-soft max-w-lg mx-auto">Des workflows intelligents qui libèrent du temps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {automations.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 120}>
              <div className="group relative bg-card rounded-xl p-6 border border-border/50 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full">
                <span className="absolute top-4 right-4 font-handwriting text-sm text-mint opacity-0 group-hover:opacity-100 transition-opacity rotate-[-4deg]">
                  {item.annotation}
                </span>
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-ink-soft mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tools.map((tool) => (
                    <span key={tool} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-ink-muted font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
