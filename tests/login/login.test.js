const { test, expect } = require('@playwright/test');
const { Actor } = require('../../SwagLabs/actors/actor');
const { users } = require('../../SwagLabs/actors/users');
const { BrowseTheWeb } = require('../../SwagLabs/abilities/BrowseTheWeb');
const { LoginTask } = require('../../SwagLabs/tasks/login/loginTask');
const { ErrorMessage } = require('../../SwagLabs/questions/login/ErrorMessage');

test.describe('Login Tests', () => {
    test('Standard user can login', async ({ page }) => {
        const actor = new Actor(users.standard, page).whoCan(BrowseTheWeb.using(page));

        await actor.attemptsTo(LoginTask.perform());

        const url = await page.url();
        expect(url).toBe('https://www.saucedemo.com/inventory.html');
    });

    test('Locked out user cannot login', async ({ page }) => {
        const actor = new Actor(users.lockedOut, page).whoCan(BrowseTheWeb.using(page));

        await actor.attemptsTo(LoginTask.perform());

        const errorMessage = await new ErrorMessage().performAs(actor);
        expect(errorMessage).toContain('Epic sadface: Sorry, this user has been locked out.');
    });
});
