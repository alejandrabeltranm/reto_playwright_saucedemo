import { Page } from '@playwright/test';
import { LoginPage } from './ui.interface.login';
import { ElementSelectorsProducts } from '../selectors/selectorsProducts';
import { information } from '../data/information.data';

export class CreateProductPage extends LoginPage {
    constructor(page: Page) {
        super(page); 
    }

    async selectRandomInformation(): Promise<{ firstName: string, lastName: string, postalCode: string }> {
        const randomBuyerInfo = information[Math.floor(Math.random() * information.length)];
        const { firstName, lastName, postalCode } = randomBuyerInfo;
        
        return { firstName, lastName, postalCode };
    }

    async buttonAddToCart(): Promise<void> {
        await this.page.click(ElementSelectorsProducts.addToCartButton);
    }

    async buttonCart(): Promise<void> {
        await this.page.click(ElementSelectorsProducts.cartButton);
    }

    async buttonCheckout(): Promise<void> {
        await this.page.click(ElementSelectorsProducts.checkoutButton);
    }

    async enterFirstName(firstName: string): Promise<void> {
        await this.page.fill(ElementSelectorsProducts.firstNameInput, firstName);
    }

    async enterLastName(lastName: string): Promise<void> {
        await this.page.fill(ElementSelectorsProducts.lastNameInput, lastName);
    }

    async enterpostalCode(postalCode: string): Promise<void> {
        await this.page.fill(ElementSelectorsProducts.postalCodeInput, postalCode);
    }

    async buttonContinue(): Promise<void> {
        await this.page.click(ElementSelectorsProducts.continueButton);
    }

    async buttonFinish(): Promise<void> {
        await this.page.click(ElementSelectorsProducts.finishButton);
    }

    async selectProduct(product: string): Promise<void> {
        const productLocator = ElementSelectorsProducts.productLocator(product);
        await this.page.locator(productLocator).click();
        await this.buttonAddToCart();
        await this.buttonCart();
    }

    async buysProduct(): Promise<void> {
        const { firstName, lastName, postalCode } = await this.selectRandomInformation();
    
        await this.buttonCheckout();
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterpostalCode(postalCode);
        await this.buttonContinue();
        await this.buttonFinish();
    }
}
