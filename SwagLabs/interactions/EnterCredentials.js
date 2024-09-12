const { BrowseTheWeb } = require('../abilities/BrowseTheWeb');

class EnterCredentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    static with(username, password) {
        return new EnterCredentials(username, password);
    }

    async performAs(actor) {
        const browse = actor.abilityTo(BrowseTheWeb);
        await browse.page.fill('#user-name', this.username);
        await browse.page.fill('#password', this.password);
    }
}

module.exports = { EnterCredentials };
