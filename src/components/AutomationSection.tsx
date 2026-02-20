import { MessageCircle, Bot, Phone, Users, Settings, UserCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const automationKeys = [
  { icon: Settings, titleKey: "automation.process.title", descKey: "automation.process.desc", tools: ["Make.com", "Zapier", "Airtable"] },
  { icon: Users, titleKey: "automation.crm.title", descKey: "automation.crm.desc", tools: ["Airtable", "Make.com", "WhatsApp"] },
  { icon: Bot, titleKey: "automation.whatsapp.title", descKey: "automation.whatsapp.desc", tools: ["Make.com", "OpenAI", "WhatsApp API"], powered: true },
  { icon: Phone, titleKey: "automation.voicebot.title", descKey: "automation.voicebot.desc", tools: ["Make.com", "OpenAI", "Twilio"], powered: true },
  { icon: UserCheck, titleKey: "automation.matching.title", descKey: "automation.matching.desc", tools: ["OpenAI", "Make.com", "Airtable"], powered: true },
  { icon: MessageCircle, titleKey: "automation.setting.title", descKey: "automation.setting.desc", tools: ["Make.com", "Calendly", "WhatsApp"] },
];

const AutomationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="automatisation" className="py-20 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-handwriting text-xl text-primary mb-2">{t("automation.eyebrow")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{t("automation.title")}</h2>
          <p className="text-ink-soft max-w-lg mx-auto">{t("automation.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {automationKeys.map((item, i) => (
            <ScrollReveal key={item.titleKey} delay={i * 100}>
              <div className="group relative bg-background rounded-xl p-6 border border-border/50 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-lg text-foreground">{t(item.titleKey)}</h3>
                  {item.powered && (
                    <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                      ⚡ boldys.ai
                    </span>
                  )}
                </div>
                <p className="text-sm text-ink-soft mb-4">{t(item.descKey)}</p>
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
