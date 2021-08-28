import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { HomeComponent } from './home/home.component';
import { UtilsComponent } from './utils/utils.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersDetailsComponent } from './users-detalis/users-details.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormComponent } from './form/form.component';
import { NgxCsvParserModule } from 'ngx-csv-parser';


@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    LoginComponent,
    RegisterComponent,
    ListRestoComponent,
    HomeComponent,
    UtilsComponent,
    NavbarComponent,
    FooterComponent,
    UsersDetailsComponent,
    EditUsersComponent,
    FormComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxCsvParserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
