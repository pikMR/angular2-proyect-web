import { Component , OnInit } from '@angular/core'; // OnInit es para la carga procedural.
import { Producto } from '../../model/producto/producto'
import { Categoria } from '../../model/categoria/categoria'
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [ProductoService] // necesario para saber que servicios se usarán.
})


export class HomeComponent implements OnInit {
    titulo: string = 'categoría seleccionada : ';
    categoria: Categoria = new Categoria(1, 'paletilla', 'paletilla de cerdo');

    categorias : Categoria[];
    categoriaSeleccionada: Categoria;

    /*
        acceso al componente mediante el servicio.
    */
    constructor(private productoService: ProductoService, private route : Router) {
        //this.productoSeleccionado = new Producto();
    }

    private getCategorias():void {
        this.categorias = this.productoService.getCategorias();
    }

    private getCategoriasPromise(): void {
         this.productoService.getCategoriasPromise()
            .then(
            (resolve) =>    // resolve contendrá los productos del mock / servicio.
                {
                    this.categorias = resolve;
                }
         );
    }

    private getCategoriasPromiseDelay(): void 
    {
        this.productoService.getCategoriasPromiseDelay()
            .then(
              (resolve) =>    // resolve contendrá los productos del mock / servicio.
              {
                  this.categorias = resolve;
              }
            );
    }

    ngOnInit(): void {
       // this.getProductos();
        this.getCategoriasPromiseDelay();
    }

    seleccionar(categoria : Categoria) {
        this.categoriaSeleccionada = categoria;
    }

    irDetalle(categoria: Categoria): void {
        // nos vamos al producto seleccionado.
        let link = ['/categoria', categoria.id_categoria];
        this.route.navigate(link);
    }
}
