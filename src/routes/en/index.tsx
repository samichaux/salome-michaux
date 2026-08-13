import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import buildSeoHead from "@/components/Seo";
import { personJsonLd, webSiteJsonLd } from "@/lib/structured-data";

export const Route = createFileRoute("/en/")({
  head: () =>
    buildSeoHead({
      title: "Bespoke software development for teams without IT",
      description:
        "I build bespoke internal software for SMEs, scale-ups and non-profits with no IT team, from audit to production. Based in Brussels, working remotely.",
      path: "/en",
      locale: "en",
      jsonLd: [personJsonLd("en"), webSiteJsonLd("en")],
    }),
  component: Index,
});
