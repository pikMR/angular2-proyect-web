import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTOS } from '../../mocks/mock-productos';
import { Producto } from '../../model/producto/producto';
import { Utils } from '../../services/utils';
import { ProductoService } from '../../services/producto.service'; // no usado pero se usara
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css'],
    providers: [ProductoService] 
})
export class NavMenuComponent {
    esMovil = false; // transición entre movil y desktop
    rerender = false;

    constructor(private router: Router, private cdRef: ChangeDetectorRef, private completerService: CompleterService) {
        if (Utils.esMobil())
            this.esMovil = true;

        this.dataService = completerService.local(this.searchData, 'color', 'color');
    }


    /**
     Permitirá recargar el componente
     */
    doRerender() {
        console.log("restartComponent - navMenu");
        this.rerender = true;
        this.cdRef.detectChanges();
        this.rerender = false;
    }

    public items2: string[] = ['Oferta \u00danica',
        'Oferta Especial 1', 'Oferta Especial 2'];
    public items3: string[] = ['1',
        '100', '50'];
    public prods: Producto[] = PRODUCTOS;
   

    /*
        Efecto dropdown desplegable menu.
    */

    public onHidden(): void {
        console.log('Dropdown is hidden');
    }
    public onShown(): void {
        console.log('Dropdown is shown');
    }
    public isOpenChange(): void {
        console.log('Dropdown state is changed');
    }

    /*
        Efecto hamburguer collapsed.
    */

    public isCollapsed: boolean = false;

    public collapsed(event: any): void {
        console.log(event);
    }

    public expanded(event: any): void {
        console.log(event);
    }

    // busqueda de etiquetas #

    public findPos(obj): any {
        var curtop = 0;
        if (obj.offsetParent) {
            do {
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return [curtop];
        }
    }

    /*
      routing
    */

    moveToBuscador() {
        this.router.navigate(['/busqueda']);
        if (this.esMovil)
          this.doRerender();
    }

    selectProducto = (item: Producto) => {
        console.log(item.nombre);
        this.router.navigate(['/detalle/'+item.id_producto]);
    }

    moveToWhatsapp() {
        this.router.navigate(['/whatsapp']);
        if (this.esMovil)
            this.doRerender();
    }

    moveToIndex() {
        this.router.navigate(['/index']);
    }

    goContact() {
        var curtop = 0;
        var obj = document.getElementById("content");
        if (obj == null) {
            window.location.href = "/index#content";
        } else if (obj.offsetParent){
            do {
                curtop += obj.offsetTop;
            } while (obj == obj.offsetParent);
            window.scroll(0, curtop);
        }
    }

    moveToNuestros() {
        this.router.navigate(['/detalle/all']);
        if (this.esMovil)
            this.doRerender();
    }

    /*
      Buscador
    */
    protected dataService: CompleterData;
    protected searchData = [
        { color: 'red', value: '#f00' },
        { color: 'green', value: '#0f0' },
        { color: 'blue', value: '#00f' },
        { color: 'cyan', value: '#0ff' },
        { color: 'magenta', value: '#f0f' },
        { color: 'yellow', value: '#ff0' },
        { color: 'black', value: '#000' }
    ];
    

}
