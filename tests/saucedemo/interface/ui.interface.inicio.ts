import { Page } from '@playwright/test';
import { InicioSesionPage } from './ui.interface.inicioSesion';
import { ElementSelectorsHome } from '../selectors/selectorsInicio';
import { MODULE_NAMES, CREAR_OPTIONS } from '../data/modulos.data';

export class InicioPage extends InicioSesionPage {
    constructor(page: Page) { super(page); }

    async buttonAddCrear(): Promise<void> {
        await this.page.waitForSelector(ElementSelectorsHome.crearButton, { state: 'visible' });
        const buttons = await this.page.locator(ElementSelectorsHome.crearButton).all();
        for (const button of buttons) {
            if ((await button.textContent())?.includes(MODULE_NAMES.CREAR)) {
                await button.click();
                break;
            }
        }
    }

    async buttonAddClientes(): Promise<void> {
        await this.page.waitForSelector(ElementSelectorsHome.clientesButton, { state: 'visible' });
        const buttons = await this.page.locator(ElementSelectorsHome.clientesButton).all();
        for (const button of buttons) {
            const textContent = await button.textContent();
            if (textContent?.includes(CREAR_OPTIONS.CLIENTES) || textContent?.toLowerCase().includes(CREAR_OPTIONS.CLIENTES.toLowerCase())) {
                await button.click();
                break;
            }
        }
    }

    async crearClientes(): Promise<void> {
        await this.buttonAddCrear();
        await this.buttonAddClientes();
    }
}
