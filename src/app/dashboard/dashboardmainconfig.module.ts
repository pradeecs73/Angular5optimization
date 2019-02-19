import {Routes} from '@angular/router';
import { NgModule,APP_INITIALIZER} from '@angular/core';
import {RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { RoutenotfoundComponent } from './../routenotfound/routenotfound.component';
import {AuthGuard} from './../auth-guard.service';




const dashboardmainRoutes:Routes=[

          {path:'dashboard',
        component:DashboardComponent,
        canActivate:[AuthGuard],
        canActivateChild:[AuthGuard],
        children:[
          {path:'main',component:MainComponent}
        ]
},

];

@NgModule({
  
  imports: [
   RouterModule.forChild(dashboardmainRoutes)
  ],
  exports:[RouterModule]
 
})

export class DashboarmaincongigModule{}