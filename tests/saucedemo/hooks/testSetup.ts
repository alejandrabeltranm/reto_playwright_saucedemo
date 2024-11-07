import { CreateProductPage } from '../interface/ui.interface.product';
import { LoginPage } from '../interface/ui.interface.login';

export class TestSetup {
    login: LoginPage;
    productCreate: CreateProductPage;
    selectProduct: any;
    buysProduct: any;
    randomProductName: string;
    resultRandomProductName: string;
    filePath: string;

    constructor(page: any) {
        this.productCreate = new CreateProductPage(page);
        this.login = new LoginPage(page);
    }
}
