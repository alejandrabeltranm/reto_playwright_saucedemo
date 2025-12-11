import { Page } from '@playwright/test';
import { InicioSesionPage } from './ui.interface.inicioSesion';
import { ElementSelectorsClientes } from '../selectors/selectorsClientes';
import { clientesData, ciudadesColombia } from '../data/clientes.data';
import { RandomUtils } from '../utils/randomSingleDigit';

export class ClientesPage extends InicioSesionPage {
    listaInputs: import('@playwright/test').Locator;

    constructor(page: Page) { 
        super(page);
        this.listaInputs = page.locator(ElementSelectorsClientes.camposTexto); 
    }

    private getRandomInfo() {
        const randomBuyerInfo = clientesData[Math.floor(Math.random() * clientesData.length)];
        return {
            identificacion: randomBuyerInfo.identificacion,
            nombres: randomBuyerInfo.nombres,
            apellidos: randomBuyerInfo.apellidos,
        };
    }

    private getRandomDireccion() {
        return RandomUtils.getRandomAddress();
    }

    private getRandomEmail() {
        return RandomUtils.getRandomEmail();
    }

    private getRandomCiudad() {
        const randomIndex = RandomUtils.getRandomNumber(0, ciudadesColombia.length - 1);
        return ciudadesColombia[randomIndex];
    }

    async datosBasicos(): Promise<void> {
        const { identificacion, nombres, apellidos } = this.getRandomInfo();
        const randomCiudad = this.getRandomCiudad();
        const randomDireccion = this.getRandomDireccion();
        const randomEmail = this.getRandomEmail();

        await this.page.fill(ElementSelectorsClientes.identificacionInput, identificacion);
        await this.page.fill(ElementSelectorsClientes.codigoLabel, RandomUtils.getRandomDigitString(RandomUtils.getRandomNumber(1, 3)));
        await this.listaInputs.nth(1).fill(RandomUtils.getRandomDigitString(RandomUtils.getRandomNumber(1, 3)));
        await this.listaInputs.nth(2).fill(nombres);
        await this.listaInputs.nth(3).fill(apellidos);
        await this.page.click(ElementSelectorsClientes.ciudad);
        await this.page.fill(ElementSelectorsClientes.ciudadInput, randomCiudad);
        await this.page.click(ElementSelectorsClientes.ciudadOption);
        await this.page.fill(ElementSelectorsClientes.indicativoInput, RandomUtils.getRandomDigitString(RandomUtils.getRandomNumber(1, 3)));
        await this.page.fill(ElementSelectorsClientes.numTelefonoInput, RandomUtils.getRandomPhoneNumber());
        await this.page.fill(ElementSelectorsClientes.extensionInput, RandomUtils.getRandomDigitString(RandomUtils.getRandomNumber(1, 3)));
        await this.listaInputs.nth(6).fill(randomDireccion);
        await this.listaInputs.nth(9).fill(randomEmail);
        await this.listaInputs.nth(10).fill(RandomUtils.getRandomDigitString(RandomUtils.getRandomNumber(1, 3)));
        await this.listaInputs.nth(11).fill(RandomUtils.getRandomPhoneNumber());
        await this.listaInputs.nth(12).fill(RandomUtils.getRandomDigitString(RandomUtils.getRandomNumber(9, 9)));
    }

    async guardarTercero(): Promise<void> {
        await this.page.click(ElementSelectorsClientes.guardarTerceroButton);
    }
}
