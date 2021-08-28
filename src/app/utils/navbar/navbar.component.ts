import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  values = '';
  
firechange(newValue:any) {
  this.values = (newValue.target as HTMLInputElement).value;
   console.warn(this.values);
  }

}
