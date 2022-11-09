import { Route } from '@angular/router';
import { UsersComponent } from './containers/users.component';
import { UserEditComponent } from './containers/user-edit.component';

const USERS_ROUTES: Route[] = [
  { path: '', component: UsersComponent, title: 'Users' },
  { path: ':id', component: UserEditComponent, title: 'User Edit' },
];

export default USERS_ROUTES;
