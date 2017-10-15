
import { Component } from '@angular/core';

@Component({
    selector: 'shared-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
    name: string;
    constructor() {
        this.name = 'Sam';
    }
}
