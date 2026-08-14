import { createFileRoute } from "@tanstack/react-router";
import CasesPage from "@/pages/CasesPage";
import buildSeoHead from "@/components/Seo";
import { personJsonLd } from "@/lib/structured-data";

export const Route = createFileRoute("/en/case-studies")({
  head: () =>
    buildSeoHead({
      title: "Case studies: internal processes digitalised",
      description:
        "Purpose Recruiting, WWF, Teach for Belgium, MediCheck: manual internal processes turned into software teams use daily, from process audit through to production.",
      path: "/en/case-studies",
      locale: "en",
      jsonLd: [personJsonLd("en")],
    }),
  component: CasesPage,
});