import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/tarifs")({
  head: () =>
    buildSeoHead({
      title: "Tarifs — Salomé Michaux",
      description: "Tarifs — page en cours de rédaction.",
      path: "/tarifs",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="Tarifs" />,
});