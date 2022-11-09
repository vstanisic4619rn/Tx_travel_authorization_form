import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  template: `
    <app-header></app-header>
    <div class="body">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .body {
        padding: 1rem;
      }

      app-footer {
        align-self: center;
        margin-top: auto;
      }
    `,
  ],
})
export class AppComponent {}
