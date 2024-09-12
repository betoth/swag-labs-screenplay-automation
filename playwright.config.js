require('dotenv').config();

const { test } = require('@playwright/test');

module.exports = {
    testDir: './tests',
    retries: 0,
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        baseURL: process.env.BASE_URL,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'retain-on-failure',
    },
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }]
    ],
    // Hooks para capturar métricas após cada teste
    hooks: {
        // Capturar métricas após cada teste
        afterEach: async ({ page }, testInfo) => {
            if (page) {
                const metrics = await page.evaluate(() => JSON.stringify(window.performance));
                console.log(`Performance Metrics for ${testInfo.title}:`, metrics);
            }
        }
    }
};
