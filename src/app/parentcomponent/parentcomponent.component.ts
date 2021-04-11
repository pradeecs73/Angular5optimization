import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {

  valueforthechild: any = 'mysore';
  valuefromthechild: any;

  constructor() {}

  ngOnInit() {}

  myChildData(childdata: String) {
    this.valuefromthechild = childdata;
  }


  changeValuefromtheparent() {
    this.valueforthechild = 'Bangalore';
  }
}
