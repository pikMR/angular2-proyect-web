import { Injectable } from '@angular/core';
import { Producto } from '../model/producto/producto';
import { PRODUCTOS, PRODUCTOS_DETALLE } from '../mocks/mock-productos';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
@Injectable()
export class ProductoService {
    apiValues: string[] = [];

    constructor(private _httpService: Http) {

    }
    getProductos():Producto[] {
        return PRODUCTOS_DETALLE;
    }

    getProductosNames() {
        return this._httpService.get('/api/Producto/Names')
            .map(data => {
                return data.json();
            });
    }

    getProductosPorCategoria(id: number): Observable<Producto[]> {
        return this._httpService.get('/api/Producto?cat=' + id)
            .map((response) => <Producto[]>response.json())
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
    /*
        Recibe los productos mediante una promesa - la promesa recogerá el objeto de forma procedural.
    */
    getProductosPromise(): Promise<Producto[]> {
        return Promise.resolve(PRODUCTOS_DETALLE); // resolve recibe el array sustituye el objeto promise por el array.
    }

    getProducto(id: number): Promise<Producto> {
        return this.getProductosPromise().then(
            (producto) => producto.find(producto => producto.id_producto == id)
        );
    }

    main() {
        this.getProductos();    
    }

    getProductosPromiseDelay(): Promise<Producto[]> {
        return new Promise<Producto[]>(
            (resolve) => { setTimeout(resolve, 5000) }
        ).then(() => this.getProductos());
    }
}
