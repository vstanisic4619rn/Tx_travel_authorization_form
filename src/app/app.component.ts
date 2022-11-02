import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="changeTitle()" (mouseenter)="title = 'MOUSE ENTER'">
      Change Title
    </button>

    <button (click)="toggleTitle()">Toggle Title</button>

    <h1 *ngIf="showTitle">
      Welcome {{ title.length > 10 ? 'LARGE TITLE' : title }}!
    </h1>

    <ul>
      <li *ngFor="let user of users">
        {{ user }}
      </li>
    </ul>
  `,
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  title = 'users-app';
  showTitle = true;
  users = ['Marko', 'Jovan', 'Milica'];

  changeTitle() {
    this.title = 'USERS';
  }

  toggleTitle() {
    this.showTitle = !this.showTitle;
  }
}
