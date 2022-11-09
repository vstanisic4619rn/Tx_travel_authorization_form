import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { map, switchMap } from 'rxjs';
import { User } from '../user.model';
import { UsersService } from '../users.service';
import { UserFormComponent } from '../components/user-form.component';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, UserFormComponent],
  template: `
    <h1>Edit User</h1>

    <app-user-form
      *ngIf="user; else loading"
      [user]="user"
      [isSaving]="isSaving"
      (save)="onSave($event)"
    ></app-user-form>

    <ng-template #loading>
      <p>Loading...</p>
    </ng-template>
  `,
})
export class UserEditComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private usersService = inject(UsersService);
  user: User | undefined = undefined;
  isSaving = false;

  ngOnInit() {
    this.route.params
      .pipe(
        map((params) => params['id']),
        switchMap((id) => this.usersService.getById(id))
      )
      .subscribe({
        next: (user) => (this.user = user),
        error: () => {
          alert('User is not found!');
          this.router.navigateByUrl('/not-found');
        },
      });
  }

  onSave(user: User): void {
    this.isSaving = true;
    this.usersService.update(user).subscribe({
      next: () => {
        this.isSaving = false;
        alert(`User ${user.firstName} ${user.lastName} is saved successfully!`);
        this.router.navigateByUrl('/users');
      },
      error: () => {
        this.isSaving = false;
        alert(`User ${user.firstName} ${user.lastName} cannot be saved!`);
      },
    });
  }
}
