const assert = require('chai').assert;

class checkoutComplete {

    /*
    * To display the success message
    */

    async SuccessMessage() {
        const successMessage = await $(`.complete-header`).getText();
        assert.equal(successMessage, "THANK YOU FOR YOUR ORDER");
    };
}
module.exports = new checkoutComplete();