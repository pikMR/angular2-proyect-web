import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
    selector: 'busquedas',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    providers: [ProductoService] // necesario para saber que servicios se usarán.
})
export class SearchComponent implements OnInit {
    constructor() { }
    apiValues: string[] = [];
    ngOnInit(): void {
        /*this._httpService.get('/api/values').subscribe(values => {
            this.apiValues = values.json() as string[];
        });*/
    }
}
