import { Component, OnInit ,Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {configservice} from './../../config.service';
declare var $:any;



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userarray:any=[{"name":"pradeep"},{"name":"prasad"},{"name":"suresh"},{"name":"ramesh"}];
  user:any=[];
  someArray:any=[1,2,3,4,5];
  alluserlist:any;
  mysample:any="<b>sample for</b> <h1><u>eerert</u></h1>";
  ratingvalue:any=4;

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

  changerating(rating){
  
      const starTotal = 5;
      const starPercentage = (rating / starTotal) * 100;   
      const starPercentageRounded = `${((starPercentage / 10) * 10)}%`;
      
     return starPercentageRounded;

  }

  changerating1(){
    this.ratingvalue=2;
  }

}
