import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/pages/AboutPage";
import buildSeoHead from "@/components/Seo";

export const Route = createFileRoute("/en/about")({
  head: () =>
    buildSeoHead({
      title: "About — Salomé Michaux, Product Consultant & Builder",
      description:
        "Solvay business engineer and former HireRing co-founder. I help organisations without a tech team digitalise internal processes, from audit to production.",
      path: "/en/about",
      locale: "en",
    }),
  component: AboutPage,
});