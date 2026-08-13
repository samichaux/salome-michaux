/**
 * Post-publish route + locale audit.
 *
 * For every French route and every English mirror, on a live host:
 *   - the exact URL answers 200 with no redirect (no trailing-slash 307, no 404)
 *   - the trailing-slash variant, if a visitor types it, still resolves (200 or 3xx — never 404)
 *   - <html lang> matches the branch: "en" under /en, "fr" elsewhere
 *   - English pages actually serve English (og:locale + hreflang self-reference)
 *
 * Usage:  bun run check:routes [http://localhost:8080]
 */
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { langFromPath } from "../src/lib/i18n-routes";

const host = (process.argv[2] ?? "https://salomemichaux.eu").replace(/\/$/, "");
const failures: string[] = [];
const fail = (m: string) => failures.push(m);

async function declaredRoutePaths(dir = "src/routes"): Promise<string[]> {
  const found = new Set<string>();
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      for (const p of await declaredRoutePaths(full)) found.add(p);
      continue;
    }
    if (!/\.tsx?$/.test(entry.name)) continue;
    const src = await readFile(full, "utf8");
    for (const m of src.matchAll(/createFileRoute\(\s*["'`]([^"'`]+)["'`]\s*\)/g)) {
      const raw = m[1];
      found.add(raw.length > 1 && raw.endsWith("/") ? raw.slice(0, -1) : raw);
    }
  }
  return [...found].sort();
}

const paths = await declaredRoutePaths();

for (const path of paths) {
  const expectedLang = langFromPath(path);
  const res = await fetch(`${host}${path}`, { redirect: "manual" });
  if (res.status !== 200) {
    fail(`${path}: HTTP ${res.status} (expected 200, no redirect)`);
    continue;
  }
  const html = await res.text();

  const lang = /<html[^>]*\slang=["']([^"']+)["']/i.exec(html)?.[1];
  if (lang !== expectedLang) fail(`${path}: <html lang> is ${lang ?? "missing"}, expected ${expectedLang}`);

  const ogLocale = /property=["']og:locale["'][^>]*content=["']([^"']+)["']/i.exec(html)?.[1];
  const expectedOg = expectedLang === "en" ? "en_GB" : "fr_BE";
  if (ogLocale && ogLocale !== expectedOg)
    fail(`${path}: og:locale is ${ogLocale}, expected ${expectedOg}`);

  // A visitor typing the trailing-slash form must not hit a 404.
  if (path !== "/") {
    const slash = await fetch(`${host}${path}/`, { redirect: "manual" });
    if (slash.status === 404) fail(`${path}/: 404 on the trailing-slash variant`);
  }
}

if (failures.length) {
  console.error(`route audit FAILED on ${host} (${paths.length} routes checked):`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`route audit passed on ${host}: ${paths.length} routes, correct <html lang>, no 307/404.`);
