import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user:any=[{"name":"pradeep"},{"name":"prasad"},{"name":"suresh"},{"name":"ramesh"}];
  someArray:any=[1,2,3,4,5];
  constructor(private router:Router) { }

  ngOnInit() {
    this.someArray.forEach((item,index)=>{
        console.log(item);
    });
  }

  /*saveUsers(){
    this.prospectsservice.saveUsersList({}) 
    .subscribe((response)=>{console.log(response)},
    (error)=>{console.log(error)}
    );
  }*/

  /*this.prospectsservice.getAllUsers() 
    .subscribe((alluserlist:any)=>
    {
       this.alluserlist=alluserlist;
    },
    (error)=>{console.log(error)}
    );*/

    /*this.prospectsservice.deletedocument({}) 
    .subscribe((response)=>{console.log(response)},
    (error)=>{console.log(error)}
    );*/

  logout(){
    localStorage.setItem("loggedIn","0");
    this.router.navigate(['/login']);
  }

}
