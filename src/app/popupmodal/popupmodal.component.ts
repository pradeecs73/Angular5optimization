import { Component, OnInit,DoCheck,SimpleChanges ,AfterViewInit,AfterContentChecked} from '@angular/core';
import {observableservice} from './../observable.service';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-popupmodal',
  templateUrl: './popupmodal.component.html',
  styleUrls: ['./popupmodal.component.css']
})
export class PopupmodalComponent implements OnInit,AfterViewInit,AfterContentChecked {
  user:any=[{"name":"pradeep"},{"name":"prasad"},{"name":"suresh"},{"name":"ramesh"}];
  viewRule:any="none";
  loginusername:any="suresh";
  receiveid:any;
  message:any;


  constructor(private observableservice:observableservice) { }

  ngOnInit() {
   
       this.observableservice.currentMessage.subscribe(message => this.message = message)

  }

  ngAfterViewInit(){


   

  }

  ngAfterContentChecked(){

    

  }

  ngDoCheck()
  {
    if(this.loginusername == "ramesh")
    {
      console.log("value");
    }
  }

  openPopup(){
    this.viewRule="block";
  }

  closePopup(){
    this.viewRule="none";
  }

  changeLoginusername(){
    this.loginusername="ramesh";
  }

  myTextfieldvaluechange(value)
  {
    console.log(value);
  }

}
