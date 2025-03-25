const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('Google Search Test', () => {
    it('should open Google and verify title', async () => {
        await browser.url('https://www.google.com');
        const title = await browser.getTitle();
        console.log('Page title is: ' + title);
        expect(title).toBe('Google');
    });
});

describe('Search Functionality Test', () => {
    it('should allow user to search and get results', async () => {
        await browser.url('https://www.google.com');
        const searchBox = await $('[name="q"]');
        await searchBox.setValue('WebdriverIO');
        await browser.keys('Enter');
        await browser.pause(3000);

        const title = await browser.getTitle();
        console.log('Search page title is: ' + title);
        expect(title).toContain('WebdriverIO');
    });
});

describe('Invalid Search Test', () => {
    it('should show no results for random search term', async () => {
        await browser.url('https://www.google.com');
        const searchBox = await $('[name="q"]');
        await searchBox.setValue('asfasdfasfasf');
        await browser.keys('Enter');
        await browser.pause(3000);

        const noResultsText = await $('#noResults');
        expect(noResultsText).toBeDisplayed();
    });
});

