import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FormaComponent } from './forma/forma.component';

export const APP_ROUTES: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'forma', component: FormaComponent, title: 'Forma' },
  {
    path: 'users',
    loadChildren: () => import('./users/users.routes'),
  },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
 
];
