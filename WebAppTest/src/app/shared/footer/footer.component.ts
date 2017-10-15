
import { Component } from '@angular/core';

@Component({
    selector: 'shared-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    name: string;
    constructor() {
        this.name = 'Sam';
    }
}
