import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { Location } from '@angular/common';
import { ProductoService } from '../../services/producto.service';
import { Utils } from '../../services/utils';
@Component({
    selector: 'detalle-producto',
    templateUrl: './../views/detalleProducto.component.html',
    styleUrls: ['./../views/detalleProducto.component.css'],
    providers: [ProductoService]
})
export class DetalleProductoComponent implements OnInit{
    modelproducto: any; modelindividual: any; modelcategoria: any; modelcategorias: any;
    @Input('titulo') titulo: string;
    @Input() random: number;
    constructor(private productoService: ProductoService,
                private route: ActivatedRoute,
                private location: Location,
                private _activatedRoute: ActivatedRoute,
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
            (params: Params) => {
                if (arr.find(v => v == "detalle")) {
                    console.dir(params);
                    console.log(" DETALLE -");
                    let id = +params['id'];
                    
                        this.productoService.getProductoPorId(id).subscribe(
                            (response) => {
                                this.modelindividual = response;
                                console.dir(this.modelindividual)
                                this.productoService.getCategoria(this.modelindividual["CategoriaPrincipal"]).then(
                                    (cats) => { this.modelcategoria = cats }
                                );

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
                            (response) => { this.modelcategoria = response; }

                        );
                        this.productoService.getProductosPorCategoria(id).subscribe((response) =>
                        { this.modelproducto = response; }
                        );

                    } else {
                        /*
                          Todas las categorias (responsive)
                        */
                        this.modelcategorias = this.productoService.getCategorias();
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
