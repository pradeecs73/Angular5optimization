import { Component, OnInit,OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/Rx';
import {observableservice} from './../observable.service';
import {Subscription} from 'rxjs/Subscription';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-observablemethods',
  templateUrl: './observablemethods.component.html',
  styleUrls: ['./observablemethods.component.css']
})
export class ObservablemethodsComponent implements OnInit,OnDestroy {
    customsubscription:Subscription;

  constructor(private observableservice:observableservice,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {

    const myobservable=Observable.create((observerobject:Observer<String>)=>{

      setTimeout(()=>{
         observerobject.next("first Package");
      },2000);

      setTimeout(()=>{
         observerobject.next("second package");
      },4000);

       /*setTimeout(()=>{
         observerobject.error("this does not work");
      },4000);*/

      setTimeout(()=>{
         observerobject.complete();
      },7000);

    });


    this.customsubscription=myobservable.subscribe(
      (data:String)=>{console.log(data)},
      (error:String)=>{console.log(error)},
      ()=>{console.log("completed")}
      
    );

  }

  passId(id:String){
     this.observableservice.useridreceivedfromcomponent.next(id);
      this.observableservice.changeMessage("Hello from Sibling")
     this.router.navigate(['/popup'],{relativeTo:this.route});
  }

  ngOnDestroy() {
     this.customsubscription.unsubscribe();
  }

}
