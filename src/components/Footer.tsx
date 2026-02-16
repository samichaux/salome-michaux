import { Mail, Phone, Linkedin, Instagram, ArrowUp } from "lucide-react";
import logoSMIcon from "@/assets/logo-sm-icon.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-foreground text-background/80">
      {/* Main footer */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img src={logoSMIcon} alt="SM" className="h-9 w-auto brightness-0 invert opacity-90" />
              <span className="font-josefin font-light tracking-[0.2em] text-sm uppercase text-background/90">
                Salomé Michaux
              </span>
            </div>
            <p className="text-sm text-background/50 leading-relaxed max-w-xs">
              Développeuse no-code & spécialiste en automatisation. Du concept au lancement, sans une ligne de code.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-background/90 uppercase tracking-wider">Navigation</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Projets", href: "#projets" },
                { label: "Services", href: "#methode" },
                { label: "Automatisation & IA", href: "#automatisation" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-background/50 hover:text-background transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-background/90 uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@salomemichaux.eu" className="inline-flex items-center gap-2.5 text-sm text-background/50 hover:text-background transition-colors">
                <Mail size={15} />
                info@salomemichaux.eu
              </a>
              <a href="tel:+32483350333" className="inline-flex items-center gap-2.5 text-sm text-background/50 hover:text-background transition-colors">
                <Phone size={15} />
                +32 483 35 03 33
              </a>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} Salomé Michaux — Tous droits réservés
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-background/30 hover:text-background/60 transition-colors"
          >
            Retour en haut <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
