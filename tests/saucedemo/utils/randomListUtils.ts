import { Page, ElementHandle } from '@playwright/test';

export namespace RandomListUtils {
    export async function getRandomElement(page: Page, locator: string): Promise<ElementHandle> {
        const elements = await page.$$(locator);
        if (elements.length === 0) {
            throw new Error(`No items found with the locator: ${locator}`);
        }
        const randomIndex = Math.floor(Math.random() * elements.length);
        return elements[randomIndex];
    }
}