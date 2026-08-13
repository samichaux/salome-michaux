import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/application-metier-sur-mesure")({
  head: () =>
    buildSeoHead({
      title: "Application métier sur mesure — Salomé Michaux",
      description: "Application métier sur mesure — page en cours de rédaction.",
      path: "/application-metier-sur-mesure",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="Application métier sur mesure" />,
});
