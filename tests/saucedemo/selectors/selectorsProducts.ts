export namespace ElementSelectorsProducts {
    export const productLocator = (module: string) => `//div[@class="inventory_item_name " and text()="${module}"]`;
    export const addToCartButton = 'button[id="add-to-cart"]';
    export const cartButton = 'div[id="shopping_cart_container"]';
    export const checkoutButton = 'button[id="checkout"]';
    export const firstNameInput = 'input[name="firstName"]';
    export const lastNameInput = 'input[name="lastName"]';
    export const postalCodeInput = 'input[name="postalCode"]';
    export const continueButton = 'input[name="continue"]';
    export const finishButton = 'button[name="finish"]';
    export const thankYouOrder = '#checkout_complete_container > h2';
}