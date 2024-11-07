import { Page } from '@playwright/test';
import { config } from '../config/config'; 
import { ElementSelectorsLogin } from '../selectors/selectorsLogin';

export class LoginPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(): Promise<void> {
        await this.page.goto(config.baseUrl);
    }

    async enterUsername(username: string): Promise<void> {
        await this.page.fill(ElementSelectorsLogin.usernameInput, username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.page.fill(ElementSelectorsLogin.passwordInput, password);
    }

    async buttonSignIn(): Promise<void> {
        await this.page.click(ElementSelectorsLogin.loginButton);
    }

    async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.buttonSignIn();
    }
}