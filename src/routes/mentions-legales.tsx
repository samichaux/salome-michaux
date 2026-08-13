import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/mentions-legales")({
  head: () =>
    buildSeoHead({
      title: "Mentions légales — Salomé Michaux",
      description: "Mentions légales — page en cours de rédaction.",
      path: "/mentions-legales",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="Mentions légales" />,
});