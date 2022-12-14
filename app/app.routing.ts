
import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserListComponent} from './user-list/user-list.component';
import {CanDeactivateGuard} from './can-deactivate/can-deactivate.guard';

export const routes: Routes = [
  {path: '', component: AppComponent,children:[
      {path:'user/new',component:UserFormComponent,canDeactivate: [CanDeactivateGuard]},
      {path:'',component:UserListComponent}
  ]},
  
];