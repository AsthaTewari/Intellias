class LoginPage {
    get usernameField() {
        return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.rn:id/username")');
    }

    get passwordField() {
        return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.rn:id/password")');
    }

    get loginButton() {
        return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.rn:id/login_button")');
    }

    get errorMessage() {
        return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.rn:id/error_message")');
    }

    async enterUsername(username) {
        await this.usernameField.setValue(username);
    }

    async enterPassword(password) {
        await this.passwordField.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return this.errorMessage.getText();
    }
}

module.exports = new LoginPage();
