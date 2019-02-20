import { Component, OnInit,OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-simpleobservable',
  templateUrl: './simpleobservable.component.html',
  styleUrls: ['./simpleobservable.component.css']
})
export class SimpleobservableComponent implements OnInit,OnDestroy {
    customsubscription:Subscription;

  constructor() { }

  ngOnInit() {
     const mynumbers=Observable.interval(1000);
     this.customsubscription=mynumbers.subscribe((number:number)=>{
          console.log(number);
     });
  }

  ngOnDestroy(){
     this.customsubscription.unsubscribe();
  }

}
