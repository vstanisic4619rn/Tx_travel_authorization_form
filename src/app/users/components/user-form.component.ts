import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="userForm">
      <div>
        <label>First Name: </label>
        <input type="text" formControlName="firstName" />
      </div>

      <div>
        <label>Last Name: </label>
        <input type="text" formControlName="lastName" />
      </div>

      <button
        type="submit"
        [disabled]="userForm.invalid || isSaving"
        (click)="onSave()"
      >
        {{ isSaving ? 'Saving...' : 'Save' }}
      </button>
    </form>
  `,
})
export class UserFormComponent {
  private userId = 0;
  userForm = new FormGroup({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  @Input() isSaving = false;

  @Input() set user(user: User) {
    this.userId = user.id;
    this.userForm.reset(user);
  }

  @Output() save = new EventEmitter<User>();

  onSave(): void {
    this.save.emit({
      id: this.userId,
      ...this.userForm.getRawValue(),
    });
  }
}
