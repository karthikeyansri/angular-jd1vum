import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import {routes} from './app.routing';
import { UserListComponent } from './user-list/user-list.component'
import {CanDeactivateGuard} from './can-deactivate/can-deactivate.guard';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes) ],
  providers:[CanDeactivateGuard],
  declarations: [ AppComponent, UserFormComponent, UserListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
