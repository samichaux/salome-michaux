import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/cas-clients/wwf")({
  head: () =>
    buildSeoHead({
      title: "WWF — Salomé Michaux",
      description: "Cas client WWF — page en cours de rédaction.",
      path: "/cas-clients/wwf",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="WWF" />,
});