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

        let query = 'airbnb';
        await searchBox.sendKeys(query, Key.RETURN);


        await driver.wait(until.titleContains(query), 5000);
        let title = await driver.getTitle();
        assert(title.includes(query));

        let airbnbLink = await driver.wait(until.elementLocated(By.css('.LC20lb.MBeuO.DKV0Md')), 5000);
        if (airbnbLink) {
            await airbnbLink.click();
        } else {
            console.log('Lien pas trouvé');
        }

        let destinationField = await driver.wait(until.elementLocated(By.id('bigsearch-query-location-input')), 5000);
        if (destinationField) {
            await destinationField.sendKeys('bahamas');
        } else {
            console.log('Champs non trouvé');
        }

        let selectArrivalField = await driver.wait(until.elementLocated(By.css('.cz9siyu.atm_l8_srw7uq.atm_ks_15vqwwr.atm_mk_h2mmj6.atm_vv_1q9ccgz.atm_vy_1osqo2v.atm_wq_kb7nvz.dir.dir-ltr')), 10000);
        if (selectArrivalField) {
            await selectArrivalField.click();
        } else {
            console.log('Champs ouverture du calendrier non trouvé');
        }

        let selectArrivalDate = await driver.wait(until.elementLocated(By.css('._nuyjria.notranslate')), 5000);
        if (selectArrivalDate) {
            await selectArrivalDate.click();
        } else {
            console.log('Champs de sélection date arrivée non trouvé');
        }

        let selectDepartureDate = await driver.wait(until.elementLocated(By.css('._1swsa24a.notranslate')), 10000);
        if (selectDepartureDate) {
            await selectDepartureDate.click();
        } else {
            console.log('Champs de sélection date départ non trouvé');
        }

        let selectTravelersField = await driver.wait(until.elementLocated(By.css('.cz9siyu.atm_l8_srw7uq.atm_ks_15vqwwr.atm_mk_h2mmj6.atm_vv_1q9ccgz.atm_vy_1osqo2v.atm_wq_kb7nvz.dir.dir-ltr')), 10000);
        if (selectTravelersField) {
            await selectTravelersField.click();
        } else {
            console.log('Champs de sélection des voyageurs non trouvé');
        }

        let searchButton = await driver.wait(until.elementLocated(By.css('.[data-testid="structured-search-input-search-button"]')), 5000);
        if (searchButton) {
            await searchButton.click();
        } else {
            console.log('Bouton de recherche non trouvé');
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
