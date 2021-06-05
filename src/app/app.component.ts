import { Component ,OnInit} from '@angular/core';
import {Event,NavigationEnd,NavigationStart,Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app';

  constructor(private router: Router) {
         router.events.subscribe((routerEvent:Event)=>{

          if(routerEvent instanceof NavigationStart){

          }

          if(routerEvent instanceof NavigationEnd)
          {
            
          }
           
        
         });
    }

    ngOnInit(){

     }





}
