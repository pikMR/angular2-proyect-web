import { Injectable } from '@angular/core';
import { Producto } from '../model/producto/producto';
import { Categoria } from '../model/categoria/categoria';
import { CATEGORIAS} from '../mocks/mock-categorias';
import { ARRAY_PRODUCTOS } from '../mocks/mock-productos';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
@Injectable()
export class ProductoService {
    apiValues: string[] = [];

    constructor(private _httpService: Http) {

    }
    getCategorias(param?:string):Categoria[] {
            return CATEGORIAS;
    }

    getProductos(): Producto[] {
        return ARRAY_PRODUCTOS;
    }

    getProductosNames() {
        return this._httpService.get('/api/Producto/Names')
            .map(data => {
                return data.json();
            });
    }

    getProductoPorId(id: number): Observable<Response> {
        return this._httpService.get('/api/Producto/' + id)
            .map((response) => response.json())
            .catch(this.handleError);
    }

    getProductosPorCategoria(id: number): Observable<Response> {
        return this._httpService.get('/api/Producto?cat=' + id)
            .map((response) => response.json())
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
    /*
        Recibe los productos mediante una promesa - la promesa recogerá el objeto de forma procedural.
    */
    getCategoriasPromise(): Promise<Categoria[]> {
        return Promise.resolve(CATEGORIAS); // resolve recibe el array sustituye el objeto promise por el array.
    }

    getCategoria(id: number): Promise<Categoria> {

        return this.getCategoriasPromise().then(
            (categoria) => categoria.find(c => c.id_categoria == id)
        );
    }

    main() {
        this.getCategorias();    
    }

    getCategoriasPromiseDelay(): Promise<Categoria[]> {
        return new Promise<Categoria[]>(
            (resolve) => { setTimeout(resolve, 5000) }
        ).then(() => this.getCategorias());
    }

    getProductosPromiseDelay(): Promise<Producto[]> {
        return new Promise<Producto[]>(
            (resolve) => { setTimeout(resolve, 5000) }
        ).then(() => this.getProductos());
    }

}
