import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <ul>
      <li *ngFor="let user of users">
        {{ user.firstName + ' ' + user.lastName }}
        <a [routerLink]="['/users', user.id]">Edit</a>
      </li>
    </ul>
  `,
})
export class UserListComponent {
  @Input() users: User[] = [];
}
