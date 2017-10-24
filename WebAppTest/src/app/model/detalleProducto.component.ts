import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { Location } from '@angular/common';
import { Producto } from '../../model/producto/producto';
import { ProductoService } from '../../services/producto.service';
import { Utils } from '../../services/utils';

@Component({
    selector: 'detalle-producto',
    templateUrl: './../views/detalleProducto.component.html',
    styleUrls: ['./../views/detalleProducto.component.css'],
    providers: [ProductoService]
})
export class DetalleProductoComponent implements OnInit{
    private detalleCats: Producto[];
    @Input() productoSeleccionado: Producto;
    @Input('titulo') titulo: string;
    @Input() detalleProds: Producto[];
    @Input() random: number;
    constructor(private productoService: ProductoService,
                private route: ActivatedRoute,
                private location: Location
        ) {

    }
    ngOnInit(): void {
        /*
          Selecciona desde las categorias.
        */
        this.route.params.forEach(
            (params: Params) =>
            { 
                if (params['id'] != "all") {
                    /*
                      Categoría concreta
                    */
                    let id = +params['id'];
                    this.productoService.getProducto(id).then(
                        producto => this.productoSeleccionado = producto
                    );
                    this.productoService.getProductosPorCategoria(id).subscribe(pcats =>
                    { this.detalleCats = pcats;}
                    );
                } else {
                    /*
                      Todas las categorias (responsive)
                    */
                    this.detalleProds = this.productoService.getProductos();
                    this.random = Utils.getRandomInt(1,8);
                }
                
            }
        );
    }

    isAtras() {
        this.location.back();
    }

}
