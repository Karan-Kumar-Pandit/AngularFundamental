import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UsersapiService } from '../usersapi.service';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    private service: UsersapiService,
    private ngxCsvParser: NgxCsvParser) { }

  ngOnInit(): void {
    this.options.push('Select');
  }


  options: string[] = ['Delhi', 'Mumbai', 'Gujrat', 'Patna', 'Kolkata'];



  AdmissonForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    picture: new FormControl(''),
    usersname: new FormControl(''),
    fathername: new FormControl(''),
    mothername: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phonenumber: new FormControl(''),
    cityname: new FormControl(''),
    dateofbirth: new FormControl(''),
    description: new FormControl(''),
    checkbox: new FormControl(''),
  });


  get firstname() { return this.AdmissonForm.get('firstname') }
  get lastname() { return this.AdmissonForm.get('lastname') }
  get picture() { return this.AdmissonForm.get('picture') }
  get usersname() { return this.AdmissonForm.get('usersname') }
  get fathername() { return this.AdmissonForm.get('fathername') }
  get mothername() { return this.AdmissonForm.get('mothername') }
  get gender() { return this.AdmissonForm.get('gender') }
  get dateofbirth() { return this.AdmissonForm.get('dateofbirth') }
  get email() { return this.AdmissonForm.get('email') }
  get password() { return this.AdmissonForm.get('password') }
  get phonenumber() { return this.AdmissonForm.get('phonenumber') }
  get cityname() { return this.AdmissonForm.get('cityname') }
  get description() { return this.AdmissonForm.get('description') }
  get checkbox() { return this.AdmissonForm.get('checkbox') }



 

  GetResponse :any;
  GetFormValue() {
    let UsersDetails = this.AdmissonForm.value;
    console.log(UsersDetails);
    this.service.admissionFunction(this.AdmissonForm.value).subscribe((Response)=>{
    
      console.log(Response);
        this.GetResponse = Response;
      if(this.GetResponse.status == 200){
        window.alert("Admission successfully.");
        var userEmail = this.GetResponse.email;
        // localStorage.setItem('LoggedInUser',JSON.stringify(this.SignupUsers.value));
        // sessionStorage.setItem('LoggedInUser',JSON.stringify(this.SignupUsers.value));
      
        // this.PageNavigation.navigate(['users-details'])
      }else{
        window.alert("Admission failed.");
      }
    });
  }

  isOldImage = false;
  isNewImage = true;

  selectImage() {
    window.alert('select Image');
  }


}




























