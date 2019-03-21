import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {configservice} from './../config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userNamePattern="^[0-9]{12}$";
  loginrequest:any={};

  constructor(private router:Router,private configservice:configservice) {
    if(localStorage.getItem("loggedIn") == "1")
    {
       this.router.navigate(['/dashboard/main']);
    }

  }

  ngOnInit() {
  }

  onSubmit(form:NgForm)
  {

    this.loginrequest.email="abhijith@gmail.com";
    this.loginrequest.password="abhijith";

    /*if(form.value.username == "012345678910" && form.value.password == "012345678910")
    {
      localStorage.setItem("loggedIn","1");
      this.router.navigate(['/dashboard/main']);
    }
    else
    {
      alert("wrong credentials");
    }*/

     this.configservice.login(this.loginrequest) 
        .subscribe((response)=>{
             if(response.json().result < 1)
                {                                        
                  alert("wrong credentials");
                }
                else{
                    localStorage.setItem("loggedIn","1");
                     this.router.navigate(['/dashboard/main']);
                }
              
      },
        (error)=>{console.log(error)}
        );
       
  }

}
