import { Categoria } from '../model/categoria/categoria';
import { Image } from '../app/interface/image.interface';

let ipsu = 'As this CATEGORIA is a book excerpt, browser renderings of attributes and input types may have altered since the screenshots were taken. Additionally';

var IMAGES_CATEGORIA: Image[] = [
    { "title": "carne de cerdo", "url": "/assets/images/categoria/cerdo/ico/pig-32.ico" },
    { "title": "carne de ternera", "url": "/assets/images/categoria/ternera/ico/cow-32.ico" },
    { "title": "carne de cordero y cabrito", "url": "/assets/images/categoria/cordero/ico/sheep-32.ico" },
    { "title": "carne de pollo y pavo", "url": "/assets/images/categoria/ave/ico/chicken-32.ico" },
    { "title": "carne de conejo", "url": "/assets/images/categoria/conejo/ico/rabbit-2-32.ico" },
    { "title": "elaborados", "url": "/assets/images/categoria/embutido/ico/cheese-32.ico" },
    { "title": "otros", "url": "/assets/images/categoria/elaborado/ico/soda-bottle-32.ico" }
];

var IMAGES_CATEGORIA_DETALLE: Image[] = [
    { "title": "As this image", "url": "/assets/images/categoria/cerdo/pig-256.png" },
    { "title": "As this image", "url": "/assets/images/categoria/ternera/cow-256.png" },
    { "title": "As this image", "url": "/assets/images/categoria/cordero/sheep-256.png" },
    { "title": "As this image", "url": "/assets/images/categoria/ave/chicken-256.png" },
    { "title": "As this image", "url": "/assets/images/categoria/conejo/rabbit-2-256.png" },
    { "title": "As this image", "url": "/assets/images/categoria/embutido/cheese-256.png" },
    { "title": "As this image", "url": "/assets/images/categoria/elaborado/soda-bottle-256.png" }
];

export const CATEGORIAS: Categoria[] = [
    { id_categoria: 2, nombre: 'Cerdo', descripcion: 'cerdo', imagen: IMAGES_CATEGORIA_DETALLE[0],ico: IMAGES_CATEGORIA[0] },
    { id_categoria: 7, nombre: 'Ternera', descripcion: 'terneras', imagen: IMAGES_CATEGORIA_DETALLE[1],ico: IMAGES_CATEGORIA[1] },
    { id_categoria: 4, nombre: 'Cordero y Cabrito', descripcion: 'cordero', imagen: IMAGES_CATEGORIA_DETALLE[2],ico: IMAGES_CATEGORIA[2] },
    { id_categoria: 1, nombre: 'Pollo y Pavo', descripcion: 'pollo,pavo,gallo,gallina', imagen: IMAGES_CATEGORIA_DETALLE[3], ico: IMAGES_CATEGORIA[3] },
    { id_categoria: 3, nombre: 'Conejo', descripcion: 'conejo', imagen: IMAGES_CATEGORIA_DETALLE[4], ico: IMAGES_CATEGORIA[4] },
    { id_categoria: 6, nombre: 'Elaborados', descripcion: 'todo el embutido: salchicha,mortadela,queso,jamón', imagen: IMAGES_CATEGORIA_DETALLE[5],ico: IMAGES_CATEGORIA[5] }
];

