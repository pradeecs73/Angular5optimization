import {Routes} from '@angular/router';
import { NgModule,APP_INITIALIZER} from '@angular/core';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './dashboard/main/main.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './parentcomponent/childcomponent/childcomponent.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { PopupmodalComponent } from './popupmodal/popupmodal.component';
import { RoutenotfoundComponent } from './routenotfound/routenotfound.component';
import { ReadfromfileComponent } from './readfromfile/readfromfile.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { RoutingcomponentComponent } from './routingcomponent/routingcomponent.component';
import { RoutingparametercomponentComponent } from './routingparametercomponent/routingparametercomponent.component';
import { SimpleobservableComponent } from './simpleobservable/simpleobservable.component';
import { ObservablemethodsComponent } from './observablemethods/observablemethods.component';
import { LocalreferenceComponent } from './localreference/localreference.component';
import {AuthGuard} from './auth-guard.service';


 const appRoutes:Routes=[

{path:'',redirectTo:'/login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'dashboard',
component:DashboardComponent,
canActivate:[AuthGuard],
canActivateChild:[AuthGuard],
children:[
  {path:'main',component:MainComponent}
]
},
{path:'parent',component:ParentcomponentComponent,children:[
  {path:'child',component:ChildcomponentComponent}
]
},
//{path:'form',component:FormcomponentComponent},
{path:'popup',component:PopupmodalComponent},
{path:'readfromfile',component:ReadfromfileComponent},
{path:'fileupload',component:FileuploadComponent},
{path:'routecomponent',component:RoutingcomponentComponent},
{path:'routeparametercomponent/:id',component:RoutingparametercomponentComponent},
{path:'simpleobservable',component:SimpleobservableComponent},
{path:'observablemethod',component:ObservablemethodsComponent},
{path:'localreference',component:LocalreferenceComponent}
//{path:'**',component:RoutenotfoundComponent}

];

@NgModule({
  
  imports: [
   RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
 
})

export class RouteConfigModule{}