import { Component, OnInit } from '@angular/core';
import { UsersapiService } from '../usersapi.service';


@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  page: number=1
  
  constructor(private service: UsersapiService) { 
  
  }
  

  Users:any;
 
  ngOnInit(){
    this.getUsersDetails();
  

    sessionStorage.getItem('id');  
    localStorage.getItem('id');

   
  }
  
// -------------------------------------------------------------------------

  usersDetails: any = []; 

  
  getUsersDetails() {
      this.service.getUsers().subscribe(apiResponse => {
          this.usersDetails = apiResponse;
          console.warn(apiResponse)
         
      });
  }


  getSearchUsersDetails(searchdata:any) {
      this.service.getSearchUsers(searchdata).subscribe(apiResponse => {
        this.usersDetails = apiResponse;
          console.warn(apiResponse);
         
      });
  }


// ------------------------------------------------------------------

  DeleteResult:any;
  DeleteUsersDetails(deleteId:any) {

    console.log(deleteId);
      this.service.DeleteUsers(deleteId).subscribe((Response)=>{
          this.DeleteResult = Response;

          console.log("This function is working fine");
          console.log(Response);
          if(this.DeleteResult.status == 200){
            this.getUsersDetails();
               window.alert("Users deleted successfully.");
          }else{
              window.alert("Users not deleted.");
          }
         
      });
  }
  chekdatalength(){
    window.alert(this.usersDetails.data.length);
  }
  values = '';
  
  firechange(newValue:any) {
    this.values = (newValue.target as HTMLInputElement).value;
    this.getSearchUsersDetails({'search_item': this.values});
    }
  
}

// -------------------------------------------------------------------------
