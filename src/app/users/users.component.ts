import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Users</h1>

    <ul>
      <li *ngFor="let user of users">
        {{ user.firstName + ' ' + user.lastName }}
      </li>
    </ul>
  `,
  styles: [],
})
export class UsersComponent implements OnInit {
  private usersService = inject(UsersService);
  users: User[] = [];

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
