class loginPage{
        
    get username(){
        return $("//input[@name='user-name']");
    }

    get password(){
        return $("//input[@name='password']");
    }
    get loginButton(){
        return $(`#login-button`);
    }

    /*
    * To provide URL
    */

    openURL() {
        return browser.url("/");
    }

    /*
    * To provide user credentials
    */


    async login(username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();

    }

}
module.exports = new loginPage();