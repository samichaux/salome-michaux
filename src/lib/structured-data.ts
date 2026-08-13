/**
 * Shared JSON-LD building blocks, kept in one place so the French and English
 * branches always describe the same entity with the same values. Only the
 * language-dependent fields (url, inLanguage, locality, description) differ.
 */

export type Locale = "fr" | "en";

export const BASE_URL = "https://salomemichaux.eu";

const ORGANIZATION_ID = `${BASE_URL}/#organization`;
const PERSON_ID = `${BASE_URL}/#person`;

const ORG_DESCRIPTION: Record<Locale, string> = {
  fr: "Conseil et construction d'outils internes sur-mesure pour PME, scale-ups et associations sans équipe tech.",
  en: "Consulting and bespoke internal software for SMEs, scale-ups and non-profits without an IT team.",
};

/** Organization node — identical entity in both languages, same @id. */
export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Salomé Michaux",
    legalName: "Salomé Michaux",
    url: locale === "fr" ? BASE_URL : `${BASE_URL}/en`,
    email: "info@salomemichaux.eu",
    description: ORG_DESCRIPTION[locale],
    inLanguage: locale === "fr" ? "fr-BE" : "en-GB",
    founder: { "@id": PERSON_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "fr" ? "Bruxelles" : "Brussels",
      addressCountry: "BE",
    },
    areaServed: { "@type": "Country", name: "Belgium" },
    sameAs: ["https://www.linkedin.com/in/salomemichaux/"],
  };
}

/** WebPage node for the current URL, linked to the Organization. */
export function webPageJsonLd(args: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  image?: string;
}) {
  const url = `${BASE_URL}${args.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: args.title,
    description: args.description,
    inLanguage: args.locale === "fr" ? "fr-BE" : "en-GB",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    author: { "@id": PERSON_ID },
    ...(args.image ? { primaryImageOfPage: args.image } : {}),
  };
}

/** WebSite node, shared @id across both language branches. */
export function webSiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "Salomé Michaux",
    url: locale === "fr" ? BASE_URL : `${BASE_URL}/en`,
    inLanguage: locale === "fr" ? "fr-BE" : "en-GB",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/** Person node (E-E-A-T author), shared @id across both branches. */
export function personJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Salomé Michaux",
    url: locale === "fr" ? BASE_URL : `${BASE_URL}/en`,
    jobTitle: "Product Consultant & Builder",
    email: "info@salomemichaux.eu",
    worksFor: { "@id": ORGANIZATION_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "fr" ? "Bruxelles" : "Brussels",
      addressCountry: "BE",
    },
    sameAs: ["https://www.linkedin.com/in/salomemichaux/"],
  };
}
