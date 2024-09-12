const { BrowseTheWeb } = require('../../abilities/BrowseTheWeb');  // Usar sempre 'SwagLabs' com o 'S' maiúsculo

class ErrorMessage {
    async performAs(actor) {
        const browse = actor.abilityTo(BrowseTheWeb);
        return browse.page.textContent('.error-message-container');
    }
}

module.exports = { ErrorMessage };
