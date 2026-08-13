import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/synchroniser-ses-outils")({
  head: () =>
    buildSeoHead({
      title: "Synchroniser ses outils — Salomé Michaux",
      description: "Synchroniser ses outils — page en cours de rédaction.",
      path: "/synchroniser-ses-outils",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="Synchroniser ses outils" />,
});
