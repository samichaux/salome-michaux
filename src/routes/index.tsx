import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import buildSeoHead from "@/components/Seo";
import { personJsonLd, webSiteJsonLd } from "@/lib/structured-data";

export const Route = createFileRoute("/")({
  head: () =>
    buildSeoHead({
      title: "Digitalisation des processus pour équipes sans tech interne",
      description:
        "Je transforme les processus internes de PME, scale-ups et associations en outils sur-mesure : de l'audit à la mise en production. Basée à Bruxelles.",
      path: "/",
      jsonLd: [personJsonLd("fr"), webSiteJsonLd("fr")],
    }),
  component: Index,
});
