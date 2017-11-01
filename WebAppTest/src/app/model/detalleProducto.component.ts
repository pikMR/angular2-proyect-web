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
    @Input() detalleIndividual: Producto;
    @Input() productoSeleccionado: Producto; // realmente actua como la categoria seleccionada.
    @Input('titulo') titulo: string;
    @Input() detalleProds: Producto[];
    @Input() random: number;
    constructor(private productoService: ProductoService,
                private route: ActivatedRoute,
                private location: Location,
                private _activatedRoute: ActivatedRoute
        ) {

    }
    ngOnInit(): void {
        /*
          Selecciona desde las categorias.
        */

        /*
          distinguimos por url.
        */
        let pathroot = this.route.pathFromRoot;
        let arr = [];
        pathroot.forEach(
            path => path.url.subscribe(
                url => { url.forEach(e => arr.push(e.path)); }
            )
        );

        this.route.params.forEach(
            (params: Params) =>
            {
                if (arr.filter(v => v == "detalle")) {
                    console.log(params + "----------------------------- DETALLE --------------------------------");
                    let id = +params['id'];
                    this.productoService.getProductoPorId(id).subscribe(
                        prod => {
                            this.detalleIndividual = new Producto(prod["Id"], prod["Nombre"], "", 0, prod["CategoriaPrincipal"]);
                            console.log(this.detalleIndividual);
                        }
                    );
                      //   (
                      //  producto => this.detalleIndividual = producto
                      //);
                } else {
                    console.log(params+"----------------------------- ELSE --------------------------------");
                    if (params['id'] != "all") {
                        /*
                          Categoría concreta - no es el producto seleccionado...
                        */
                        let id = +params['id'];
                        this.productoService.getProducto(id).then(
                            producto => this.productoSeleccionado = producto
                        );
                        this.productoService.getProductosPorCategoria(id).subscribe(pcats =>
                        { this.detalleCats = pcats; }
                        );
                    } else {
                        /*
                          Todas las categorias (responsive)
                        */
                        this.detalleProds = this.productoService.getProductos();
                        this.random = Utils.getRandomInt(1, 8);
                    }
                }
                
                
            }
        );
    }

    isAtras() {
        this.location.back();
    }

}
