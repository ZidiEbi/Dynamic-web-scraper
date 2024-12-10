const axios = require("axios");
const cheerio = require("cheerio");
// const puppeteer = require('puppeteer')

axios
  .get("https://www.bbc.com/search?q=parking+UK")
  .then((response) => {
    const $ = cheerio.load(response.data);
    // const title = $("h1").text();
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching the page:", error);
  });
