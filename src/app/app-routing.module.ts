import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestoComponent} from './add-resto/add-resto.component';
import { HomeComponent } from './home/home.component';
import {ListRestoComponent} from './list-resto/list-resto.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UpdateRestoComponent} from './update-resto/update-resto.component'
import { UsersDetailsComponent } from './users-detalis/users-details.component';

const routes: Routes = [
  {

    path: '',
    redirectTo: '/home',
    pathMatch: 'full',

  },
  {
    component:HomeComponent,
    path: 'home'
  },
  {
    component:AddRestoComponent,
    path: 'add'
  },
  {
    component:ListRestoComponent,
    path: 'list'
  },
  {
    component:LoginComponent,
    path: 'login'
  },
  {
    component:RegisterComponent,
    path: 'register'
  },
  {
    component:UpdateRestoComponent,
    path: 'update'
  },
  {
    component:UsersDetailsComponent,
    path: 'users-details'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
