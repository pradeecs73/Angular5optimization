import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HostListener,HostBinding } from '@angular/core';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {

  @ViewChild('f') templatedrivenformstatus: NgForm;

  userNamePattern = '^[0-9]{9}$';
  school = 'government';
  companyarray: any = [
    { value: 'Tcs', checked: false, companyname: 'company' },
    { value: 'wipro', checked: false, companyname: 'company2' }
  ];
  passengertitle: any = 'pradeep';
  titleArray: any = [
    { text: 'pradeep', value: 'pradeep' },
    { text: 'prasad', value: 'prasad' }
  ];

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
   
    console.log(form);
    console.log(this.companyarray);
  }
}
