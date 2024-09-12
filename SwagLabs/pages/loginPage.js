class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
    }

    async navigate() {
        await this.page.goto(`${process.env.BASE_URL}`);
    }

    async enterUsername(username) {
        await this.page.fill(this.usernameInput, username);
    }

    async enterPassword(password) {
        await this.page.fill(this.passwordInput, password);
    }

    async submitLogin() {
        await this.page.click(this.loginButton);
    }
}

module.exports = { LoginPage };
