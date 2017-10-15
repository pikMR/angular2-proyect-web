import { Component , OnInit } from '@angular/core'; // OnInit es para la carga procedural.
import { Producto } from '../../model/producto/producto'
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [ProductoService] // necesario para saber que servicios se usarán.
})


export class HomeComponent implements OnInit {
    titulo: string = 'producto seleccionado : ';
    producto: Producto = new Producto(1, 'paletilla', 'paletilla de cerdo',20,'cerdo');

    productos : Producto[];
    productoSeleccionado: Producto;

    /*
        acceso al componente mediante el servicio.
    */
    constructor(private productoService: ProductoService, private route : Router) {
        //this.productoSeleccionado = new Producto();
    }

    private getProductos():void {
        this.productos = this.productoService.getProductos();
    }

    private getProductosPromise(): void {
         this.productoService.getProductosPromise()
            .then(
            (resolve) =>    // resolve contendrá los productos del mock / servicio.
                {
                    this.productos = resolve;
                }
         );
    }

    private getProductosPromiseDelay(): void 
    {
        this.productoService.getProductosPromiseDelay()
            .then(
              (resolve) =>    // resolve contendrá los productos del mock / servicio.
              {
                  this.productos = resolve;
              }
            );
    }

    ngOnInit(): void {
       // this.getProductos();
        this.getProductosPromiseDelay();
    }

    seleccionar(producto : Producto) {
        this.productoSeleccionado = producto;
        console.log(producto.nombre);
    }

    irDetalle(producto: Producto): void {
        // nos vamos al producto seleccionado.
        let link = ['/detalle', producto.id_producto];
        this.route.navigate(link);
    }
}
