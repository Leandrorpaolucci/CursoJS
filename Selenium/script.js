const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const fs = require("fs");

(async function whatsapp() {
  // Caminho para o diretório onde você deseja salvar o perfil do Chrome
  const profileDir = "C:/Users/leandror/AppData/Local/Google/Chrome/User Data/Selenium JavaScript";

  // Criação das opções do Chrome
  let chromeOptions = new chrome.Options();

  // Configuração do perfil
  chromeOptions.addArguments(`user-data-dir=${profileDir}`);

  // Inicialização do navegador com as opções personalizadas
  let navegador = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  // Exemplo de abertura de uma página
  await navegador.get("https://web.whatsapp.com/");
  

  let bolinha_verde = await  navegador.findElement(By.xpath('//div[@class="_2H6nH"]'))
  bolinha_verde.click();


})();



