import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, 
  CanActivateChild, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';

@Injectable()
export class AuthGuard implements CanActivate,CanDeactivate<FormcomponentComponent>,CanActivateChild {
  authenticated: any;
  constructor(private authservice: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authenticated = this.authservice.isAuthenticated();

    if (this.authenticated) {
      return true;
    } else {
      this.router.navigate(['']);
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }

  canDeactivate(component:FormcomponentComponent,route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean 
  {
    console.log("can deactivate")
    if(component.templatedrivenformstatus.dirty)
    {
         console.log("inside if")
         return confirm("Are you sure you want to discard your changes ?");
    }
     return true;
  }

}
