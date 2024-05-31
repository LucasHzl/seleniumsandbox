const { Builder, By, until, WebElementCondition, Key } = require('selenium-webdriver');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
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
            await emailField.sendKeys(process.env.emailSimplon);
            await emailField.sendKeys(Key.TAB);

            await driver.sleep(1000);
            let activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys(process.env.passwordSimplon);
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

        let renderedButton = await driver.wait(until.elementLocated(By.xpath(`//*[@href="/workspaces"]`)), 5000);
        if (renderedButton) {
            await renderedButton.click();
            await driver.sleep(5000);
        } else {
            console.log('Bouton non trouvé');
        }

        let sortingButton = await driver.wait(until.elementLocated(By.css('button[title="Briefs - Tri ascendant actif"]')), 5000);
        if (sortingButton) {
            await sortingButton.click();
            await driver.sleep(5000);
        } else {
            console.log('Bouton non trouvé');
        }

        let seleniumSandboxButton = await driver.wait(until.elementLocated(By.xpath('//li[contains(@class, "sc-2781a8cc-0")]//h2[text()="Selenium Sandbox"]')), 5000);
        if (seleniumSandboxButton) {
            await seleniumSandboxButton.click();
            await driver.sleep(5000);
        } else {
            console.log('Bouton non trouvé');
        }

        let submitRenderButton = await driver.wait(until.elementLocated(By.xpath('//button[contains(.,"Soumettre un rendu")]')), 5000);
        if (submitRenderButton) {
            await submitRenderButton.click();
            await driver.sleep(5000);
        } else {
            console.log('Bouton non trouvé');
        }

        let urlInput = await driver.findElement(By.css(".sc-12218616-0.eneWwx"));
        if (urlInput) {
            await driver.sleep(5000);
            await urlInput.sendKeys('https://github.com/LucasHzl/seleniumsandbox');
        } else {
            console.log('Champ d\'entrée non trouvé');
        }

        let addUrl = await driver.findElement(By.xpath('//*[@id="tabpanel-0"]/div/div/button'));
        if (addUrl) {
            await driver.sleep(5000);
            await addUrl.click();
        } else {
            console.log('Bouton non trouvé');
        }

        let addMessage = await driver.findElement(By.xpath('//*[@id="message"]'));
        if (addMessage) {
            await driver.sleep(5000);
            await urlInput.sendKeys('oui');
        } else {
            console.log('Champ d\'entrée non trouvé');
        }

        let sendSubmit = await driver.findElement(By.xpath('//*[@id="__next"]/div[3]/div/div/div/div[2]/div/form/div[3]/button[2]'));
        if (sendSubmit) {
            await driver.sleep(5000);
            await sendSubmit.click();
        } else {
            console.log('Champ d\'entrée non trouvé');
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
