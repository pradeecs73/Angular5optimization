import { Component, OnInit ,Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {configservice} from './../../config.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 // user:any=[{"name":"pradeep"},{"name":"prasad"},{"name":"suresh"},{"name":"ramesh"}];
  user:any=[];
  someArray:any=[1,2,3,4,5];
  alluserlist:any;
  constructor(private router:Router,private configservice:configservice) { 


  }

  ngOnInit() {
    this.someArray.forEach((item,index)=>{
        console.log(item);
    });

    this.configservice.getAllUsers() 
    .subscribe((alluserlist:any)=>
    {
       this.user=alluserlist;
    },
    (error)=>{console.log(error)}
    );

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
