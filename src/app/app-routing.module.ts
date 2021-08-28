import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestoComponent} from './add-resto/add-resto.component';
import { DataPaginationComponent } from './data-pagination/data-pagination.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { HomeComponent } from './home/home.component';
import {ListRestoComponent} from './list-resto/list-resto.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UpdateRestoComponent} from './update-resto/update-resto.component'
import { UsersDetailsComponent } from './users-detalis/users-details.component';
import { FormComponent } from './form/form.component';

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
    component:DataPaginationComponent,
    path: 'pagination'
  },
  {
    component:AddRestoComponent,
    path: 'add'
  },
  {
    component:FormComponent,
    path: 'form'
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
    component:EditUsersComponent,
    path: 'users/edit/:id'
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
