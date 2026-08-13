import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/automatiser-un-reporting")({
  head: () =>
    buildSeoHead({
      title: "Automatiser un reporting — Salomé Michaux",
      description: "Automatiser un reporting — page en cours de rédaction.",
      path: "/automatiser-un-reporting",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="Automatiser un reporting" />,
});
