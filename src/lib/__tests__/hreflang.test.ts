import { describe, expect, it } from "vitest";
import buildSeoHead from "@/components/Seo";
import { BILINGUAL_ROUTE_PAIRS, frPathOf, enPathOf, switchLangPath } from "@/lib/i18n-routes";

const BASE = "https://salomemichaux.eu";

function head(path: string, locale: "fr" | "en") {
  return buildSeoHead({
    title: "t",
    description: "d",
    path,
    locale,
  });
}

function linkOf(
  result: ReturnType<typeof buildSeoHead>,
  rel: string,
  hrefLang?: string,
) {
  return result.links.find(
    (l) => l.rel === rel && (hrefLang === undefined || l.hrefLang === hrefLang),
  )?.href;
}

describe("hreflang / canonical for bilingual routes", () => {
  for (const [fr, en] of BILINGUAL_ROUTE_PAIRS) {
    it(`${fr} <-> ${en} is reciprocal and self-canonical`, () => {
      const frHead = head(fr, "fr");
      const enHead = head(en, "en");

      // Canonical is always self-referencing on the project domain.
      expect(linkOf(frHead, "canonical")).toBe(`${BASE}${fr}`);
      expect(linkOf(enHead, "canonical")).toBe(`${BASE}${en}`);

      // Each side points at the other, and both agree on x-default (FR).
      expect(linkOf(frHead, "alternate", "en")).toBe(`${BASE}${en}`);
      expect(linkOf(frHead, "alternate", "fr")).toBe(`${BASE}${fr}`);
      expect(linkOf(enHead, "alternate", "fr")).toBe(`${BASE}${fr}`);
      expect(linkOf(enHead, "alternate", "en")).toBe(`${BASE}${en}`);
      expect(linkOf(frHead, "alternate", "x-default")).toBe(`${BASE}${fr}`);
      expect(linkOf(enHead, "alternate", "x-default")).toBe(`${BASE}${fr}`);

      // Route map itself stays consistent both ways.
      expect(frPathOf(en)).toBe(fr);
      expect(enPathOf(fr)).toBe(en);
      expect(switchLangPath(fr, "en")).toBe(en);
      expect(switchLangPath(en, "fr")).toBe(fr);

      // No trailing slashes: internal links must never trigger a redirect.
      for (const path of [fr, en]) {
        expect(path === "/" || !path.endsWith("/")).toBe(true);
      }
    });
  }

  it("never advertises an English alternate for a page without a mirror", () => {
    const orphan = head("/audit-de-process", "fr");
    expect(linkOf(orphan, "alternate", "en")).toBeUndefined();
    expect(linkOf(orphan, "alternate", "x-default")).toBe(`${BASE}/audit-de-process`);
  });

  it("lists every bilingual URL in the sitemap", async () => {
    const fs = await import("node:fs/promises");
    const xml = await fs.readFile("public/sitemap.xml", "utf8");
    for (const [fr, en] of BILINGUAL_ROUTE_PAIRS) {
      for (const path of [fr, en]) {
        const loc = path === "/" ? `${BASE}/` : `${BASE}${path}`;
        expect(xml, `sitemap missing ${loc}`).toContain(`<loc>${loc}</loc>`);
      }
    }
  });
});
