import { createFileRoute } from "@tanstack/react-router";
import ServicePage, { SERVICE_FAQ } from "@/pages/ServicePage";
import buildSeoHead from "@/components/Seo";
import { translate } from "@/contexts/LanguageContext";
import { faqPageJsonLd, personJsonLd } from "@/lib/structured-data";

export const Route = createFileRoute("/en/bespoke-software-development")({
  head: () =>
    buildSeoHead({
      title: "Bespoke software development for teams without IT",
      description:
        "I design and build bespoke internal software: process audit, screens per role, business rules and go-live. For SMEs, scale-ups and non-profits with no IT team.",
      path: "/en/bespoke-software-development",
      locale: "en",
      jsonLd: [
        personJsonLd("en"),
        faqPageJsonLd(
          SERVICE_FAQ.map((i) => ({
            question: translate("en", `app.faq.q${i}`),
            answer: translate("en", `app.faq.a${i}`),
          })),
        ),
      ],
    }),
  component: ServicePage,
});