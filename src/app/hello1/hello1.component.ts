import { Component, OnInit ,Input,AfterContentInit,ContentChild,SimpleChanges} from '@angular/core';
import { Hello2Component } from './../hello2/hello2.component';

@Component({
  selector: 'app-hello1',
  templateUrl: './hello1.component.html',
  styleUrls: ['./hello1.component.css']
})
export class Hello1Component implements OnInit,AfterContentInit{

  @Input() child2data: string;
  @ContentChild(Hello2Component) hello2ContenChild: Hello2Component;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log(this.hello2ContenChild.name)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
