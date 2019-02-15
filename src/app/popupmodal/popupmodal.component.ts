import { Component, OnInit,DoCheck,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-popupmodal',
  templateUrl: './popupmodal.component.html',
  styleUrls: ['./popupmodal.component.css']
})
export class PopupmodalComponent implements OnInit {
  user:any=[{"name":"pradeep"},{"name":"prasad"},{"name":"suresh"},{"name":"ramesh"}];
  viewRule:any="none";
  loginusername:any="suresh";

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck()
  {
    if(this.loginusername == "ramesh")
    {
      console.log("value");
    }
  }

  openPopup(){
    this.viewRule="block";
  }

  closePopup(){
    this.viewRule="none";
  }

  changeLoginusername(){
    this.loginusername="ramesh";
  }

  myTextfieldvaluechange(value)
  {
    console.log(value);
  }

}
