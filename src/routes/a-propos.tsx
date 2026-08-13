import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/pages/AboutPage";
import buildSeoHead from "@/components/Seo";
import { personJsonLd } from "@/lib/structured-data";

export const Route = createFileRoute("/a-propos")({
  head: () =>
    buildSeoHead({
      title: "À propos — Salomé Michaux, Product Consultant & Builder",
      description:
        "Ingénieure de gestion Solvay et ex-co-fondatrice de HireRing. J'aide les organisations sans équipe tech à digitaliser leurs process internes, de l'audit à la mise en production.",
      path: "/a-propos",
      jsonLd: [personJsonLd("fr")],
    }),
  component: AboutPage,
});
