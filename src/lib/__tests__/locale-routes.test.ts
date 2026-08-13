import { describe, expect, it, beforeAll } from "vitest";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import {
  BILINGUAL_ROUTE_PAIRS,
  langFromPath,
  localePath,
  switchLangPath,
  frPathOf,
} from "@/lib/i18n-routes";
import type { Lang } from "@/contexts/LanguageContext";

/** Every URL the router actually serves, read from the route files. */
async function declaredRoutePaths(dir = "src/routes"): Promise<Set<string>> {
  const found = new Set<string>();
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      for (const p of await declaredRoutePaths(full)) found.add(p);
      continue;
    }
    if (!entry.name.endsWith(".tsx") && !entry.name.endsWith(".ts")) continue;
    const src = await readFile(full, "utf8");
    for (const m of src.matchAll(/createFileRoute\(\s*["'`]([^"'`]+)["'`]\s*\)/g)) {
      // "/en/" -> "/en", "/" stays "/"
      const raw = m[1];
      found.add(raw.length > 1 && raw.endsWith("/") ? raw.slice(0, -1) : raw);
    }
  }
  return found;
}

let routes: Set<string>;
const LANGS: Lang[] = ["fr", "en"];

beforeAll(async () => {
  routes = await declaredRoutePaths();
});

describe("locale routes never 404", () => {
  it("declares a route file for every bilingual path", () => {
    for (const [fr, en] of BILINGUAL_ROUTE_PAIRS) {
      expect(routes.has(fr), `no route file serves ${fr}`).toBe(true);
      expect(routes.has(en), `no route file serves ${en}`).toBe(true);
    }
  });

  it("localePath only ever resolves to a declared route", () => {
    const frRoutes = [...routes].filter((p) => langFromPath(p) === "fr");
    for (const path of frRoutes) {
      for (const lang of LANGS) {
        const target = localePath(path, lang) as string;
        expect(routes.has(target), `localePath(${path}, ${lang}) -> ${target} is not a route`).toBe(true);
      }
    }
  });

  it("the language switcher never lands on an undeclared route", () => {
    for (const path of routes) {
      for (const lang of LANGS) {
        const target = switchLangPath(path, lang) as string;
        expect(routes.has(target), `switchLangPath(${path}, ${lang}) -> ${target} is not a route`).toBe(true);
      }
    }
  });

  it("never emits a trailing slash (which would 307)", () => {
    const candidates = [...routes].flatMap((p) =>
      LANGS.flatMap((l) => [localePath(frPathOf(p), l) as string, switchLangPath(p, l) as string]),
    );
    for (const target of candidates) {
      expect(target === "/" || !target.endsWith("/"), `${target} ends with a slash`).toBe(true);
      expect(target.startsWith("/"), `${target} is not an absolute path`).toBe(true);
      expect(target.includes("//"), `${target} contains a double slash`).toBe(false);
    }
  });
});

describe("langFromPath drives <html lang>", () => {
  it("resolves the English branch, with or without a trailing slash", () => {
    for (const p of ["/en", "/en/", "/en/about", "/en/about/"]) {
      expect(langFromPath(p), p).toBe("en");
    }
  });

  it("keeps French everywhere else, including look-alike paths", () => {
    for (const p of ["/", "/a-propos", "/entreprise", "/enfants/x", "/audit-de-process"]) {
      expect(langFromPath(p), p).toBe("fr");
    }
  });
});
