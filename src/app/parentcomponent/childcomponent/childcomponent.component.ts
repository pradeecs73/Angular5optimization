import { Component, EventEmitter,OnInit,Input,Output,OnChanges,SimpleChanges } from '@angular/core';
import {ParentcomponentComponent} from '../parentcomponent.component';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
  @Input() valuefromtheparent:any;
  @Output() valuefromthechild= new EventEmitter<String>();

  constructor(parentcomponent:ParentcomponentComponent) {
      console.log("value from the parent component"+parentcomponent);
   }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
  }

  passdata(childdata:String)
  {
     this.valuefromthechild.emit(childdata);
  }

}
