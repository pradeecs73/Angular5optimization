import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import { observableservice } from './../observable.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { pipe} from 'rxjs';
import { map,switchMap,first,tap,share} from 'rxjs/operators';
import { observableToBeFn } from 'rxjs/testing/TestScheduler';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';


@Component({
  selector: 'app-observablemethods',
  templateUrl: './observablemethods.component.html',
  styleUrls: ['./observablemethods.component.css']
})
export class ObservablemethodsComponent implements OnInit, OnDestroy {
  customsubscription: Subscription;

  constructor(private observableservice: observableservice, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const myobservable = Observable.create((observerobject: Observer<any>) => {
      setTimeout(() => {
        observerobject.next([1,2,3,4]);   
      }, 2000);

      /*setTimeout(() => {
        observerobject.next('second package');
      }, 4000);*/

      /*setTimeout(()=>{
         observerobject.error("this does not work");
      },4000);*/

      setTimeout(() => {
        observerobject.complete();
      }, 7000);
    });

    this.customsubscription = myobservable.subscribe(
      (data:any) => {
        const myobservabledata=(Observable.of(1,2,3,4));
        const source = Observable.from([
          { name: 'Joe', age: 30 },
          { name: 'Frank', age: 20 },
          { name: 'Ryan', age: 50 }
        ]);

        const source1 = Observable.from([
          { name1: 'Joe', age: 30 },
          { name1: 'Frank', age: 20 },
          { name1: 'Ryan', age: 50 }
        ]).pipe(share());

        const example = source.pipe(
          switchMap(mydata => {

            return source1.pipe(
              tap(mydata1=>{
                console.log(mydata);
                console.log(mydata1);
              })
            )
          
          }));
     
      example.subscribe();
        
        myobservable.pipe(
           map((x:any )=> x * x)(myobservabledata).subscribe((v) => console.log(`value: ${v}`)),
           first()(myobservabledata).subscribe((v) => console.log(`firstvalue: ${v}`))
        );  

      },
      (error: String) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  passId(id: String) {
    this.observableservice.useridreceivedfromcomponent.next(id);
    this.observableservice.changeMessage('Hello from Sibling');
    this.router.navigate(['/popup'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.customsubscription.unsubscribe();
  }
}
