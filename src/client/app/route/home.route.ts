import { HomeComponent, SideComponent } from '../component';
import { NavigatorService, canDeactivate } from '../../../wa-front-angular';
export const HomeRoute = [
  {path: 'home', component: HomeComponent, canDeactivate},
  {path: 'test', component: SideComponent, canDeactivate},
];