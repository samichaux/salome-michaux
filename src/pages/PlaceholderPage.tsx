import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage = ({ title }: PlaceholderPageProps) => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-36 pb-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-ink-soft mb-8">
            {lang === "fr"
              ? "Cette page est en cours de rédaction. En attendant, parlons de votre processus."
              : "This page is being written. In the meantime, let's talk about your process."}
          </p>
          <Link
            to="/"
            className="inline-block bg-gradient-primary text-primary-foreground font-semibold px-7 py-3 rounded-[14px] hover:shadow-glow transition-all duration-300"
          >
            {lang === "fr" ? "Retour à l'accueil" : "Back to home"}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlaceholderPage;
