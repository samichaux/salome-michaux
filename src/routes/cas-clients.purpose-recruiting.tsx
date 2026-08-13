import { createFileRoute } from "@tanstack/react-router";
import PlaceholderPage from "@/pages/PlaceholderPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/cas-clients/purpose-recruiting")({
  head: () =>
    buildSeoHead({
      title: "Purpose Recruiting — Salomé Michaux",
      description: "Purpose Recruiting — page en cours de rédaction.",
      path: "/cas-clients/purpose-recruiting",
      noindex: true,
    }),
  component: () => <PlaceholderPage title="Purpose Recruiting" />,
});
