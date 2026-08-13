import { enPathOf, frPathOf } from "@/lib/i18n-routes";

export type JsonLdEntry = Record<string, unknown>;

export interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  locale?: "fr" | "en";
  jsonLd?: JsonLdEntry | JsonLdEntry[];
  noindex?: boolean;
}

const BASE_URL = "https://salomemichaux.eu";

// Fallback so pages that don't pass their own `image` still get a social preview.
const DEFAULT_OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0c04d6e6-5a5e-4320-90b9-965d4682377b/id-preview-096407d5--79c80cf6-5085-4421-a452-6d9712a54261.lovable.app-1771279405104.png";

/**
 * Builds the `head()` return value for a TanStack Router route: per-page title,
 * description, canonical, Open Graph, Twitter, hreflang and JSON-LD. Rendered
 * server-side via the route's native head() (see src/routes/__root.tsx), not a
 * mounted component — react-helmet-async was deliberately not used because it
 * only patches the DOM client-side, so crawlers reading the raw SSR response
 * would never see the tags.
 */
export default function buildSeoHead({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  locale = "fr",
  jsonLd,
  noindex = false,
}: SeoHeadProps) {
  const canonical = `${BASE_URL}${path}`;
  const frPath = frPathOf(path);
  const ogLocale = locale === "fr" ? "fr_BE" : "en_GB";

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: canonical },
    { property: "og:image", content: image },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Salomé Michaux" },
    { property: "og:locale", content: ogLocale },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

  if (noindex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }

  const links = [
    { rel: "canonical", href: canonical },
    { rel: "alternate", hrefLang: "fr", href: `${BASE_URL}${frPath}` },
    { rel: "alternate", hrefLang: "x-default", href: `${BASE_URL}${frPath}` },
  ];

  // Only advertise an English alternate for pages that actually have one.
  const enPath = enPathOf(path);
  if (enPath) {
    links.push({ rel: "alternate", hrefLang: "en", href: `${BASE_URL}${enPath}` });
  }

  const jsonLdEntries = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const scripts = jsonLdEntries.map((entry) => ({
    type: "application/ld+json",
    children: JSON.stringify(entry),
  }));

  return { meta, links, scripts };
}
