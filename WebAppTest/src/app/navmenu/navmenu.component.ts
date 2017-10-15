import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTOS } from '../../mocks/mock-productos';
import { Producto } from '../../model/producto/producto';
import { Utils } from '../../services/utils';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    esMovil = false;
    rerender = false;
    constructor(private router: Router, private cdRef: ChangeDetectorRef) {
        if (Utils.esMobil())
            this.esMovil = true;
        //esMovil = Utils.
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

    public findPos(obj): any {
        var curtop = 0;
        if (obj.offsetParent) {
            do {
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return [curtop];
        }
    }

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

}
