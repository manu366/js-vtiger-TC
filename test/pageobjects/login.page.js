

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("//input[@name='user_name']");
    }
    async  enterUsername(user_name){
        await (await this.inputUsername).setValue(user_name)
    }

    get inputPassword () {
        return $("//input[@name='user_password']");
    }
    async enterPassword(pass_word){
        await (await this.inputPassword).setValue(pass_word)
    }

    get btnSubmit () {
        return $("//input[@id='submitButton']");
    }
    async loginButton(){
        await (await this.btnSubmit).click()
    }

    async loginToApp (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
