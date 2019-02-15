import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {
  userNamePattern="^[0-9]{9}$"

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm)
  {
    console.log(form);
  }

}
