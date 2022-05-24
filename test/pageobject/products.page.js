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
        
         try{
        const productList= $(`.inventory_list`);
        const product = await productList.$$(`button`);
        let len =await product.length;
        await product[0].click();
        await product[len-1].click();
        
        }catch (err) {

            throw Error(`Failure due t - [${err.name}:${err.message}]`);
        }
    }

    /*
    * To click the cart
    */  

    async clickCart() {
        this.cart.click();
    };

}
module.exports = new productsPage();
