const { Builder, By, until } = require('selenium-webdriver');
require('dotenv').config();

const { By, Key, Builder, WebElementCondition, until } = require("selenium-webdriver");
require("chromedriver");
const assert = require("assert");

(async function test_function() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get('https://www.google.com');

        let acceptButton = await driver.wait(until.elementLocated(By.css('.QS5gu.sy4vM')), 5000);
        if (acceptButton) {
            await acceptButton.click();
        } else {
            console.log('Bouton tout accepter pas trouvé');
        }

        let searchBox = await driver.findElement(By.name('q'));

        let query = 'simplonline';
        await searchBox.sendKeys(query, Key.RETURN);


        await driver.wait(until.titleContains(query), 5000);
        let title = await driver.getTitle();
        assert(title.includes(query));

        let simplonlineLink = await driver.wait(until.elementLocated(By.css('.LC20lb.MBeuO.DKV0Md')), 5000);
        if (simplonlineLink) {
            await simplonlineLink.click();
        } else {
            console.log('Lien pas trouvé');
        }

        let simplonlineAcceptCookies = await driver.wait(until.elementLocated(By.css('.sc-3243846d-0.eZuIYT')), 5000);
        if (simplonlineAcceptCookies) {
            await simplonlineAcceptCookies.click();
        } else {
            console.log('Lien pas trouvé');
        }

        let emailField = await driver.wait(until.elementLocated(By.css('.sc-12218616-0.eneWwx')), 10000);
        if (emailField) {
            await emailField.sendKeys('bonjour@exemple.com');
            await emailField.sendKeys(Key.TAB);

            await driver.sleep(1000);  
            let activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys('jesuisletest');
            await driver.sleep(5000);
        } else {
            console.log('Champs non trouvé');
        }

        let signInButton = await driver.wait(until.elementLocated(By.xpath("//button[text()='Se connecter']")), 10000);
        if (signInButton) {
            await signInButton.click();
            await driver.sleep(5000);
        } else {
            console.log('Bouton connexion non trouvé');
        }

        let errorMessageElement = await driver.findElement(By.css('.sc-6a4c5dd9-0.hpuCSy.sc-7916b41a-0.jqHZDg'));
        if (errorMessageElement) {
            let errorMessage = await errorMessageElement.getText();
            console.log('Le test est réussi : le message d\'erreur est présent avec le texte attendu : ' + errorMessage);
        } else {
            console.log('Le message d\'erreur n\'a pas été trouvé.');
        }



    } catch (e) {
        console.log(e);

    } finally {
        await driver.quit();

        /*
    setInterval(function(){
        driver.quit();
    }, 10000);
        */
    }
}())
