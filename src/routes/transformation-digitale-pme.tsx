import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/transformation-digitale-pme")({
  head: () =>
    buildSeoHead({
      title: "Transformation digitale PME — Salomé Michaux",
      description: "Transformation digitale PME — page en cours de rédaction.",
      path: "/transformation-digitale-pme",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="Transformation digitale PME" />,
});
