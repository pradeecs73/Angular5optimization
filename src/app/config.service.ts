import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/Http';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class configservice {
  private Urldata: any;
  private checkvariable: any;
  constructor(private http: Http,private HttpClient: HttpClient) {}

  initializeURL() {
    return this.http
      .get('./../assets/constants.json')
      .map((jsonurl: any) => jsonurl)
      .toPromise()
      .then((data: any) => {
        this.checkvariable = 'sample user loading from app initializer';
        this.Urldata = data.json();
      })
      .catch((err: any) => Promise.resolve());
  }

  getInitialSampleData() {
    return this.checkvariable;
  }

  getUrlData() {
    return this.Urldata;
  }

  getAllUsers() {
    console.log('inside get all records calling fifth time');
    const headers = new Headers({});

    return this.http.get('http://localhost:3000/api/getallRecords').map((response: Response) => {
      const alluserlist = response.json();
      return alluserlist;
    });
  }

  login(saveRequestUsers: any) {
    return this.http.post('http://localhost:3000/signin', saveRequestUsers);
  }

  getallposts() {
    return this.HttpClient.get('https://jsonplaceholder.typicode.com/posts').map((response: Response) => {
      const alluserlist = response.json();
      return alluserlist;
    });
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
