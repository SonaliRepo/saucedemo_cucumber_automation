const { Given, When, Then} =require("@wdio/cucumber-framework");
const loginpage = require('../../pageobject/login.page');
const productpage = require('../../pageobject/products.page');
const cartpage = require('../../pageobject/cart.page');
const yourinfopage = require('../../pageobject/yourinformation.page');
const checkoutpage = require("../../pageobject/checkout-overview.page");
const completepage = require("../../pageobject/checkout-complete.page");


Given(/^I am on the login page$/, async ()=>{

    await loginpage.openURL(); 
    await browser.maximizeWindow();

});

When(/^I login with (.+) and (.+)$/, async (username, password) => {

    await loginpage.login(username, password);

});

Then(/^I should see the Saucedemo Products page$/, async () => {

    await productpage.browserTitle();

});

When(/^I sort the product by price from high to low$/, async () => {

    await productpage.drdwnSelectContainer();
    await browser.pause(3000);


});

When(/^I add the costliest and the cheapest product in the cart$/, async () => {

    await productpage.addFirstAndLastProduct();


});

When(/^I open cart$/, async () => {

    await productpage.clickCart();


});

Then(/^I should see two products in the cart$/, async () => {

    try {
        await cartpage.cartItem();
    } catch (err) {
        console.log(`<< The type of err: ${typeof err}`);
        console.log(`<< The name property: ${err.name}`);
        console.log(`<< The message property: ${err.message}`);
    }

});

When(/^I check-out from the cart$/, async () => {

    await cartpage.clickCheckOutButton();

});

When(/^I provide the (.*), (.*) and (.*) in Personal Information page$/, async (firstname, lastname, postalcode) => {

    await yourinfopage.personalInfo(firstname, lastname, postalcode);
    
});

When(/^I click on Continue button$/, async () => {

    await yourinfopage.clickContinueButton(); 

});

When(/^I click on Finish button$/, async () => {

    await checkoutpage.clickFinishButton();
    await completepage.SuccessMessage();
    

});

Then(/^I should see the purchase confirmation message$/, async () => {
  
    await completepage.SuccessMessage();
    
});






