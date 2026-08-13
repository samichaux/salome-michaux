import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () =>
    buildSeoHead({
      title: "Politique de confidentialité — Salomé Michaux",
      description: "Politique de confidentialité — page en cours de rédaction.",
      path: "/politique-de-confidentialite",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="Politique de confidentialité" />,
});