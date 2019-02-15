import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/Rx';
import {observableservice} from './../observable.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-commoncomponent',
  templateUrl: './commoncomponent.component.html',
  styleUrls: ['./commoncomponent.component.css']
})
export class CommoncomponentComponent implements OnInit {

  receiveid:any;

  constructor(private observableservice:observableservice) { }

  ngOnInit() {

    this.observableservice.useridreceivedfromcomponent.subscribe((id:String)=>{
         this.receiveid=id;
    });

  }

}
