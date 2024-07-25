const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../page-objects/login.page');
const HomePage = require('../page-objects/home.page');
const { expect } = require('chai');

Given('I launch the app', async () => {
    await driver.launchApp();
});

When('I enter username {string}', async (username) => {
    await LoginPage.enterUsername(username);
});

When('I enter password {string}', async (password) => {
    await LoginPage.enterPassword(password);
});

When('I click on the login button', async () => {
    await LoginPage.clickLoginButton();
});

Then('I should see the home screen', async () => {
    expect(await HomePage.isHomeScreenDisplayed()).to.be.true;
});
