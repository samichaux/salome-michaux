/**
 * Post-publish hreflang / canonical audit.
 *
 * Fetches the raw HTML of every bilingual route on a live host and verifies:
 *   - the page answers 200 without a redirect (no trailing-slash 307)
 *   - <link rel="canonical"> is self-referencing on the project domain
 *   - hreflang alternates are reciprocal between FR and EN
 *   - x-default points at the French version
 *   - the URL is listed in /sitemap.xml
 *
 * Usage:  bun run check:hreflang [https://host]
 * Default host: https://salomemichaux.eu (production).
 */
import { BILINGUAL_ROUTE_PAIRS } from "../src/lib/i18n-routes";

const CANONICAL_ORIGIN = "https://salomemichaux.eu";
const host = (process.argv[2] ?? CANONICAL_ORIGIN).replace(/\/$/, "");

type Head = { status: number; redirected: boolean; canonical?: string; alt: Record<string, string> };

const failures: string[] = [];
const fail = (msg: string) => failures.push(msg);

async function readHead(path: string): Promise<Head> {
  const res = await fetch(`${host}${path}`, { redirect: "manual" });
  const redirected = res.status >= 300 && res.status < 400;
  const html = redirected ? "" : await res.text();
  const alt: Record<string, string> = {};
  let canonical: string | undefined;
  for (const tag of html.match(/<link[^>]*>/gi) ?? []) {
    const rel = /rel=["']([^"']+)["']/i.exec(tag)?.[1];
    const href = /href=["']([^"']+)["']/i.exec(tag)?.[1];
    if (!rel || !href) continue;
    if (rel === "canonical") canonical = href;
    if (rel === "alternate") {
      const hl = /hreflang=["']([^"']+)["']/i.exec(tag)?.[1];
      if (hl) alt[hl.toLowerCase()] = href;
    }
  }
  return { status: res.status, redirected, canonical, alt };
}

const sitemap = await fetch(`${host}/sitemap.xml`)
  .then((r) => (r.ok ? r.text() : ""))
  .catch(() => "");
if (!sitemap) fail("sitemap.xml is unreachable or not 200");

for (const [fr, en] of BILINGUAL_ROUTE_PAIRS) {
  const [frHead, enHead] = await Promise.all([readHead(fr), readHead(en)]);

  for (const [path, head] of [
    [fr, frHead],
    [en, enHead],
  ] as const) {
    const label = `${path}`;
    if (head.redirected) fail(`${label}: redirects (${head.status}) — internal links must be final URLs`);
    else if (head.status !== 200) fail(`${label}: HTTP ${head.status}`);
    if (head.redirected || head.status !== 200) continue;

    const expectedCanonical = `${CANONICAL_ORIGIN}${path}`;
    if (head.canonical !== expectedCanonical)
      fail(`${label}: canonical is ${head.canonical ?? "missing"}, expected ${expectedCanonical}`);
    if (head.alt["fr"] !== `${CANONICAL_ORIGIN}${fr}`)
      fail(`${label}: hreflang="fr" is ${head.alt["fr"] ?? "missing"}, expected ${CANONICAL_ORIGIN}${fr}`);
    if (head.alt["en"] !== `${CANONICAL_ORIGIN}${en}`)
      fail(`${label}: hreflang="en" is ${head.alt["en"] ?? "missing"}, expected ${CANONICAL_ORIGIN}${en}`);
    if (head.alt["x-default"] !== `${CANONICAL_ORIGIN}${fr}`)
      fail(`${label}: hreflang="x-default" is ${head.alt["x-default"] ?? "missing"}, expected ${CANONICAL_ORIGIN}${fr}`);

    const loc = path === "/" ? `${CANONICAL_ORIGIN}/` : `${CANONICAL_ORIGIN}${path}`;
    if (sitemap && !sitemap.includes(`<loc>${loc}</loc>`)) fail(`${label}: missing from sitemap.xml (${loc})`);
  }
}

const checked = BILINGUAL_ROUTE_PAIRS.length;
if (failures.length) {
  console.error(`hreflang audit FAILED on ${host} (${checked} bilingual pairs checked):`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`hreflang audit passed on ${host}: ${checked} bilingual pairs, canonicals and alternates reciprocal.`);
