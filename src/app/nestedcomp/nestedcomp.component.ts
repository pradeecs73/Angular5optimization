import { Component ,OnInit,ViewChild,AfterViewInit,ElementRef} from '@angular/core';
import { HelloComponent } from './../hello/hello.component';
import { Hello1Component } from './../hello1/hello1.component';
import {Event,NavigationEnd,NavigationStart,Router} from '@angular/router';

@Component({
  selector: 'app-nestedcomp',
  templateUrl: './nestedcomp.component.html',
  styleUrls: ['./nestedcomp.component.css']
})
export class NestedcompComponent implements AfterViewInit {

  name:any = 'Angular';
  child2data:any="mydata";
  @ViewChild(HelloComponent) hello: HelloComponent;
  @ViewChild('pRef') pRef: ElementRef;
  @ViewChild(Hello1Component) hello1: Hello1Component;

  constructor() {

  }

  ngAfterViewInit(){
    console.log(this.pRef.nativeElement.innerHTML); 
    console.log(this.hello.name);
    console.log(this.hello1.child2data)
  }

  myChildData(childdata: String) {
      this.name=childdata;
      this.child2data=childdata;
  }
}
