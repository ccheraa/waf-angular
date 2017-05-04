import { RouterModule } from '@angular/router';
import { HomeRoute } from './home.route';
let routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  ...HomeRoute,
  {path: '**', redirectTo: '/home'}
];
export const ROUTES = RouterModule.forRoot(routes);