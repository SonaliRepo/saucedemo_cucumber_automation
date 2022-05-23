Feature: End-to-end test for purchasing costliest and cheapest product from Saucedemo


    Description: User should be able to login to Saucedemo and purchase the costliest and cheapest product
    
    @e2eproductspurchase
    Scenario: Authorized user is able to purchase costliest and cheapest products
        Given I am on the login page
        When I login with <Username> and <Password>
        Then I should see the Saucedemo Products page
        When I sort the product by price from high to low
        And I add the costliest and the cheapest product in the cart
        And I open cart
        Then I should see two products in the cart
        When I check-out from the cart
        And I provide the <FirstName>, <LastName> and <PostalCode> in Personal Information page
        And I click on Continue button
        And I click on Finish button
        Then I should see the purchase confirmation message

        Examples:
           |Username |Password |FirstName |LastName |PostalCode |
           |standard_user |secret_sauce |Dave      |Alloy    |ES1234     |

           
    @pending
    Scenario: Authorized user is getting error message while keeping First name field blank in Personal Information page
        Given I am on the login page
        When I login with <Username> and <Password>
        Then I should see the Saucedemo Products page        #When I sort the product by price from high to low
        And I add the costliest and the cheapest product in the cart
        And I open cart
        Then I should see two products in the cart
        When I check-out from the cart
        And I provide the <LastName> and <PostalCode> in Personal Information page
        And I click on Continue button
        Then I should see error message in Checkout:Your Information page

        Examples:
            | Username      | Password     | LastName | PostalCode |
            | standard_user | secret_sauce | Alloy    | ES1234     |

        
