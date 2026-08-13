import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/reprendre-un-outil-interne")({
  head: () =>
    buildSeoHead({
      title: "Reprendre un outil interne — Salomé Michaux",
      description: "Reprendre un outil interne — page en cours de rédaction.",
      path: "/reprendre-un-outil-interne",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="Reprendre un outil interne" />,
});
