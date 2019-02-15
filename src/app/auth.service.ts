import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/Http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

export class AuthService
{
    myLoginValue:any;

    constructor()
    {

    }

    isAuthenticated()
    {
        this.myLoginValue=localStorage.getItem("loggedIn");
        return(this.myLoginValue == "1");        
    }
}