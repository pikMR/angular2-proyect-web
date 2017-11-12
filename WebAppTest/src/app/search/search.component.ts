import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto/producto';
import { ProductoService } from '../../services/producto.service'; // no usado pero se usara
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { Router } from '@angular/router';
@Component({
    selector: 'busquedas',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    providers: [ProductoService] // necesario para saber que servicios se usarán.
})
export class SearchComponent implements OnInit {
    apiValues: string[] = [];
    buscaSelected: CompleterItem;

    ngOnInit(): void {
        /*this._httpService.get('/api/values').subscribe(values => {
            this.apiValues = values.json() as string[];
        });*/
    }

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
    constructor(private router: Router,private completerService: CompleterService, private productoService: ProductoService) {
        this.dataService = null;
        this.buscaSelected = null;
    }

    /*
  Buscador
*/

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
