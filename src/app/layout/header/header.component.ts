import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: ` <div>Users App Header</div> `,
  styles: [
    `
      div {
        padding: 16px;
        background-color: red;
      }
    `,
  ],
})
export class HeaderComponent {}
