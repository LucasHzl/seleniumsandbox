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

        let query = 'github signin';
        await searchBox.sendKeys(query, Key.RETURN);


        await driver.wait(until.titleContains(query), 5000);
        let title = await driver.getTitle();
        assert(title.includes(query));

        let githubSignInLink = await driver.wait(until.elementLocated(By.css('.LC20lb.MBeuO.DKV0Md')), 5000);
        if (githubSignInLink) {
            await githubSignInLink.click();
        } else {
            console.log('Lien pas trouvé');
        }

        let signInPageTitle = driver.wait(until.titleIs('Sign in to GitHub'), 5000);
        if (signInPageTitle) {
            let title = await driver.getTitle()
            console.log('Titre de la page:', title);

            let expectedTitle = 'Sign in to GitHub · GitHub';
            if (title == expectedTitle) {
                console.log('Le titre obtenu est le titre attendu.');
            } else {
                console.log('Les deux titres ne correspondent pas');
            }
        }

        let usernameField = await driver.wait(until.elementLocated(By.id('login_field')), 5000);
        if (usernameField) {
            await usernameField.sendKeys('bonjour');
        } else {
            console.log('Champs non trouvé');
        }

        let passwordField = await driver.wait(until.elementLocated(By.id('password')), 5000);
        if (passwordField) {
            await passwordField.sendKeys('jesuisletest');
        } else {
            console.log('Champs non trouvé');
        }

        let signInButton = await driver.wait(until.elementLocated(By.css('.btn.btn-primary.btn-block.js-sign-in-button')), 5000);
        if (signInButton) {
            await signInButton.click();
        } else {
            console.log('Bouton connexion non trouvé');
        }


        let errorMessageElement = await driver.findElement(By.xpath("//div[contains(@class, 'flash-error')]"));
        if (errorMessageElement) {
            let errorMessage = await errorMessageElement.getText();
            assert.strictEqual(errorMessage.trim(), 'Incorrect username or password.', 'Le message d\'erreur ne correspond pas.');
            console.log('Le test est réussi : le message d\'erreur est présent avec le texte attendu.');
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
