import { createFileRoute } from "@tanstack/react-router";
import CasesPage from "@/pages/CasesPage";
import buildSeoHead from "@/components/Seo";
import { personJsonLd } from "@/lib/structured-data";

export const Route = createFileRoute("/cas-clients/")({
  head: () =>
    buildSeoHead({
      title: "Cas clients : process internes digitalisés",
      description:
        "Purpose Recruiting, WWF, Teach for Belgium, MediCheck : des processus internes tenus à la main transformés en outils utilisés au quotidien, de l'audit à la production.",
      path: "/cas-clients",
      jsonLd: [personJsonLd("fr")],
    }),
  component: CasesPage,
});
