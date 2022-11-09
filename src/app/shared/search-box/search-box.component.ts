import { Component, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <input type="text" placeholder="Search..." [formControl]="searchControl" />
  `,
  styles: [],
})
export class SearchBoxComponent {
  searchControl = new FormControl('', { nonNullable: true });
  @Output() search = this.searchControl.valueChanges.pipe(
    debounceTime(300),
    map((query) => query.trim().toLowerCase())
  );
}
