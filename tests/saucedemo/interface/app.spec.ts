import { test, expect } from '@playwright/test';
import { credenciales } from '../data/credenciales.data';
import { TestSetup } from '../hooks/testSetup';

test('Login exitoso', async ({ page }) => {
    const setup = new TestSetup(page);

    await setup.inicioSesion.goto();
    await setup.inicioSesion.inicioSesion(credenciales.correo, credenciales.contrasena);

    await page.waitForTimeout(5000);
    const currentUrl = page.url();
    
    expect(currentUrl).not.toMatch(/.*login/);
    expect(currentUrl).toMatch(/.*siigo\.com/);
});

test('Creación de un cliente', async ({ page }) => {
    test.setTimeout(60000);
    const setup = new TestSetup(page);
    
    await setup.inicioSesion.goto();
    await setup.inicioSesion.inicioSesion(credenciales.correo, credenciales.contrasena);
    await setup.inicio.crearClientes();
    await setup.clientes.datosBasicos();
    await setup.clientes.guardarTercero();
    await expect(page.locator('text=Tercero guardado exitosamente')).toBeVisible();
    await page.waitForTimeout(5000);
});
