import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/cas-clients/teach-for-belgium")({
  head: () =>
    buildSeoHead({
      title: "Teach for Belgium — Salomé Michaux",
      description: "Cas client Teach for Belgium — page en cours de rédaction.",
      path: "/cas-clients/teach-for-belgium",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="Teach for Belgium" />,
});