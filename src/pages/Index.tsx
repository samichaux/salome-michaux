import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import PainPointsSection from "@/components/PainPointsSection";
import FeaturedCaseSection from "@/components/FeaturedCaseSection";
import MethodSection from "@/components/MethodSection";
import PageCta from "@/components/PageCta";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal>
          <PainPointsSection />
        </ScrollReveal>
        <ScrollReveal>
          <FeaturedCaseSection />
        </ScrollReveal>
        <ScrollReveal>
          <MethodSection />
        </ScrollReveal>
        <ScrollReveal>
          <PageCta to="/audit-de-process" />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
