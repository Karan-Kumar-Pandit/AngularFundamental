import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersapiService } from '../usersapi.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
  [x: string]: any;

  constructor(
    private route: ActivatedRoute,
    private service: UsersapiService,
    private PageNavigation: Router,
    private location: Location
    ) { }

  //--------------------------------------------------------

id:any;
  ngOnInit(): void {
     this.id = this.route.snapshot.params.id;
    this.getSingleUsers(this.id) ;
    

  }
UsersEmail: any;
UsersPassword:any;
//--------------------------------------------------------
singleUsers: any = [];
usersObject:any = {};
  getSingleUsers(ID:any) {
    this.service.getSingleUsers(ID).subscribe(apiResponse => {
        this.singleUsers = apiResponse;   
        this.usersObject = this.singleUsers.data[0];
        this.UsersEmail = this.usersObject.Email;
        this.UsersPassword = this.usersObject.Password;
        
    });

    
  }

//--------------------------------------------------------
  EditUsers = new FormGroup({
    Email: new FormControl(this.usersObject.Email),
    Password: new FormControl(this.usersObject.Password),

  });
  get Email() { return this.EditUsers.get('Email') }
  get Password() { return this.EditUsers.get('Password')}


  
// --------------------------------------------------------------------
GetResponse :any;
  UpdateUsers() {
    this.service.updateUsers(this.EditUsers.value,this.id).subscribe((Response)=>{
    
        this.GetResponse = Response;
      if(this.GetResponse.status == 200){
        window.alert("Update successfully.");
    
        this.PageNavigation.navigate(['/'])
      }else{
        window.alert("Update failed.");
        this.location.back();
      }
    });
  }
}
