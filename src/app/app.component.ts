import { Component ,ViewChild,AfterViewInit,ElementRef} from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { Hello1Component } from './hello1/hello1.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  name:any = 'Angular';
  child2data:any="mydata";
  @ViewChild(HelloComponent) hello: HelloComponent;
  @ViewChild('pRef') pRef: ElementRef;
  @ViewChild(Hello1Component) hello1: Hello1Component;


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
