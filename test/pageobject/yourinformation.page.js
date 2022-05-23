class yourInfoPage {

    get firstName(){
        return $(`#first-name`);
    }

    get lastName(){
        return $(`#last-name`);
    }

    get postalCode(){
        return $("//*[@id='postal-code']");
    }


    /*
    * To provide personal details
    */

    async personalInfo(firstname,lastname,postalcode) {

        await this.firstName.setValue(firstname);
        await this.lastName.setValue(lastname);
        await this.postalCode.setValue(postalcode);

    };

    /*
    * To click Continue button
    */

    async clickContinueButton() {

        const continueButton = await $(`#continue`).click();
    };
}
module.exports = new yourInfoPage();