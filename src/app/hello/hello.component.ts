import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input() name: string;
  @Output() valuefromthechild = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  
  passdata(childdata: string) {
    this.valuefromthechild.emit(childdata);
  }

}
