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

export const Route = createFileRoute("/")({
  head: () =>
    buildSeoHead({
      title: "Salomé Michaux — Product Consultant & Builder | Digitalisation de process",
      description:
        "Je transforme les process internes de PME, scale-ups et ASBL sans équipe tech en outils sur-mesure. De l'audit à la mise en production, basée à Bruxelles.",
      path: "/",
      jsonLd: PERSON_JSON_LD,
    }),
  component: Index,
});
