const { EnterCredentials } = require('../../interactions/EnterCredentials');
const { Click } = require('../../interactions/Click');  // Certifique-se de importar Click corretamente
const { LoginPage } = require('../../pages/loginPage');
const { BrowseTheWeb } = require('../../abilities/BrowseTheWeb');

class LoginTask {
    static perform() {
        return new LoginTask();
    }

    async performAs(actor) {
        const browse = actor.abilityTo(BrowseTheWeb);
        const loginPage = new LoginPage(browse.page);
        const { username, password } = actor.credentials;

        await loginPage.navigate();
        await actor.attemptsTo(
            EnterCredentials.with(username, password),
            Click.on(loginPage.loginButton)  // Usar Click para clicar no botão de login
        );
    }
}

module.exports = { LoginTask };
