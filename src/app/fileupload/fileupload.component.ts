import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpParams,HttpRequest,HttpEvent,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HttpClientModule} from '@angular/common/http';
import {Headers} from '@angular/http';

declare var $:any;
let fileobjectcopyinstance:any;

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  selectedFiles:File[];
  uploadRequest:any={};

  constructor() { 
    fileobjectcopyinstance=this;
  } //For file upload http is HttpClient

  ngOnInit() {

  }

  selectFile(event)
  {
    console.log(event);
    this.selectedFiles=event.target.files;
  }

  upload(){
    const headers=new HttpHeaders({'Content-Type':''});

    const files:FormData=new FormData();
    let applicationId="1";
    let requestorId="2";
    let requestorNmae="vijay";

      for(let j=0;j<this.selectedFiles.length;j++){
        console.log("file"+this.selectedFiles.length);
        console.log("filename"+this.selectedFiles[j].name);
        files.append('files',this.selectedFiles[j],this.selectedFiles[j].name);

      }

      let params=new HttpParams();
      this.uploadRequest.applicationId=applicationId;
      this.uploadRequest.requestorId=requestorId;
      this.uploadRequest.requestorNmae=requestorNmae;

      files.append('uploadRequest',JSON.stringify(this.uploadRequest));
      console.log(files);

     // const req= new HttpRequest("POST",'/pwt/uploadfile',files,{headers:headers});
             //  return this.http.request(req);


  }

}
