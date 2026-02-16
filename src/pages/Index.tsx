import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToolsSection from "@/components/ToolsSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AutomationSection from "@/components/AutomationSection";
import MethodSection from "@/components/MethodSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { lang } = useLanguage();

  return (
    <>
      <SEOHead
        title={lang === "fr"
          ? "Salomé Michaux — Développeuse No-Code & Automatisation | Bruxelles"
          : "Salomé Michaux — No-Code Developer & Automation | Brussels"}
        description={lang === "fr"
          ? "Développeuse no-code spécialisée en création de SaaS, web apps et systèmes d'automatisation. Du concept au lancement, sans une ligne de code."
          : "No-code developer specializing in SaaS, web apps and automation systems. From concept to launch, without a single line of code."}
        path="/"
      />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <ScrollReveal>
            <ToolsSection />
          </ScrollReveal>
          <ScrollReveal>
            <StatsSection />
          </ScrollReveal>
          <ScrollReveal>
            <ProjectsSection />
          </ScrollReveal>
          <ScrollReveal>
            <AutomationSection />
          </ScrollReveal>
          <ScrollReveal>
            <MethodSection />
          </ScrollReveal>
          <ScrollReveal>
            <CTASection />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
