import { MessageCircle, Bot, Phone, Users, Settings, UserCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const automations = [
  {
    icon: Bot,
    title: "Agents IA WhatsApp",
    annotation: "24/7 ✨",
    description: "Assistants intelligents sur WhatsApp qui qualifient vos leads, répondent aux questions et prennent des rendez-vous automatiquement.",
    tools: ["Make.com", "OpenAI", "WhatsApp API"],
  },
  {
    icon: Phone,
    title: "Voicebots IA",
    annotation: "it talks! 🤖",
    description: "Agents vocaux qui gèrent vos appels entrants, prennent des messages et orientent vos clients vers le bon interlocuteur.",
    tools: ["Make.com", "OpenAI", "Twilio"],
  },
  {
    icon: Settings,
    title: "Automatisation de processus",
    annotation: "bye bye manuel! ⚡",
    description: "Workflows sur mesure qui connectent vos outils et éliminent les tâches répétitives : onboarding, relances, reporting.",
    tools: ["Make.com", "Zapier", "Airtable"],
  },
  {
    icon: Users,
    title: "CRM automatisé",
    annotation: "no more chaos!",
    description: "Pipeline de vente intelligent avec suivi automatique, relances programmées et notifications en temps réel.",
    tools: ["Airtable", "Make.com", "WhatsApp"],
  },
  {
    icon: UserCheck,
    title: "Matching IA recrutement",
    annotation: "perfect match! 💡",
    description: "Algorithme de matching qui analyse les profils candidats et les connecte aux offres les plus pertinentes.",
    tools: ["OpenAI", "Make.com", "Airtable"],
  },
  {
    icon: MessageCircle,
    title: "Setting automatisé",
    annotation: "done in 5 min! 🚀",
    description: "Systèmes de prise de rendez-vous et de configuration client entièrement automatisés, du premier contact au suivi.",
    tools: ["Make.com", "Calendly", "WhatsApp"],
  },
];

const AutomationSection = () => {
  return (
    <section id="automatisation" className="py-20 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-handwriting text-xl text-primary mb-2">l'IA au service de votre business</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Automatisation & IA</h2>
          <p className="text-ink-soft max-w-lg mx-auto">
            Des agents IA, voicebots et workflows intelligents qui travaillent pour vous, 24h/24.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {automations.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="group relative bg-background rounded-xl p-6 border border-border/50 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full">
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
