import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { Location } from '@angular/common';
import { Producto } from '../../model/producto/producto';
import { Categoria } from '../../model/categoria/categoria';
import { ProductoService } from '../../services/producto.service';
import { Utils } from '../../services/utils';

@Component({
    selector: 'detalle-producto',
    templateUrl: './../views/detalleProducto.component.html',
    styleUrls: ['./../views/detalleProducto.component.css'],
    providers: [ProductoService]
})
export class DetalleProductoComponent implements OnInit{
    @Input() detalleProducto: Producto[];
    @Input() detalleIndividual: Producto;
    @Input() categoriaSeleccionada: Categoria; // realmente actua como la categoria seleccionada.
    @Input('titulo') titulo: string;
    @Input() detalleCategorias: Categoria[];
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
                if (arr.find(v => v == "detalle")) {
                    console.dir(params);
                    console.log(" DETALLE -");
                    let id = +params['id'];
                    this.productoService.getProductoPorId(id).subscribe(
                        prod => {
                            this.detalleIndividual = new Producto(prod["Id"], prod["Nombre"], "-detalleIndividual-", '0', prod["CategoriaPrincipal"]);
                            this.productoService.getCategoria(prod["CategoriaPrincipal"]).then(
                                cats => this.categoriaSeleccionada = cats
                            );
                            console.log(this.detalleIndividual);
                        }
                    );
                } else {
                    console.dir(params);
                    console.log(params+" ELSE -");
                    if (params['id'] != "all") {
                        /*
                          Categoría concreta - no es el producto seleccionado...
                        */

                        let id = +params['id'];
                        this.productoService.getCategoria(id).then(
                            cats => { this.categoriaSeleccionada = cats; }

                        );
                        this.productoService.getProductosPorCategoria(id).subscribe(pprod =>
                        { this.detalleProducto = pprod;}
                        );
                    } else {
                        /*
                          Todas las categorias (responsive)
                        */
                        this.detalleCategorias = this.productoService.getCategorias();
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
