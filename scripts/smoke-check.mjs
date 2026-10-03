import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require(
  process.env.PLAYWRIGHT_MODULE_PATH || "playwright",
);
const baseUrl = process.env.TEST_BASE_URL || "http://localhost:3000";
await mkdir(".checks", { recursive: true });
const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROME_EXECUTABLE_PATH
    ? { executablePath: process.env.CHROME_EXECUTABLE_PATH }
    : {}),
});
try {
  for (const viewport of [
    { width: 1440, height: 1000 },
    { width: 768, height: 1024 },
    { width: 390, height: 844 },
    { width: 320, height: 740 },
  ]) {
    const page = await browser.newPage({ viewport, reducedMotion: "reduce" });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(baseUrl, { waitUntil: "networkidle" });
    assert.equal(response.status(), 200);
    await page.locator("h1").waitFor();
    assert.equal(await page.locator("h1").count(), 1);
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      true,
      `Horizontal overflow at ${viewport.width}px`,
    );
    for (const id of [
      "home",
      "services",
      "discover",
      "about",
      "vehicles",
      "contact",
    ])
      assert.equal(await page.locator(`#${id}`).count(), 1);
    for (const image of await page.locator("img").all()) {
      await image.scrollIntoViewIfNeeded();
      await image.evaluate((element) => element.decode());
    }
    const images = await page
      .locator("img")
      .evaluateAll((elements) =>
        elements.every((image) => image.complete && image.naturalWidth > 0),
      );
    assert.equal(images, true, "Images should load");
    if (viewport.width < 850) {
      await page.getByRole("button", { name: "Open navigation" }).click();
      await page
        .locator("#mobile-navigation")
        .getByRole("link", { name: "Discover Sri Lanka" })
        .click();
      assert.equal(await page.locator("#mobile-navigation").isVisible(), false);
      assert.equal(new URL(page.url()).hash, "#discover");
      await page.getByRole("button", { name: "Open navigation" }).click();
      await page.keyboard.press("Escape");
      assert.equal(await page.locator("#mobile-navigation").isVisible(), false);
    }
    await page.getByLabel("How can we help?").selectOption("Airport drop-off");
    await page.getByLabel("Travel date").fill("2026-11-15");
    await page.getByLabel("Passengers").fill("4");
    await page
      .getByLabel("Where would you like to go?")
      .fill("Tangalle to airport & a stop");
    const whatsapp = new URL(
      await page
        .getByRole("link", { name: "Continue on WhatsApp" })
        .getAttribute("href"),
    );
    assert.equal(whatsapp.hostname, "wa.me");
    assert.equal(whatsapp.pathname, "/94703678956");
    assert.match(whatsapp.searchParams.get("text"), /Airport drop-off/);
    assert.match(
      whatsapp.searchParams.get("text"),
      /Tangalle to airport & a stop/,
    );
    assert.match(whatsapp.searchParams.get("text"), /Passengers: 4/);
    const email = new URL(
      await page
        .getByRole("link", { name: "Prefer email?" })
        .getAttribute("href"),
    );
    assert.equal(email.pathname, "tharushatourssrilanka@gmail.com");
    assert.match(email.searchParams.get("body"), /2026-11-15/);
    await page.locator(".faq-list summary").first().click();
    assert.equal(
      await page.locator(".faq-list details").first().getAttribute("open"),
      "",
    );
    assert.equal(
      await page
        .getByRole("link", { name: "+94 71 853 3408", exact: true })
        .getAttribute("href"),
      "tel:+94718533408",
    );
    assert.deepEqual(errors, [], "No browser runtime errors");
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: `.checks/preview-${viewport.width}.png` });
    for (const section of ["services", "vehicles"]) {
      await page
        .locator(`#${section}`)
        .screenshot({ path: `.checks/${section}-${viewport.width}.png` });
    }
    await page.screenshot({
      path: `.checks/home-${viewport.width}.png`,
      fullPage: true,
    });
    console.log(
      `PASS ${viewport.width}px: navigation, images, contact URLs, FAQ, no overflow or runtime errors`,
    );
    await page.close();
  }
} finally {
  await browser.close();
}
