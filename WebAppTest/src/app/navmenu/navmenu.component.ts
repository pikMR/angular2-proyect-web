import { Component, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../model/producto/producto';
import { Categoria } from '../../model/categoria/categoria';
import { Utils } from '../../services/utils';
import { ProductoService } from '../../services/producto.service'; // no usado pero se usara
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css'],
    providers: [ProductoService] 
})
export class NavMenuComponent{
    esMovil = false; // transición entre movil y desktop
    rerender = false;
    buscaSelected: CompleterItem;
    public icategoria: Categoria[] = [];

    constructor(private router: Router, private cdRef: ChangeDetectorRef, private completerService: CompleterService, private productoService: ProductoService) {
        if (Utils.esMobil())
            this.esMovil = true;
        this.dataService = null;
        this.buscaSelected = null;
        if (this.icategoria.length == 0) {
            this.icategoria = productoService.getCategorias("ico");
        }
    }


    /**
     Permitirá recargar el componente
     */
    doRerender() {
        this.rerender = true;
        this.cdRef.detectChanges();
        this.rerender = false;
    }

    public items2: string[] = ['Oferta \u00danica',
        'Oferta Especial 1', 'Oferta Especial 2'];
    public items3: string[] = ['1',
        '100', '50'];

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

    selectCategoria = (item: Categoria) => {
        console.log("-selectCategoria=>" + '/categoria/' + item.id_categoria);
        this.router.navigate(['/categoria/'+item.id_categoria]);
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
        this.router.navigate(['/categoria/all']);
        if (this.esMovil)
            this.doRerender();
    }

    /*
      Buscador
    */
    protected dataService: CompleterData;

    public cargarBuscador(event) {
        if (this.dataService == null) {
           this.dataService = this.completerService.local(this.productoService.getProductosNames(), 'Nombre', 'Nombre');
        }
    }

    moveToProducto(selected: CompleterItem) {
        if (selected) {
            //console.dir(selected);
            this.buscaSelected = selected;
        }
        //console.log("Cat: " + this.buscaSelected.originalObject["CategoriaPrincipal"]);
        this.router.navigate(['/detalle/' + this.buscaSelected.originalObject["Id"]]);
        //this.router.navigate(['/detalle/'+item.id_producto]);
    }
}
