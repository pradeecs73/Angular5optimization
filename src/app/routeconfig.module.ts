import {Routes} from '@angular/router';
import { NgModule,APP_INITIALIZER} from '@angular/core';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PopupmodalComponent } from './popupmodal/popupmodal.component';
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
{path:'parent',loadChildren:'./parentcomponent/parentchildoptimize.module#ParentchildoptimizeModule'},
{path:'popup',component:PopupmodalComponent},
{path:'readfromfile',component:ReadfromfileComponent},
{path:'fileupload',component:FileuploadComponent},
{path:'routecomponent',component:RoutingcomponentComponent},
{path:'routeparametercomponent/:id',component:RoutingparametercomponentComponent},
{path:'observablemethod',component:ObservablemethodsComponent},
{path:'localreference',component:LocalreferenceComponent}

];

@NgModule({
  
  imports: [
   RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
 
})

export class RouteConfigModule{}