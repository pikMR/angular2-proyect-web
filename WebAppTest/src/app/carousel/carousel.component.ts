import { Component } from '@angular/core';
import { Image } from '../interface/image.interface';

var IMAGES: Image[] = [
    { "title": "Productos frescos", "url": "assets/images/gallery/1-gallery.jpg" },
    { "title": "Nuestra Tienda", "url": "assets/images/gallery/6-gallery.jpg" },
    { "title": "La mejor Atención", "url": "assets/images/gallery/5-gallery.jpg" },
    { "title": "Servicio a Domicilio", "url": "assets/images/gallery/4-gallery.jpg" },
    { "title": "Servicio a Domicilio", "url": "assets/images/gallery/2-gallery.jpg" }
];

@Component({
    selector: 'css-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CSSCarouselComponent {
    public images = IMAGES;
    constructor() {
        //this.name = 'Sam';
    }
}
