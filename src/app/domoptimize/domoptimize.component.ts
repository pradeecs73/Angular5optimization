import { Component, OnInit,ChangeDetectorRef,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-domoptimize',
  templateUrl: './domoptimize.component.html',
  styleUrls: ['./domoptimize.component.css']
})
export class DomoptimizeComponent implements OnInit,AfterViewInit {
    mysample: any = "<b>sample for</b> <span style='color:red'><h1><u>eerert</u></h1></span><a href='https://www.google.com'>hyper</a>";
  constructor(private changescdr:ChangeDetectorRef) { }

  ngOnInit() {

  }

  ngAfterViewInit(){
     this.changescdr.detectChanges();
  }

}
