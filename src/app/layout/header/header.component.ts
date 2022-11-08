import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <ul>
      <li><a routerLink="/home" routerLinkActive="active-link">Home</a></li>
      <li><a routerLink="/users" routerLinkActive="active-link">Users</a></li>
    </ul>
  `,
  styles: [
    `
      .active-link {
        font-weight: bold;
        color: aqua;
      }

      ul {
        background-color: purple;
        margin: 0;
        padding: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        list-style: none;
        gap: 1rem;
      }

      a {
        color: white;
        text-decoration: none;
      }
    `,
  ],
})
export class HeaderComponent {}
