import logoSM from "@/assets/logo-sm.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-blue-tint border-t border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoSM} alt="Salomé Michaux" className="h-7 w-auto" />
            <span className="font-handwriting text-lg text-primary">Salomé Michaux</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-ink-soft">
            <a href="mailto:info@salomemichaux.eu" className="hover:text-primary transition-colors">
              info@salomemichaux.eu
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a href="tel:+32483350333" className="hover:text-primary transition-colors">
              +32 483 35 03 33
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-ink-muted">© 2025 Salomé Michaux</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
