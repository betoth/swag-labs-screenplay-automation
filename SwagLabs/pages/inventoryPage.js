class InventoryPage {
    constructor(page) {
        this.page = page;
        this.cartBadge = '.shopping_cart_badge';
        this.inventoryItems = '.inventory_item';
        this.addToCartButton = '.btn_inventory';
    }

    async getItemsCount() {
        return this.page.locator(this.inventoryItems).count();
    }

    async addItemToCart(index) {
        const buttons = await this.page.locator(this.addToCartButton);
        await buttons.nth(index).click();
    }

    async getCartItemCount() {
        return this.page.textContent(this.cartBadge);
    }
}

module.exports = { InventoryPage };
