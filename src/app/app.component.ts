import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormaComponent } from './forma/forma.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule,FormaComponent],
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
        background-image:url("https://www.helloworld.rs/public/company/1649/galerija/_MG_8549.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height:100vh;
        opacity:100%;

      }

      app-footer {
        align-self: center;
        margin-top: auto;
      }

   
    `,
  ],
})
export class AppComponent {}
