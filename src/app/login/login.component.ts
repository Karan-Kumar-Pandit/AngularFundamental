import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersapiService } from '../usersapi.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: UsersapiService,private PageNavigation: Router) { }

  ngOnInit(): void {
  }


// --------------------------------------------------------------------
  SignupUsers = new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl(''),

  });

  get Email() { return this.SignupUsers.get('Email') }
  get Password() { return this.SignupUsers.get('Password') }

// --------------------------------------------------------------------
GetResponse :any;
  UsersLogin() {
    this.service.addPost(this.SignupUsers.value).subscribe((Response)=>{
      console.log("Function Working");
      console.log(Response);
        this.GetResponse = Response;
      if(this.GetResponse.status == 200){
        window.alert("Login successfully.");
        var userEmail = this.GetResponse.email;
        localStorage.setItem('LoggedInUser',JSON.stringify(this.SignupUsers.value));
        sessionStorage.setItem('LoggedInUser',JSON.stringify(this.SignupUsers.value));
      
        this.PageNavigation.navigate(['users-details'])
      }else{
        window.alert("Login failed.");
      }
    });
  }

// --------------------------------------------------------------------

  // AlertDialogBox(){
  //   window.alert("sometext");
  // }
// --------------------------------------------------------------------


}
