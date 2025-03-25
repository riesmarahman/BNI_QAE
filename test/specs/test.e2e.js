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

describe('Invalid Search Test', () => {
    it('should show no results for random search term', async () => {
        await browser.url('https://www.google.com');
        const searchBox = await $('[name="q"]');
        await searchBox.setValue('Gambar pemandangan');
        await browser.keys('Enter');
        await browser.pause(2000); // Tunggu beberapa detik untuk hasil muncul

        const noResultsText = await $('#noResults');
        expect(noResultsText).toBeDisplayed();
    });
});
