import {Component, Input} from '@angular/core';
import { User } from '../user.model';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
