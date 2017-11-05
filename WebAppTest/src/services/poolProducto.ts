import { Observable } from "rxjs/Observable";
export class PoolProducto {
    poolProducto: any[] = [];

    addProducto(producto:any) {
        if (!this.existeProducto(producto.Id)) {
            this.poolProducto.push(producto);
        }
    }

    existeProducto(id: string) {
        return this.poolProducto.find(p => p.Id == id);
    }

    addModelo(productos:any) {
        productos.forEach(e => { this.addProducto(e) });
    }

    getProductos(): any[] {
        return this.poolProducto;
    }

    getProductosCategoria(cat: string) :any[] {
        return this.poolProducto.filter(p => p.CategoriaPrincipal == cat);
    }

}
