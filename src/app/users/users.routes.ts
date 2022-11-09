import { Route } from '@angular/router';
import { UsersComponent } from './containers/users.component';
import { UserEditComponent } from './containers/user-edit.component';

const USERS_ROUTES: Route[] = [
  { path: '', component: UsersComponent },
  { path: ':id', component: UserEditComponent },
];

export default USERS_ROUTES;
