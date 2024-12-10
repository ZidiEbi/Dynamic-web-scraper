const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Navigate to the search page
  await page.goto("https://www.bbc.com/search?q=parking+UK", {
    waitUntil: "networkidle2", // Wait until all requests have finished
  });

  // Extract search result titles
  const results = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".ssrcss-6arcww-PromoHeadline")).map(
      (el) => el.textContent.trim()
    );
  });

  console.log("Search Results:", results);

  await browser.close();
})();
