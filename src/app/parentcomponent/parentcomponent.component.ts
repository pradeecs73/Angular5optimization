import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {
  valueforthechild:any="mysore";
  valuefromthechild:any;

  constructor() { }

  ngOnInit() {
  }

  myChildData(childdata:String)
  {
    this.valuefromthechild=childdata;
  }

  changeValuefromtheparent()
  {
    this.valueforthechild="Bangalore";
  }

}
