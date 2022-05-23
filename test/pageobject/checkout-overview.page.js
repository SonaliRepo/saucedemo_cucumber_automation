class checkoutOverviewPage{

    /*
    * To click Finish button
    */

    async clickFinishButton() {
        const finishButton = await $(`#finish`).click();
    };

}
module.exports = new checkoutOverviewPage();