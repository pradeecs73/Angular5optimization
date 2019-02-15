import { Component, OnInit } from '@angular/core';
import {configservice} from './../config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  checkvariable:any;

  constructor(configservice:configservice) { 
      this.checkvariable=configservice.getInitialSampleData();
  }

  ngOnInit() {
    
  }

}
