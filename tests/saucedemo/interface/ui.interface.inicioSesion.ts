import { Page } from '@playwright/test';
import { config } from '../config/config';
import { ElementSelectorsInicioSesion } from '../selectors/selectorsInicioSesion';

export class InicioSesionPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(): Promise<void> {
        await this.page.goto(config.baseUrl);
    }

    async enterCorreoElectronico(correoElectronico: string): Promise<void> {
        await this.page.fill(ElementSelectorsInicioSesion.correoElectronicoInput, correoElectronico);
    }

    async enterContrasena(contrasena: string): Promise<void> {
        await this.page.fill(ElementSelectorsInicioSesion.contrasenaInput, contrasena);
    }

    async buttonContinuar(): Promise<void> {
        await this.page.click(ElementSelectorsInicioSesion.continuarButton);
    }

    async inicioSesion(correoElectronico: string, contrasena: string): Promise<void> {
        await this.enterCorreoElectronico(correoElectronico);
        await this.enterContrasena(contrasena);
        await this.buttonContinuar();
    }
}