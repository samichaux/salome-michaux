import type { Lang } from "@/contexts/LanguageContext";

/**
 * FR <-> EN route correspondence.
 *
 * French URLs live at the root and never move. English pages live under /en
 * with English slugs, and are created one at a time as their content is
 * written — so most French pages have no mirror yet.
 */
const FR_TO_EN: Record<string, string> = {
  "/": "/en",
  "/a-propos": "/en/about",
};

const EN_TO_FR: Record<string, string> = Object.fromEntries(
  Object.entries(FR_TO_EN).map(([fr, en]) => [en, fr]),
);

/**
 * Every route that exists in both languages, as `[frPath, enPath]`.
 * Single source of truth for the hreflang reciprocity check
 * (`bun run check:hreflang`) and its unit test.
 */
export const BILINGUAL_ROUTE_PAIRS: ReadonlyArray<readonly [string, string]> =
  Object.entries(FR_TO_EN).map(([fr, en]) => [fr, en] as const);

/** Strips a trailing slash so no internal link ever triggers a 307. */
function normalize(path: string): string {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path || "/";
}

export function langFromPath(path: string): Lang {
  const p = normalize(path);
  return p === "/en" || p.startsWith("/en/") ? "en" : "fr";
}

/** The French equivalent of any known path (identity for French paths). */
export function frPathOf(path: string): string {
  const p = normalize(path);
  if (langFromPath(p) === "fr") return p;
  return EN_TO_FR[p] ?? "/";
}

/** True when `path` has a counterpart in `lang`. */
export function enPathOf(path: string): string | undefined {
  return FR_TO_EN[frPathOf(path)];
}

/** True when `path` has a counterpart in `lang`. */
export function hasMirror(path: string, lang: Lang): boolean {
  const fr = frPathOf(path);
  if (lang === "fr") return fr in FR_TO_EN || fr === "/";
  return fr in FR_TO_EN;
}

/**
 * Destination for an internal link, expressed as a French path, rendered in
 * `lang`. English visitors on a page that has no English mirror yet keep the
 * French version — real French content beats an empty placeholder.
 *
 * Returns `any` on purpose: TanStack's `to` prop is a literal union and these
 * paths are resolved at runtime.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function localePath(path: string, lang: Lang): any {
  const fr = normalize(path);
  if (lang === "fr") return fr;
  return FR_TO_EN[fr] ?? fr;
}

/**
 * Target of the language switcher from the current path. Falls back to the
 * other language's home page when the current page has no counterpart.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function switchLangPath(currentPath: string, target: Lang): any {
  const p = normalize(currentPath);
  if (target === "en") {
    const fr = langFromPath(p) === "fr" ? p : frPathOf(p);
    return FR_TO_EN[fr] ?? "/en";
  }
  return langFromPath(p) === "en" ? (EN_TO_FR[p] ?? "/") : p;
}