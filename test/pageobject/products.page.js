class productsPage{
        
    get dropdownSelectContainer(){
        return $("//select[@class='product_sort_container']");
    }

    get cart() {
        return $('.shopping_cart_link');
    }

    /*
    * To get the browser title
    */

    async browserTitle() {

        await expect(browser).toHaveTitle("Swag Labs");
    }

    /*
    * To sort the filter from Price-High to Low
    */  

    async drdwnSelectContainer() {

        await this.dropdownSelectContainer.selectByVisibleText("Price (high to low)");
    }

    /*
    * To select the first and last items from the list
    */  

    async addFirstAndLastProduct() {
        const productList= $(`.inventory_list`);
        await productList.$$(`button`)[0].click();
        await productList.$$(`button`)[5].click();

    }

    /*
    * To click the cart
    */  

    async clickCart() {
        this.cart.click();
    };

}
module.exports = new productsPage();