import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
    
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    anio: number = new Date().getFullYear();

}





