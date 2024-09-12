const { test, expect } = require('@playwright/test');
const { Actor } = require('../../SwagLabs/actors/actor');
const { users } = require('../../SwagLabs/actors/users');
const { BrowseTheWeb } = require('../../SwagLabs/abilities/BrowseTheWeb');
const { LoginTask } = require('../../SwagLabs/tasks/login/loginTask');
const { AddToCartTask } = require('../../SwagLabs/tasks/inventory/addToCartTask');
const { CartItemCount } = require('../../SwagLabs/questions/inventory/CartItemCount');

test.describe('Inventory Tests', () => {
    test('Standard user can add items to cart', async ({ page }) => {
        const actor = new Actor(users.standard, page).whoCan(BrowseTheWeb.using(page));

        await actor.attemptsTo(
            LoginTask.perform(),
            AddToCartTask.addItem(1)
        );

        const itemCount = await new CartItemCount().performAs(actor);
        expect(itemCount).toBe('1');
    });
});
