import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import buildSeoHead from "@/components/Seo";

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Salomé Michaux",
  url: "https://salomemichaux.eu/en",
  jobTitle: "Product Consultant & Builder",
  email: "info@salomemichaux.eu",
  address: { "@type": "PostalAddress", addressLocality: "Brussels", addressCountry: "BE" },
  sameAs: ["https://www.linkedin.com/in/salomemichaux/"],
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Salomé Michaux",
  url: "https://salomemichaux.eu/en",
  inLanguage: "en-GB",
  publisher: { "@type": "Person", name: "Salomé Michaux" },
};

export const Route = createFileRoute("/en/")({
  head: () =>
    buildSeoHead({
      title: "Bespoke software development for teams without IT",
      description:
        "I build bespoke internal software for SMEs, scale-ups and non-profits with no IT team, from audit to production. Based in Brussels, working remotely.",
      path: "/en",
      locale: "en",
      jsonLd: [PERSON_JSON_LD, WEBSITE_JSON_LD],
    }),
  component: Index,
});