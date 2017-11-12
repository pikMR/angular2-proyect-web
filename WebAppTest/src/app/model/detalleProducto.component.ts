import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Utils } from '../../services/utils';
@Component({
    selector: 'detalle-producto',
    templateUrl: './../views/detalleProducto.component.html',
    styleUrls: ['./../views/detalleProducto.component.css'],
    providers: [ProductoService],
})
export class DetalleProductoComponent implements OnInit{
    modelproducto: any; modelindividual: any; modelcategoria: any; modelcategorias: any;
    @Input('titulo') titulo: string;
    @Input() random: number;
    constructor(private productoService: ProductoService,
                private route: ActivatedRoute,
                private location: Location,
                private _activatedRoute: ActivatedRoute,
                private router: Router
        ) {
    }
    ngOnInit(): void {
        console.log(" - DetalleProductoComponent");
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
                console.log("--params");
                console.dir(params);
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
                    console.log("titulo : " + params['titulo']);
                    console.log("id : " + params['id']);
                    if (params['titulo']==null && params['id'] != "all") {
                        // ID
                        console.log("#ID");
                        let paramId = +params['id'];

                        /*
                          Categoría concreta - no es el producto seleccionado...
                        */

                        this.productoService.getCategoria(paramId).then(
                            (response) => { this.modelcategoria = response; }

                        );
                        this.productoService.getProductosPorCategoria(paramId).subscribe((response) =>
                        { this.modelproducto = response; }
                        );

                    } else if (params['id'] != "all") {
                        console.log("#TITULO:");
                        /*
                          Todas las categorias (responsive)
                        */
                        this.productoService.getCategoria(params['id']).then(
                            (response) => { this.modelcategoria = response; }
                        );
                        this.productoService.getProductosPorCategoria(params['id']).subscribe((response) =>
                        { this.modelproducto = response; }
                        );
                    } else {
                        // all
                        console.log("#ELSE:");
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

    moveToCategoria() {
        this.router.navigate(['/categoria/' + this.modelcategoria["id_categoria"]]);
    }

}
