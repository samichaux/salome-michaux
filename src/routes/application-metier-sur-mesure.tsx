import { createFileRoute } from "@tanstack/react-router";
import ServicePage, { SERVICE_FAQ } from "@/pages/ServicePage";
import buildSeoHead from "@/components/Seo";
import { translate } from "@/contexts/LanguageContext";
import { faqPageJsonLd, personJsonLd } from "@/lib/structured-data";

export const Route = createFileRoute("/application-metier-sur-mesure")({
  head: () =>
    buildSeoHead({
      title: "Application métier sur mesure pour équipes sans IT",
      description:
        "Je conçois et construis votre application métier sur mesure : audit du processus, écrans par rôle, règles de gestion et mise en production. PME, scale-ups, associations.",
      path: "/application-metier-sur-mesure",
      jsonLd: [
        personJsonLd("fr"),
        faqPageJsonLd(
          SERVICE_FAQ.map((i) => ({
            question: translate("fr", `app.faq.q${i}`),
            answer: translate("fr", `app.faq.a${i}`),
          })),
        ),
      ],
    }),
  component: ServicePage,
});
