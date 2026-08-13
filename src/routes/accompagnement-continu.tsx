import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/accompagnement-continu")({
  head: () =>
    buildSeoHead({
      title: "Accompagnement continu — Salomé Michaux",
      description: "Accompagnement continu — page en cours de rédaction.",
      path: "/accompagnement-continu",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="Accompagnement continu" />,
});
