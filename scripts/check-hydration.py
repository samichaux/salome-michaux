"""Hydration regression check for the bilingual branch.

For /en and /en/about (and their French counterparts):
  - the page hydrates with no console error and no React hydration warning
  - <html lang> stays correct AFTER hydration (server and client agree)
  - the rendered text is in the expected language
  - the language switcher navigates without a 404

Usage:  python3 scripts/check-hydration.py [http://localhost:8080]
"""
import asyncio
import re
import sys

from playwright.async_api import async_playwright

HOST = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8080").rstrip("/")

# path -> (expected <html lang>, a phrase that must appear in that language)
CASES = {
    "/en": ("en", "What I do"),
    "/en/about": ("en", "About"),
    "/": ("fr", "Digitalisation des processus"),
    "/a-propos": ("fr", "propos"),
}

BAD_CONSOLE = re.compile(
    r"hydrat|did not match|server rendered|Warning:.*lang|Minified React error",
    re.I,
)

failures = []


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1280, "height": 1800})
        for path, (expected_lang, phrase) in CASES.items():
            page = await context.new_page()
            noise = []
            page.on("console", lambda m: noise.append(f"{m.type}: {m.text}"))
            page.on("pageerror", lambda e: noise.append(f"pageerror: {e}"))

            res = await page.goto(f"{HOST}{path}", wait_until="domcontentloaded")
            if res is None or res.status != 200:
                failures.append(f"{path}: HTTP {res.status if res else 'no response'}")
                await page.close()
                continue
            # Let hydration finish so mismatches have a chance to surface.
            await page.wait_for_timeout(2500)

            lang = await page.evaluate("document.documentElement.lang")
            if lang != expected_lang:
                failures.append(f"{path}: <html lang> is {lang!r} after hydration, expected {expected_lang!r}")

            body = await page.inner_text("body")
            if phrase.lower() not in body.lower():
                failures.append(f"{path}: expected {expected_lang} copy containing {phrase!r}")

            for line in noise:
                # Sub-resource fetch noise (dev HMR pings, favicon races) is not a
                # hydration regression — only app errors and hydration warnings are.
                if "Failed to load resource" in line:
                    continue
                if line.startswith("pageerror") or line.startswith("error:") or BAD_CONSOLE.search(line):
                    failures.append(f"{path}: console -> {line[:200]}")

            # The language switcher must resolve, never 404.
            toggle = page.locator("a[hreflang], a[data-lang-switch]").first
            if await toggle.count():
                href = await toggle.get_attribute("href")
                if href:
                    r = await page.request.get(f"{HOST}{href}")
                    if r.status != 200:
                        failures.append(f"{path}: language switcher -> {href} returned {r.status}")
            await page.close()
        await browser.close()


asyncio.run(main())

if failures:
    print(f"hydration audit FAILED on {HOST}:")
    for f in failures:
        print(f"  - {f}")
    sys.exit(1)
print(f"hydration audit passed on {HOST}: {len(CASES)} routes hydrate cleanly with the right <html lang>.")
