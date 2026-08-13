import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import buildSeoHead from "@/components/Seo";

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Salomé Michaux",
  url: "https://salomemichaux.eu",
  jobTitle: "Product Consultant & Builder",
  email: "info@salomemichaux.eu",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bruxelles",
    addressCountry: "BE",
  },
  sameAs: ["https://www.linkedin.com/in/salomemichaux/"],
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Salomé Michaux",
  url: "https://salomemichaux.eu",
  inLanguage: "fr-BE",
  publisher: { "@type": "Person", name: "Salomé Michaux" },
};

export const Route = createFileRoute("/")({
  head: () =>
    buildSeoHead({
      title: "Digitalisation des processus pour équipes sans tech interne",
      description:
        "Je transforme les processus internes de PME, scale-ups et associations en outils sur-mesure : de l'audit à la mise en production. Basée à Bruxelles.",
      path: "/",
      jsonLd: [PERSON_JSON_LD, WEBSITE_JSON_LD],
    }),
  component: Index,
});
