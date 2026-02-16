import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToolsSection from "@/components/ToolsSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AutomationSection from "@/components/AutomationSection";
import MethodSection from "@/components/MethodSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ToolsSection />
      <StatsSection />
      <ProjectsSection />
      <AutomationSection />
      <MethodSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
