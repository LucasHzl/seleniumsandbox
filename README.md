SeleniumSandbox

Installation et démarrage

a. Créer un dossier SeleniumSandbox et l'ouvrir dans VSCode

b. Dans le terminal, initialiser le projet avec npn init -y (initialisation par défaut)

c. Installer Selenium : npm install --save selenium-webdriver chromedriver geckodriver

d. Dans le fichier package.json, au niveau des dépendances, ajouter : "mocha": "10.4.0", relancer npm install si besoin. Et ignorer node_modules dans un .gitignore.

e. Créer un dossier tests et dans ce dossier.

f. Mettre ce projet sur GitHub et faire un commit et push au minimum pour chaque exercice (avec le nom de l'exercice dans le message de commit).

Squelette de fonction de test :

const {By, Key, Builder, WebElementCondition, until} = require("selenium-webdriver");
const assert = require("assert");

(async function test_function(){
    let driver = await new Builder().forBrowser("chrome").build();

		try {
			// custom code goes here
			
		} catch(e) {
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

Exercices

Exercice 1 :

Dans le dossier tests, créer un fichier test_google.js. Créer une fonction test_google() à partir du squelette de fonction de test, puis suivre les étapes :

a. Ouvrir le site de Google

b. Écrire l'instruction permettant de taper une requête de votre choix dans Google et de lancer la recherche en tapant sur la touche "Entrée"

c. Lancer le test avec la commande mocha test_google.js ou npx mocha test_google.js (en étant dans le dossier tests).

Hint: Doc de Selenium

Exercice 2 :

Créer un nouveau fichier, nommé test_github.js. Le but sera de tester le login qui échoue.

En vous inspirant du code vu précédemment, créer une fonction et suivez les étapes :

a. Ouvrir le site de GitHub

b. Cliquer sur l'élément qui permet de se connecter

c. Afficher le titre de cette nouvelle page dans la console

d. En utilisant assert, vérifier que le titre obtenu est bien le titre attendu.

e. Inscrire un login et un mot de passe (erronés) dans les champs correspondants (en utilisant des sélecteurs CSS), et cliquer ou taper sur Entrée.

f. Vérifier la présence d'un message d'erreur sur la page. Si le message s'affiche, le test est réussi, utiliser assert pour tester cela.

g. Lancer le test

Hint: Page suivante dans la doc de Selenium

Exercice 3 :

a. Modifier le code précédent pour lancer le test en mode responsive sur mobile.

b. Modifier le code précédent pour lancer le test sur un autre navigateur (ex : Firefox).

Exercice 4 :

Créer un nouveau fichier, nommé test_airbnb.js.

Sans être guidé dans le détail des étapes, réaliser une recherche logement sur AirBnb en remplissant une destination, des dates, et un nombre de voyageurs. Varier les thématiques pour obtenir des résultats différents.

Hint: GitHub de Selenium

Exercice 5 :

Créer un nouveau fichier, nommé test_simplonline.js.

a. Aller sur le site de Simplonline

b. Tester des login et mdp erronés. Le test est réussi si l'utilisateur n'arrive pas à se connecter.

c. Créer une nouvelle fonction ou modifier la fonction existante pour se connecter avec succès sur Simplonline avec votre compte. Attention à mettre vos identifiant et mdp dans un fichier ignoré par GitHub.

d. Aller sur le brief de test pour poster le rendu avec le lien GitHub de vos tests !

Ceci est un test de bout-en-bout (end-to-end) :)

Ressources :

Mocha : https://mochajs.org/
Selenium : https://www.selenium.dev/documentation/
GitHub de Selenium : https://github.com/SeleniumHQ/seleniumhq.github.io/tree/trunk/examples
Pour aller plus loin :

Cypress vs Selenium : https://ittestgroup.com/conseils-actualites/cypress-vs-selenium-differences-et-similarites-2023/
Cypress vs Selenium : https://geekflare.com/fr/cypress-vs-selenium/
Tuto sur Cypress : https://grafikart.fr/tutoriels/cypress-993
