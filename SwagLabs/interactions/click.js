const { BrowseTheWeb } = require('../abilities/BrowseTheWeb');

class Click {
    constructor(selector) {
        this.selector = selector;
    }

    static on(selector) {
        return new Click(selector);
    }

    async performAs(actor) {
        const browse = actor.abilityTo(BrowseTheWeb);
        return browse.page.click(this.selector);  // Realiza o clique no seletor especificado
    }
}

module.exports = { Click };
