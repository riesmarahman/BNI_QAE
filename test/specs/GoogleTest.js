const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('Google Test', () => {
    it('should open Google', async () => {
        await browser.url('https://www.google.com');
        await browser.pause(3000);

        const title = await browser.getTitle();
        console.log('Page title is: ' + title);
        if (title === 'Google') {
            console.log('Test Passed');
        } else {
            console.log('Test Failed');
        }

    });
});