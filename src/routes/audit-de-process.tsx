import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/audit-de-process")({
  head: () =>
    buildSeoHead({
      title: "Audit de process — Salomé Michaux",
      description: "Audit de process — page en cours de rédaction.",
      path: "/audit-de-process",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="Audit de process" />,
});
