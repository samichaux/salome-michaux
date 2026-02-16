import { useState } from "react";
import logoSMIcon from "@/assets/logo-sm-icon.png";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { label: t("nav.projects"), href: "/#projets" },
    { label: t("nav.automation"), href: "/#automatisation" },
    { label: t("nav.method"), href: "/#methode" },
    { label: t("nav.about"), href: "/a-propos" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="flex items-center justify-between rounded-full bg-card/80 backdrop-blur-xl px-6 py-2.5 shadow-soft border border-border/50">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <img src={logoSMIcon} alt="SM" className="h-7 w-auto opacity-90 transition-transform duration-300 group-hover:scale-105" />
          <span className="hidden sm:inline font-josefin font-light text-foreground/80 tracking-[0.15em] text-[13px] uppercase whitespace-nowrap">
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

        {/* CTA + Lang switch + Mobile toggle */}
        <div className="flex items-center gap-2">
          {/* Language switch */}
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="text-xs font-semibold px-2.5 py-1.5 rounded-full border border-border/50 text-ink-soft hover:text-primary hover:border-primary/30 transition-all duration-200 uppercase tracking-wide"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          <a
            href="#contact"
            className="bg-gradient-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-full hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            {t("nav.cta")}
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

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[75%] max-w-xs bg-card z-50 shadow-xl transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border/30">
          <span className="font-josefin font-light text-foreground/80 tracking-[0.15em] text-xs uppercase">Menu</span>
          <button onClick={() => setMobileOpen(false)} className="p-1.5 text-ink-soft hover:text-foreground transition-colors" aria-label="Fermer">
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-6 gap-1">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base font-medium text-ink-soft hover:text-primary hover:pl-2 transition-all duration-200 border-b border-border/20 last:border-0"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="px-6 mt-4">
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:shadow-glow transition-all duration-300"
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
