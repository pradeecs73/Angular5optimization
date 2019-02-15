import { Component, OnInit } from '@angular/core';
import {configservice} from './../config.service';

@Component({
  selector: 'app-readfromfile',
  templateUrl: './readfromfile.component.html',
  styleUrls: ['./readfromfile.component.css']
})
export class ReadfromfileComponent implements OnInit {
  datafromthefile:any;
  constructor(configservice:configservice) {
     this.datafromthefile=configservice.getUrlData();
   }

  ngOnInit() {
  }

}
