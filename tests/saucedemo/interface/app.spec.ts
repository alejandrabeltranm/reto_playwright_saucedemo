import { test, expect } from '@playwright/test';
import { user, userLocked } from '../data/users.data';
import { nameProducts} from '../data/products.data';
import { TestSetup } from '../hooks/testSetup';
import { ElementSelectorsLogin } from '../selectors/selectorsLogin';
import { ElementSelectorsProducts } from '../selectors/selectorsProducts';
import { messages } from '../config/config'; 

test('Login Locked', async ({ page }) => {
    const setup = new TestSetup(page);
    
    await setup.login.goto();
    await setup.login.login(userLocked.username, user.password);

    const errorMessageText = await page.locator(ElementSelectorsLogin.errorMessage).textContent();
    expect(errorMessageText).toBe('Epic sadface: Sorry, this user has been locked out.');

    const message = await page.locator(ElementSelectorsLogin.errorMessage).textContent();
    expect(message).toBe(messages.loginError);
});


test('Product purchased', async ({ page }) => {
    const setup = new TestSetup(page);

    await setup.login.goto();
    await setup.productCreate.login(user.username, user.password);

    const selectedProduct = nameProducts.find(product => product.name === 'product1');

    if (selectedProduct) {
        await setup.productCreate.selectProduct(selectedProduct.product);
        
        await setup.productCreate.buysProduct();
    } else {
        console.error('Product not found!!');
    }

    const message = await page.locator(ElementSelectorsProducts.thankYouOrder).textContent();
    expect(message).toBe(messages.thankYouOrder);
});
