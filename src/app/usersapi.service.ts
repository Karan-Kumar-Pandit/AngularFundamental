import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UsersapiService {
  getfriendsdetails() {
    throw new Error('Method not implemented.');
  }


  private usersurl = "http://localhost:9200/api/login/users";
  constructor(private httpClient: HttpClient) {
  }

  // ---------------------------------------------------------

  public addPost(postData: any) {
    return this.httpClient.post(this.usersurl, postData);
  }

  // ---------------------------------------------------------
  public getUsers() {
    return this.httpClient.get(this.usersurl);
  }
  // ---------------------------------------------------------
  


}
