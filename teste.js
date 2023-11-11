const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch({headless: false, slowMo: 200});
  const page = await browser.newPage();
  await page.goto('https://www.eventim.com.br/artist/slash/');
  console.log("Teste");
  await page.getByTitle('SLASH - BH').click();
  await page.goto('https://www.eventim.com.br/event/slash-arena-hall-17771255/');
  await page.locator('.btn-group > button:nth-child(4)').first().click();
});