import { Component, OnInit,OnDestroy,Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class observableservice{

    constructor(){}

    useridreceivedfromcomponent=new Subject();

}
