import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h1>Users</h1>

    <input type="text" placeholder="Search..." [formControl]="searchControl" />

    <ul>
      <li *ngFor="let user of filteredUsers">
        {{ user.firstName + ' ' + user.lastName }}
      </li>
    </ul>
  `,
  styles: [],
})
export class UsersComponent implements OnInit {
  private usersService = inject(UsersService);
  searchControl = new FormControl('', { nonNullable: true });
  allUsers: User[] = [];
  filteredUsers: User[] = [];

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((users) => {
      this.allUsers = this.filteredUsers = users;
    });

    this.searchControl.valueChanges.subscribe((query) => {
      query = query.trim().toLowerCase();

      this.filteredUsers = this.allUsers.filter((user) =>
        user.firstName.toLowerCase().includes(query)
      );
    });
  }
}
