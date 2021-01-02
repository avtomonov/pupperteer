const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  const proxy = 'https://proxybot.io/api/v1/ICVgKrhHfBPjxMUvrZbFAIdT0vA3?geolocation_code=ru&url=';
  const url = 'https://www.tourdom.ru/hotline/novyy-god/kto-v-turizme-ded-moroz-i-snegurochka/';
  const pageUrl = proxy + url;

  await page.goto(pageUrl);
}

run();
