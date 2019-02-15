import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userNamePattern="^[0-9]{12}$"

  constructor(private router:Router) {
    if(localStorage.getItem("loggedIn") == "1")
    {
       this.router.navigate(['/dashboard/main']);
    }

  }

  ngOnInit() {
  }

  onSubmit(form:NgForm)
  {
    if(form.value.username == "012345678910" && form.value.password == "012345678910")
    {
      localStorage.setItem("loggedIn","1");
      this.router.navigate(['/dashboard/main']);
    }
    else
    {
      alert("wrong credentials");
    }
       
  }

}
