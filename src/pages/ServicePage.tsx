import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageCta from "@/components/PageCta";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

/** Section and FAQ indices rendered from the shared translation keys. */
export const SERVICE_SECTIONS = [1, 2, 3, 4] as const;
export const SERVICE_FAQ = [1, 2, 3, 4] as const;

/**
 * Long-form service page. All copy comes from LanguageContext under the `app.`
 * prefix so the French route and its English mirror render the same structure
 * with their own wording, and the FAQ JSON-LD in each route's head() is built
 * from the very same keys.
 */
const ServicePage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-36 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
              {t("app.h1.before")}
              <span className="text-gradient-blue">{t("app.h1.highlight")}</span>
              {t("app.h1.after")}
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed">{t("app.answer")}</p>
            <p className="mt-6 text-xs text-ink-soft/80 type-label">{t("app.meta")}</p>
          </div>
        </section>

        <section className="pb-8 px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {SERVICE_SECTIONS.map((i) => (
              <ScrollReveal key={i}>
                <article>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                    {t(`app.s${i}.title`)}
                  </h2>
                  <p className="text-ink-soft leading-relaxed">{t(`app.s${i}.text`)}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              {t("app.faq.title")}
            </h2>
            <dl className="space-y-8">
              {SERVICE_FAQ.map((i) => (
                <div key={i}>
                  <dt className="font-semibold text-foreground mb-2">{t(`app.faq.q${i}`)}</dt>
                  <dd className="text-ink-soft leading-relaxed">{t(`app.faq.a${i}`)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <PageCta to="/audit-de-process" />
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;