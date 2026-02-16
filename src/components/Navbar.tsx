import { useState } from "react";
import logoSMIcon from "@/assets/logo-sm-icon.png";
import logoFull from "@/assets/logo-sm.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Projets", href: "/#projets" },
    { label: "Automatisation", href: "/#automatisation" },
    { label: "Méthode", href: "/#methode" },
    { label: "À propos", href: "/a-propos" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="flex items-center justify-between rounded-full bg-card/80 backdrop-blur-xl px-4 py-2.5 shadow-soft border border-border/50">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img src={logoSMIcon} alt="SM" className="h-10 w-auto" />
          <span className="hidden sm:inline font-josefin font-light text-primary tracking-[0.2em] text-sm uppercase">
            Salomé Michaux
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="bg-gradient-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-full hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            Discutons
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 text-ink-soft"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 rounded-2xl bg-card/95 backdrop-blur-xl p-4 shadow-medium border border-border/50">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-ink-soft hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
