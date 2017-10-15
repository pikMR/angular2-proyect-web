import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
    selector: 'especiales',
    templateUrl: './special.component.html',
    styleUrls: ['./special.component.css'],
    providers: [ProductoService] // necesario para saber que servicios se usarán.
})
export class SpecialComponent implements OnInit{
    public productos: Producto[];
    constructor(private productoService: ProductoService) {
        //this.name = 'Sam';
    }

    ngOnInit(): void {
        // la argumentación de ser especial sería estar entre el 1 y el 5.
        this.productoService.getProductosPromiseDelay().then(
            (productos) => this.productos = productos.splice(1, 5)
        )
    }

}
