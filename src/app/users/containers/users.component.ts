import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
import { User } from '../user.model';
import { debounceTime } from 'rxjs';
import { UserListComponent } from '../components/user-list.component';
import { SearchBoxComponent } from '../../shared/search-box/search-box.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserListComponent,
    SearchBoxComponent,
  ],
  template: `
    <h1>Users</h1>
    <app-search-box (search)="onSearch($event)"></app-search-box>
    <app-user-list [users]="filteredUsers"></app-user-list>
  `,
})
export class UsersComponent implements OnInit {
  private usersService = inject(UsersService);
  allUsers: User[] = [];
  filteredUsers: User[] = [];

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((users) => {
      this.allUsers = this.filteredUsers = users;
    });
  }

  onSearch(query: string): void {
    this.filteredUsers = this.allUsers.filter((user) =>
      user.firstName.toLowerCase().includes(query)
    );
  }
}
