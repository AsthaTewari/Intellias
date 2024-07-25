class HomePage {
    get homeScreenElement() {
        return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.rn:id/home_title")');
    }

    async isHomeScreenDisplayed() {
        return this.homeScreenElement.isDisplayed();
    }
}

module.exports = new HomePage();
