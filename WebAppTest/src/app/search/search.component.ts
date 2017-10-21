import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto/producto';
import { ProductoService } from '../../services/producto.service'; // no usado pero se usara
import { CompleterService, CompleterData } from 'ng2-completer';
@Component({
    selector: 'busquedas',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    providers: [ProductoService] // necesario para saber que servicios se usarán.
})
export class SearchComponent implements OnInit {
    apiValues: string[] = [];
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
    constructor(private completerService: CompleterService) {
        this.dataService = completerService.local(this.searchData, 'color', 'color');
    }
}
