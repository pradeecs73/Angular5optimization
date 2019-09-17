import { Component, OnInit ,AfterViewInit} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.css']
})
export class CorouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $(".carousel").carousel();
  }

}
