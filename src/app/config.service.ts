import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/Http';
import {HttpClient,HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class configservice{
    private Urldata:any;
    private checkvariable:any;
    constructor(private http:Http){
    }

    initializeURL()
    {
        return this.http.get("./../assets/constants.json")
        .map(
            (jsonurl:any)=>
            jsonurl        
        ).toPromise()
         .then((data:any) => {
          this.checkvariable="sample user loading from app initializer";
          this.Urldata=data.json();
         }).catch((err:any) => Promise.resolve());
    }

    getInitialSampleData()
    {
       return this.checkvariable;
    }

    getUrlData(){
         return this.Urldata;
    }

    /*fileupload(file:File[]):Observable<HttpEvent<{}>>
    {
      return "sampledata";
    }*/

    /*saveUsersList(saveRequestUsers:any)
    {
       return this.http.post(this.urlobjectfromfile.saveuserlist,saveRequestUsers);
    }*/

    /*getAllUsers(){
        return this.http.get(this.urlobjectfromfile.getallusers)
        .map(
           (response:Response)=>{
              const alluserlist=response.json();
              return alluserlist;
           }
        );
    }*/

   /*deletedocument(deletedocumentobject){
      return this.http.put(this.urlobjectfromfile.deletedocument,deletedocumentobject);
   }*/

}