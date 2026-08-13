import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/digitalisation-des-processus")({
  head: () =>
    buildSeoHead({
      title: "Digitalisation des processus — Salomé Michaux",
      description: "Digitalisation des processus — page en cours de rédaction.",
      path: "/digitalisation-des-processus",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="Digitalisation des processus" />,
});
