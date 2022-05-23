const expect = require('chai').expect;

class cartPage{

    async cartItem() {
        const itemDetails = await $(`.cart_item`).getText();
        expect(itemDetails).not.be.empty;
    };

    async clickCheckOutButton() {
        const btnCheckOut = await $(`#checkout`).click();
    };

}
module.exports = new cartPage();