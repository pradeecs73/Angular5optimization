import {Routes} from '@angular/router';
import { NgModule,APP_INITIALIZER} from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormcomponentComponent } from './formcomponent.component';
import { RoutenotfoundComponent } from './../routenotfound/routenotfound.component';




const formRoutes:Routes=[

{path:'form',component:FormcomponentComponent},
{path:'**',component:RoutenotfoundComponent}

];

@NgModule({
  
  imports: [
   RouterModule.forChild(formRoutes)
  ],
  exports:[RouterModule]
 
})

export class FormconfigModule{}