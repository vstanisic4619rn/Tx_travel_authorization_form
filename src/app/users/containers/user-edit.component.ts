import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  template: `USER EDIT WORKS ID: {{ id }}`,
})
export class UserEditComponent implements OnInit {
  private route = inject(ActivatedRoute);
  id = 0;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
}
