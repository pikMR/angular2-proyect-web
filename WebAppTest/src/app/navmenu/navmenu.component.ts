import { Component, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../model/producto/producto';
import { Categoria } from '../../model/categoria/categoria';
import { Utils } from '../../services/utils';
import { ProductoService } from '../../services/producto.service'; // no usado pero se usara
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { Observable } from "rxjs/Observable";
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

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

    constructor(private router: Router, private cdRef: ChangeDetectorRef, private completerService: CompleterService, private productoService: ProductoService, public modal: Modal) {
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

    public items2: string[] = ['Pechuga Pollo',
        'Cabeza de Cordero', 'Costillar'];
    public items3: string[] = ['3',
        '4', '5'];

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
        this.router.navigate(['/categoria/' + item.id_categoria]);
        //this.router.navigate(['categoria'], { queryParams: { id: item.id_categoria }, skipLocationChange: true });
    }

    moveToWhatsapp() {
       // this.router.navigate(['/whatsapp']);

        if (this.esMovil)
            this.doRerender();

        const dialogRef =  this.modal.alert()
            .showClose(true)
            .title('SERVICIO EXPRÉS')
            .body(`
            <div class="w3-display-container w3-row ">
            <div><h4 class="w3-display-container w3-round-small w3-col">Con este servicio, usted puede hacer su pedido por Whatsapp al número</h4></div><div class="w3-col">  <h4><a id="numcopy" class="w3-tag w3-xlarge w3-padding w3-red" style="transform:rotate(-20deg)">647-50-81-86</a></h4><h4></div><div class="w3-col"><h4> y se lo llevamos en ese mismo día.</h4></div>
            <div class="w3-container w3-margin-bottom w3-panel w3-leftbar w3-border-blue w3-pale-blue w3-col">En Carnicería Felípe queremos ofrecerle el mejor servicio y queremos facilitarle al máximo sus compras. No dude en comunicanos sus inquietudes e intentaremos facilitarle al máximo su pedido.</div>
            <div class="w3-col"><h3 class="w3-panel w3-pale-red w3-leftbar w3-border-red w3-hover-opacity">
<a href="tel:+647508186">LLAMAR YA - AGREGAR A WHATSAPP</a></h3></div></div>
`)
            .open();

        //dialogRef.then(result => alert(`The result is: ${result}`));

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

    /*copy() {
        var copyText = document.getElementById("numcopy");
        copyText[0].select();
        document.execCommand("Copy");
    }*/
}
