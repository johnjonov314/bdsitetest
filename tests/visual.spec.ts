import { test, expect } from "@playwright/test";

const sizes = [
  { width: 375, height: 667 },
  { width: 390, height: 844 },
  { width: 412, height: 915 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 }
];

test.describe("visual scene smoke", () => {
  for (const size of sizes) {
    test(`home scenes ${size.width}x${size.height}`, async ({ page }) => {
      await page.setViewportSize(size);
      await page.addInitScript(() => localStorage.setItem("bd-cookie-accepted", "1"));
      await page.goto("/?qa=1&lite=1", { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(800);

      const overflow = await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth);
      expect(overflow).toBeTruthy();

      await expect(page.locator("body")).toHaveScreenshot(`home-${size.width}x${size.height}.png`, { fullPage: true });
    });
  }

  test("assistant open close", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.addInitScript(() => localStorage.setItem("bd-cookie-accepted", "1"));
    await page.goto("/ai-agents?lite=1", { waitUntil: "domcontentloaded" });
    await page.click("button:has-text('Получить AI-план')");
    await expect(page.locator("text=AI-помощник")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator("text=AI-помощник")).not.toBeVisible();
  });
});
