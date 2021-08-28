import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersapiService {
  getOption(): any {
    throw new Error('Method not implemented.');
  }
 
  getfriendsdetails() {
    throw new Error('Method not implemented.');
  }


  private usersurl = "http://localhost:9200/api/login/users/";
  private usersSearchUrl = "http://localhost:9200/api/login/search/users/";
  private admissionUrl = "http://localhost:9200/resto/user/admissionform/";

  constructor(private httpClient: HttpClient) {
  }

// ---------------------------------------------------------
 getData(): Observable<any> {
return this.httpClient.get<any>(this.usersurl)
}



  // ---------------------------------------------------------

  public addPost(postData: any) {
    return this.httpClient.post(this.usersurl, postData);
  }
  // ---------------------------------------------------------

  public admissionFunction(postData: any) {
    return this.httpClient.post(this.admissionUrl, postData);
  }

  // ---------------------------------------------------------
  public getUsers() {
    return this.httpClient.get(this.usersurl);
  }
  // ---------------------------------------------------------
  public getSearchUsers(searchdata:any) {
    return this.httpClient.post(this.usersSearchUrl,searchdata);
  }
  // ---------------------------------------------------------
  public getSingleUsers(updateID:any) {
    return this.httpClient.get(this.usersurl+updateID);
  }
  // ---------------------------------------------------------
  public updateUsers(usersValue:any,updateID:any) {
    return this.httpClient.put(this.usersurl+updateID,usersValue);
  }

  // ---------------------------------------------------------

  public DeleteUsers(deleteData: any) {
      return this.httpClient.delete(this.usersurl+deleteData); 
  
  }
  // ---------------------------------------------------------
  


}
