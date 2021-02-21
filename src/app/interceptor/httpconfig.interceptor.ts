import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { pipe,Observable} from 'rxjs';
import { map, catchError,tap} from 'rxjs/operators';

@Injectable()//{providedIn: 'root'}

export class InterceptService  implements HttpInterceptor {

	constructor() { }

	// intercept request and add token
  	intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

    	// modify request
	    request = request.clone({ headers: request.headers.set('Authorization', '12345') });
	   
	   	console.log("----request----");

	 	console.log(request);

	 	console.log("--- end of request---");
 

	    return next.handle(request)
	    .pipe(
	        tap(event => {
	          if (event instanceof HttpResponse) {
	             
	            console.log(" all looks good");
	            // http response status code
	            console.log(event.status);
	          }
	        }, error => {
	   			// http response status code
	          	console.log("----response----");
	          	console.error("status code:");
	          	console.error(error.status);
	          	console.error(error.message);
	          	console.log("--- end of response---");

	        })
	      )

    };
  
 
}
