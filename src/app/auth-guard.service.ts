import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,CanActivateChild} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
     authenticated:any;
     constructor(private authservice:AuthService,private router:Router)
     {

     } 

     canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
     {
        this.authenticated=this.authservice.isAuthenticated();
        if(this.authenticated)
          {
            return true;
          }
          else
          {
              this.router.navigate(['']);
          }
     }

     canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
     {
        return this.canActivate(route,state);
     }


}
