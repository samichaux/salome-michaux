import { Mail, Phone, Linkedin } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import logoSMIcon from "@/assets/logo-sm-icon.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { localePath, switchLangPath } from "@/lib/i18n-routes";

const linkClass =
  "inline-flex min-h-11 items-center text-sm text-background/60 hover:text-background transition-colors";

const Footer = () => {
  const { t, lang } = useLanguage();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const otherLang = lang === "fr" ? "en" : "fr";

  const offer = [
    { label: t("footer.offer.1"), to: "/application-metier-sur-mesure" },
    { label: t("footer.offer.2"), to: "/digitalisation-des-processus" },
    { label: t("footer.offer.3"), to: "/accompagnement-continu" },
    { label: t("footer.offer.4"), to: "/audit-de-process" },
    { label: t("footer.offer.5"), to: "/tarifs" },
  ];

  const references = [
    { label: t("footer.references.all"), to: "/cas-clients" },
    { label: "WWF", to: "/cas-clients/wwf" },
    { label: "Purpose Recruiting", to: "/cas-clients/purpose-recruiting" },
    { label: "Teach for Belgium", to: "/cas-clients/teach-for-belgium" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-footer text-background/80">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {/* Brand */}
          <div className="min-w-0 space-y-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <img src={logoSMIcon} alt="Salomé Michaux" className="h-9 w-auto shrink-0 brightness-0 invert opacity-90" />
              <span className="font-josefin font-light tracking-[0.2em] text-sm uppercase text-background/90">
                Salomé Michaux
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-background/50">{t("footer.role")}</p>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">{t("footer.description")}</p>
          </div>

          {/* Offer */}
          <nav className="min-w-0" aria-label={t("footer.offer")}>
            <h2 className="font-semibold text-sm text-background/90 uppercase tracking-wider mb-1">
              {t("footer.offer")}
            </h2>
            <ul className="flex flex-col">
              {offer.map((link) => (
                <li key={link.to}>
                  <Link to={localePath(link.to, lang)} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* References */}
          <nav className="min-w-0" aria-label={t("footer.references")}>
            <h2 className="font-semibold text-sm text-background/90 uppercase tracking-wider mb-1">
              {t("footer.references")}
            </h2>
            <ul className="flex flex-col">
              {references.map((link) => (
                <li key={link.to}>
                  <Link to={localePath(link.to, lang)} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="min-w-0">
            <h2 className="font-semibold text-sm text-background/90 uppercase tracking-wider mb-1">
              {t("footer.contact")}
            </h2>
            <ul className="flex flex-col">
              <li>
                <Link to={localePath("/a-propos", lang)} className={linkClass}>
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <a href="mailto:info@salomemichaux.eu" className={`${linkClass} gap-2.5`}>
                  <Mail size={15} className="shrink-0" />
                  <span className="truncate">info@salomemichaux.eu</span>
                </a>
              </li>
              <li>
                <a href="tel:+32483350333" className={`${linkClass} gap-2.5`}>
                  <Phone size={15} className="shrink-0" /> +32 483 35 03 33
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/salomemichaux/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} gap-2.5`}
                >
                  <Linkedin size={15} className="shrink-0" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="max-w-5xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-background/45">
            <span>© {new Date().getFullYear()} Salomé Michaux</span>
            <span aria-hidden="true">·</span>
            <Link
              to={localePath("/mentions-legales", lang)}
              className="inline-flex min-h-11 items-center hover:text-background/80 transition-colors"
            >
              {t("footer.legal.notice")}
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              to={localePath("/politique-de-confidentialite", lang)}
              className="inline-flex min-h-11 items-center hover:text-background/80 transition-colors"
            >
              {t("footer.legal.privacy")}
            </Link>
          </div>
          <Link
            to={switchLangPath(pathname, otherLang)}
            hrefLang={otherLang}
            aria-label={t("footer.lang.switch")}
            className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-background/60 hover:text-background transition-colors"
          >
            {otherLang.toUpperCase()}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
