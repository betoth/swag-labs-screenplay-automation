const { Click } = require('../../interactions/Click');
const { InventoryPage } = require('../../pages/inventoryPage');
const { BrowseTheWeb } = require('../../abilities/BrowseTheWeb');

class AddToCartTask {
    constructor(itemIndex) {
        this.itemIndex = itemIndex;
    }

    static addItem(itemIndex) {
        return new AddToCartTask(itemIndex);
    }

    async performAs(actor) {
        const browse = actor.abilityTo(BrowseTheWeb);
        const inventoryPage = new InventoryPage(browse.page);

        await actor.attemptsTo(
            Click.on(`.inventory_item:nth-child(${this.itemIndex}) .btn_inventory`)
        );
    }
}

module.exports = { AddToCartTask };
