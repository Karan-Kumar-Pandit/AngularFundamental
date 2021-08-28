import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-pagination',
  templateUrl: './data-pagination.component.html',
  styleUrls: ['./data-pagination.component.scss']
})

export class DataPaginationComponent {

  config: any;
  collection = { count: 60, data: [
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
{
  'id':1,
  'value':'string',
},
  ] };

  constructor() {

 

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  pageChanged(event:any){
    this.config.currentPage = event;
  }

}