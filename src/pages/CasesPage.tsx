import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageCta from "@/components/PageCta";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { localePath } from "@/lib/i18n-routes";

const CASES = [
  { i: 1, to: "/cas-clients/purpose-recruiting" },
  { i: 2, to: "/cas-clients/wwf" },
  { i: 3, to: "/cas-clients/teach-for-belgium" },
  { i: 4, to: "/cas-clients/medicheck" },
] as const;

/**
 * Client case hub. Copy lives in LanguageContext under the `cases.` prefix so
 * the French route and its English mirror share this component.
 */
const CasesPage = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-36 pb-12 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
              {t("cases.h1.before")}
              <span className="text-gradient-blue">{t("cases.h1.highlight")}</span>
              {t("cases.h1.after")}
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed">{t("cases.answer")}</p>
            <p className="mt-6 text-xs text-ink-soft/80 type-label">{t("cases.meta")}</p>
          </div>
        </section>

        <section className="pb-16 px-6">
          <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2">
            {CASES.map(({ i, to }) => (
              <ScrollReveal key={i}>
                <article className="h-full rounded-[20px] border border-border bg-card p-7 shadow-soft">
                  <p className="type-label text-xs text-ink-soft mb-2">{t(`cases.${i}.client`)}</p>
                  <h2 className="text-xl font-bold text-foreground mb-3">{t(`cases.${i}.title`)}</h2>
                  <p className="text-ink-soft leading-relaxed mb-5">{t(`cases.${i}.text`)}</p>
                  <Link
                    to={localePath(to, lang)}
                    className="font-semibold text-primary hover:underline"
                  >
                    {t(`cases.${i}.link`)}
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <PageCta to="/audit-de-process" />
      </main>
      <Footer />
    </div>
  );
};

export default CasesPage;