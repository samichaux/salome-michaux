import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToolsSection from "@/components/ToolsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AutomationSection from "@/components/AutomationSection";
import MethodSection from "@/components/MethodSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <ScrollReveal>
            <ToolsSection />
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
