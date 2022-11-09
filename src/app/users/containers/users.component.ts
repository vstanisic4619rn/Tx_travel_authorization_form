import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../users.service';
import { User } from '../user.model';
import { UserListComponent } from '../components/user-list.component';
import { SearchBoxComponent } from '../../shared/search-box/search-box.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserListComponent, SearchBoxComponent],
  template: `
    <h1>Users</h1>
    <app-search-box (search)="onSearch($event)"></app-search-box>

    <p *ngIf="isLoading; else userList">Loading...</p>
    <ng-template #userList>
      <app-user-list [users]="filteredUsers"></app-user-list>
    </ng-template>
  `,
})
export class UsersComponent implements OnInit {
  private usersService = inject(UsersService);
  isLoading = true;
  allUsers: User[] = [];
  filteredUsers: User[] = [];

  ngOnInit() {
    this.usersService.getAll().subscribe((users) => {
      this.allUsers = this.filteredUsers = users;
      this.isLoading = false;
    });
  }

  onSearch(query: string): void {
    this.filteredUsers = this.allUsers.filter((user) =>
      user.firstName.toLowerCase().includes(query)
    );
  }
}
