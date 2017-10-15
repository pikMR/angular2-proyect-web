import { Image } from '../../app/interface/image.interface';
export class Producto {
    id_producto: number;
    nombre: string;
    descripcion: string;
    precio: number;
    tipo: string;
    imagen: Image;
    constructor(id: number, n: string, desc: string, p: number, tip: string,img?:Image) {
        this.id_producto = id;
        this.nombre = n;
        this.descripcion = desc;
        this.precio = p;
        this.tipo = tip;
        this.imagen = img;
    }

}
