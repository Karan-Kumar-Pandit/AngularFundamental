import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersapiService } from '../usersapi.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: UsersapiService) { }

  ngOnInit(): void {
  }

  SignupUsers = new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl(''),

  });

  get Email() { return this.SignupUsers.get('Email') }
  get Password() { return this.SignupUsers.get('Password') }


  GetUsersValue() {
    let UsersDetails = this.SignupUsers.value;
    console.log(UsersDetails);
    console.log(UsersDetails.Email);
    console.log(UsersDetails.PSassword);
    this.service.addPost(UsersDetails).subscribe(response => {
      console.log(response.toString);
    });



  }


}
