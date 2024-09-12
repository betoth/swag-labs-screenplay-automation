const { BrowseTheWeb } = require('../../abilities/BrowseTheWeb');  // Adicionar a importação correta

class CartItemCount {
    async performAs(actor) {
        const browse = actor.abilityTo(BrowseTheWeb);
        return browse.page.textContent('.shopping_cart_badge');
    }
}

module.exports = { CartItemCount };
