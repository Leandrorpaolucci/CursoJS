const {Builder, Browser} = require('selenium-webdriver');

(async function helloSelenium() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  await driver.get('https://www.google.com.br');

  await driver.quit();
})();