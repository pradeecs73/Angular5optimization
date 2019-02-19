import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/Http';
import {HttpClientModule} from '@angular/common/http';
import {RouteConfigModule} from './routeconfig.module';
import {FormoptimizeModule} from './formcomponent/formoptimize.module';
import {DashboardmainoptimizeModule} from './dashboard/dashboardmainoptimize.module';
import {ShortenpipeoptimizeModule} from './sharedmodule/shortenpipeoptimize.module';


import { AppComponent } from './app.component';
import {configservice} from './config.service';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
import {observableservice} from './observable.service';
import { LoginComponent } from './login/login.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './parentcomponent/childcomponent/childcomponent.component';
import { PopupmodalComponent } from './popupmodal/popupmodal.component';
import { RoutenotfoundComponent } from './routenotfound/routenotfound.component';
import { ReadfromfileComponent } from './readfromfile/readfromfile.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { RoutingcomponentComponent } from './routingcomponent/routingcomponent.component';
import { RoutingparametercomponentComponent } from './routingparametercomponent/routingparametercomponent.component';
import { SimpleobservableComponent } from './simpleobservable/simpleobservable.component';
import { ObservablemethodsComponent } from './observablemethods/observablemethods.component';
import { CommoncomponentComponent } from './commoncomponent/commoncomponent.component';
import { LocalreferenceComponent } from './localreference/localreference.component';


export function init_app(configservice:configservice){
   return ()=> configservice.initializeURL();
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ParentcomponentComponent,
    ChildcomponentComponent,
    PopupmodalComponent,
    RoutenotfoundComponent,
    ReadfromfileComponent,
    FileuploadComponent,
    RoutingcomponentComponent,
    RoutingparametercomponentComponent,
    SimpleobservableComponent,
    ObservablemethodsComponent,
    CommoncomponentComponent,
    LocalreferenceComponent
  ],
  imports: [
   
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouteConfigModule,
    DashboardmainoptimizeModule,
    FormoptimizeModule,
    ShortenpipeoptimizeModule
   
  ],
  providers: [configservice,{provide:APP_INITIALIZER,useFactory:init_app,deps:[configservice],multi:true},AuthService,AuthGuard,observableservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
