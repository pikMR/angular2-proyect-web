import { Image } from '../../app/interface/image.interface';
export class Categoria {
    id_categoria: number;
    nombre: string;
    descripcion: string;
    imagen: Image;
    ico: Image;
    constructor(id: number, n: string, desc: string,img?:Image, ico?:Image) {
        this.id_categoria = id;
        this.nombre = n;
        this.descripcion = desc;
        this.imagen = img;
        this.ico = ico;
    }
}
