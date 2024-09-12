const { BrowseTheWeb } = require('../../abilities/BrowseTheWeb');

class CartItemCount {
    async performAs(actor) {
        const browse = actor.abilityTo(BrowseTheWeb);
        return browse.page.textContent('.shopping_cart_badge');
    }
}

module.exports = { CartItemCount };
