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
			console.log('Bouton tout accepter pas trouvée');
		}

		let searchBox = await driver.findElement(By.name('q'));

		let query = 'bmw 330ci e46 phase 2 pack m2';
		await searchBox.sendKeys(query, Key.RETURN);


		await driver.wait(until.titleContains(query), 10000);
		let title = await driver.getTitle();
		assert(title.includes(query));

		console.log("test ok");

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
