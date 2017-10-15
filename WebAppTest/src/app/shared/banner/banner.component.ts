
import { Component } from '@angular/core';
import { CSSCarouselComponent } from '../../carousel/carousel.component'

@Component({
    selector: 'shared-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css']    
})
export class BannerComponent {

    name: string;
    constructor() {
        this.name = 'Sam';
    }
}
