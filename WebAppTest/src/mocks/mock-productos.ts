import { Producto } from '../model/producto/producto';
import { Image } from '../app/interface/image.interface';

let ipsu = 'As this article is a book excerpt, browser renderings of attributes and input types may have altered since the screenshots were taken. Additionally';

var IMAGES: Image[] = [
    { "title": "carne de cerdo", "url": "/assets/images/categoria/cerdo/ico/pig-32.ico" },
    { "title": "carne de ternera", "url": "/assets/images/categoria/ternera/ico/cow-32.ico" },
    { "title": "carne de cordero y cabrito", "url": "/assets/images/categoria/cordero/ico/sheep-32.ico" },
    { "title": "carne de pollo y pavo", "url": "/assets/images/categoria/ave/ico/chicken-32.ico" },
    { "title": "carne de conejo", "url": "/assets/images/categoria/conejo/ico/rabbit-2-32.ico" },
    { "title": "elaborados", "url": "/assets/images/categoria/embutido/ico/cheese-32.ico" },
    { "title": "otros", "url": "/assets/images/categoria/elaborado/ico/soda-bottle-32.ico" }
];

var IMAGES_DETALLE: Image[] = [
    { "title": "As this image", "url": "/assets/images/categoria/cerdo/pig-256.png" },
    { "title": "As this image", "url": "/assets/images/categoria/ternera/cow-256.png" },
    { "title": "As this image", "url": "/assets/images/categoria/cordero/sheep-256.png" },
    { "title": "As this image", "url": "/assets/images/categoria/ave/chicken-256.png" },
    { "title": "As this image", "url": "/assets/images/categoria/conejo/rabbit-2-256.png" },
    { "title": "As this image", "url": "/assets/images/categoria/embutido/cheese-256.png" },
    { "title": "As this image", "url": "/assets/images/categoria/elaborado/soda-bottle-256.png" }
];

export const PRODUCTOS: Producto[] = [
    { id_producto: 2, nombre: 'Cerdo', descripcion: 'cerdo', precio: 5, tipo: 'roja', imagen: IMAGES[0] },
    { id_producto: 7, nombre: 'Ternera', descripcion: 'terneras', precio: 5, tipo: 'roja', imagen: IMAGES[1] },
    { id_producto: 4, nombre: 'Cordero y Cabrito', descripcion: 'cordero', precio: 4, tipo: 'blanca', imagen: IMAGES[2] },
    { id_producto: 1, nombre: 'Pollo y Pavo', descripcion: 'pollo,pavo,gallo,gallina', precio: 5, tipo: 'blanca', imagen: IMAGES[3] },
    { id_producto: 3, nombre: 'Conejo', descripcion: 'conejo', precio: 5, tipo: 'blanca', imagen: IMAGES[4] },
    { id_producto: 6, nombre: 'Elaborados', descripcion: 'todo el embutido: salchicha,mortadela,queso,jamón', precio: 13, tipo: 'variado', imagen: IMAGES[5] }
];

export const PRODUCTOS_DETALLE: Producto[] = [
    { id_producto: 2, nombre: 'Cerdo', descripcion: ipsu, precio: 5, tipo: 'roja', imagen: IMAGES_DETALLE[0] },
    { id_producto: 7, nombre: 'Ternera', descripcion: ipsu, precio: 5, tipo: 'roja', imagen: IMAGES_DETALLE[1] },
    { id_producto: 4, nombre: 'Cordero y Cabrito', descripcion: ipsu, precio: 4, tipo: 'blanca', imagen: IMAGES_DETALLE[2] },
    { id_producto: 1, nombre: 'Pollo y Pavo', descripcion: ipsu, precio: 5, tipo: 'blanca', imagen: IMAGES_DETALLE[3] },
    { id_producto: 3, nombre: 'Conejo', descripcion: ipsu, precio: 5, tipo: 'blanca', imagen: IMAGES_DETALLE[4] },
    { id_producto: 6, nombre: 'Elaborados', descripcion: ipsu, precio: 13, tipo: 'variado', imagen: IMAGES_DETALLE[5] }
];
