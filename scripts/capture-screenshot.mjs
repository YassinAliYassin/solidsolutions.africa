import { chromium } from 'playwright';

// Use localhost — 127.0.0.1 triggers the HTTPS redirect in index.html
const url = process.argv[2] ?? 'http://localhost:4173/';
const out = process.argv[3] ?? 'public/images/homepage-screenshot.png';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForSelector('#about', { timeout: 30000 });
await page.evaluate(() => {
  document.querySelectorAll('*').forEach((el) => {
    el.style.animation = 'none';
    el.style.transition = 'none';
  });
  window.scrollTo(0, 0);
});
await page.waitForTimeout(1000);
await page.screenshot({ path: out, fullPage: false });
await browser.close();
console.log(`Screenshot saved to ${out}`);