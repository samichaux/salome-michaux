import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/cas-clients/")({
  head: () =>
    buildSeoHead({
      title: "Cas clients — Salomé Michaux",
      description: "Cas clients — page en cours de rédaction.",
      path: "/cas-clients",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="Cas clients" />,
});
