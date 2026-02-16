import { useState, useEffect } from "react";
import logoSMIcon from "@/assets/logo-sm-icon.png";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = [
    { label: t("nav.projects"), href: "/#projets", num: "01" },
    { label: t("nav.automation"), href: "/#automatisation", num: "02" },
    { label: t("nav.method"), href: "/#methode", num: "03" },
    { label: t("nav.about"), href: "/a-propos", num: "04" },
  ];

  return (
    <>
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
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="text-xs font-semibold px-2.5 py-1.5 rounded-full border border-border/50 text-ink-soft hover:text-primary hover:border-primary/30 transition-all duration-200 uppercase tracking-wide"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>

            <a
              href="https://calendly.com/salomemichaux/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block bg-gradient-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-full hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
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
      </nav>

      {/* Fullscreen mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-[80] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-method" />

        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob-1 absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-[hsl(var(--blue-light)/0.15)] blur-3xl" />
          <div className="blob-2 absolute bottom-20 -left-20 w-[250px] h-[250px] rounded-full bg-[hsl(var(--mint)/0.1)] blur-3xl" />
        </div>

        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 z-[90] w-12 h-12 rounded-full bg-[hsl(0,0%,100%,0.15)] flex items-center justify-center text-[hsl(0,0%,100%,0.9)] hover:bg-[hsl(0,0%,100%,0.25)] active:scale-95 transition-all"
          aria-label="Fermer"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full px-8 pt-24 pb-10">
          {/* Links */}
          <div className="space-y-1">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`group flex items-center gap-4 py-4 border-b border-[hsl(0,0%,100%,0.1)] transition-all duration-500 ease-out ${
                  mobileOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: mobileOpen ? `${150 + i * 80}ms` : "0ms" }}
              >
                <span className="text-xs font-mono text-[hsl(var(--mint))] opacity-60">{link.num}</span>
                <span className="text-2xl font-bold text-[hsl(0,0%,100%,0.9)] group-hover:text-[hsl(var(--mint))] transition-colors duration-200">
                  {link.label}
                </span>
                <ArrowUpRight
                  size={18}
                  className="ml-auto text-[hsl(0,0%,100%,0.3)] group-hover:text-[hsl(var(--mint))] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
                />
              </a>
            ))}
          </div>

          {/* Bottom section */}
          <div
            className={`space-y-6 transition-all duration-500 ease-out ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: mobileOpen ? "500ms" : "0ms" }}
          >
            <a
              href="https://calendly.com/salomemichaux/15min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-[hsl(0,0%,100%)] text-foreground font-semibold px-6 py-3.5 rounded-2xl hover:shadow-glow transition-all duration-300"
            >
              {t("nav.cta")}
            </a>

            <div className="flex items-center justify-between text-[hsl(0,0%,100%,0.4)] text-xs">
              <span>info@salomemichaux.eu</span>
              <span className="font-josefin tracking-[0.2em] uppercase">Bruxelles</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
