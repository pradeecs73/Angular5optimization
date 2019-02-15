import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-localreference',
  templateUrl: './localreference.component.html',
  styleUrls: ['./localreference.component.css']
})
export class LocalreferenceComponent implements OnInit {

  @ViewChild("ServerViewChildInputElement") serverviewchildinputelement:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  localreference(nameInput:HTMLInputElement){
    console.log(nameInput.value)
  }

  viewchild(){
     console.log(this.serverviewchildinputelement.nativeElement.value);
  }

}
