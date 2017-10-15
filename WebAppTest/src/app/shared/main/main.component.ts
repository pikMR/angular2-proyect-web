
import { Component } from '@angular/core';

@Component({
    selector: 'shared-main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.css']
})
export class MainComponent {
    name: string;
    constructor() {
        this.name = 'Sam';
    }
}
