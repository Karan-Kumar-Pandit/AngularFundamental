import { Component, OnInit } from '@angular/core';
import { UsersapiService } from '../usersapi.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  
  
  constructor(private service: UsersapiService) { }
  
  books: any = []; 
  ngOnInit(){
    this.getBookDetails();
  }
  
  getBookDetails() {
      this.service.getUsers().subscribe(books => {
          this.books = books;
          console.log(this.books);
      });
  }
}
