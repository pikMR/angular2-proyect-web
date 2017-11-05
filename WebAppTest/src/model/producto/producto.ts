import { Image } from '../../app/interface/image.interface';
export class Producto {
    Id: string;
    Nombre: string;
    descripcion: string;
    Precio: string;
    CategoriaPrincipal: string;
    imagen: Image;
    UnidadesStock: string;
    constructor(id: string, n: string, desc: string, p: string, tip: string, img?: Image, stock?: string) {
        this.Id = id;
        this.Nombre = n;
        this.descripcion = desc;
        this.Precio = p;
        this.CategoriaPrincipal = tip;
        this.imagen = img;
        this.UnidadesStock = stock;
    }

}
