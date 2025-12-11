import { InicioSesionPage } from '../interface/ui.interface.inicioSesion';
import { InicioPage } from '../interface/ui.interface.inicio';
import { ClientesPage } from '../interface/ui.interface.clientes'; 

export class TestSetup {
    inicioSesion: InicioSesionPage;
    inicio: InicioPage;
    clientes: ClientesPage;

    constructor(page: any) {
        this.inicioSesion = new InicioSesionPage(page);
        this.inicio = new InicioPage(page);
        this.clientes = new ClientesPage(page);
    }
}
  