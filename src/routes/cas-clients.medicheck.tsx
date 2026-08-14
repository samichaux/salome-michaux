import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/cas-clients/medicheck")({
  head: () =>
    buildSeoHead({
      title: "MediCheck — Salomé Michaux",
      description: "Cas client MediCheck — page en cours de rédaction.",
      path: "/cas-clients/medicheck",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="MediCheck" />,
});