import { nameProducts } from '../data/products.data';

export namespace ProductUtils {
    export function getRandomProductName(): string {
        const randomIndex = Math.floor(Math.random() * nameProducts.length);
        const randomProduct = nameProducts[randomIndex].product;
        const randomNumber = Math.floor(Math.random() * 1000);
        return `${randomProduct}${randomNumber}`;
    }
}