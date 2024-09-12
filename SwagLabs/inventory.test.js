const { test, expect } = require('@playwright/test');
const { Actor } = require('./actors/actor');
const { users } = require('./actors/users');  // Importar os usuários predefinidos
const { BrowseTheWeb } = require('./abilities/BrowseTheWeb');
const { LoginTask } = require('./tasks/loginTask');
const { AddToCartTask } = require('./tasks/addToCartTask');
const { CartItemCount } = require('./questions/CartItemCount');
const { ErrorMessage } = require('./questions/ErrorMessage');

test.describe('Swag Labs Screenplay Automation', () => {

    test('Standard user can login and add items to cart', async ({ page }) => {
        const actor = new Actor(users.standard, page)  // Criar ator com usuário padrão
            .whoCan(BrowseTheWeb.using(page));

        await actor.attemptsTo(
            LoginTask.perform(),
            AddToCartTask.addItem(1)
        );

        const itemCount = await new CartItemCount().performAs(actor);
        expect(itemCount).toBe('1');
    });

    test('Locked out user cannot login', async ({ page }) => {
        const actor = new Actor(users.lockedOut, page)  // Criar ator com usuário bloqueado
            .whoCan(BrowseTheWeb.using(page));

        await actor.attemptsTo(
            LoginTask.perform()
        );

        const errorMessage = await new ErrorMessage().performAs(actor);
        expect(errorMessage).toContain('Epic sadface: Sorry, this user has been locked out.');
    });
});
