import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/Http';
import { HttpClientModule } from '@angular/common/http';
import { RouteConfigModule } from './routeconfig.module';
import { FormoptimizeModule } from './formcomponent/formoptimize.module';
import { DashboardmainoptimizeModule } from './dashboard/dashboardmainoptimize.module';
import { ShortenpipeoptimizeModule } from './sharedmodule/shortenpipeoptimize.module';
import { CoreModule } from './coremodule/core.module';

import { AppComponent } from './app.component';
import { configservice } from './config.service';
import { LoginComponent } from './login/login.component';
import { PopupmodalComponent } from './popupmodal/popupmodal.component';
import { RoutenotfoundComponent } from './routenotfound/routenotfound.component';
import { ReadfromfileComponent } from './readfromfile/readfromfile.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { RoutingcomponentComponent } from './routingcomponent/routingcomponent.component';
import { RoutingparametercomponentComponent } from './routingparametercomponent/routingparametercomponent.component';
import { ObservablemethodsComponent } from './observablemethods/observablemethods.component';
import { LocalreferenceComponent } from './localreference/localreference.component';
import { CorouselComponent } from './corousel/corousel.component';

export function init_app(configservice: configservice) {
  return () => configservice.initializeURL();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PopupmodalComponent,
    RoutenotfoundComponent,
    ReadfromfileComponent,
    FileuploadComponent,
    RoutingcomponentComponent,
    RoutingparametercomponentComponent,
    ObservablemethodsComponent,
    LocalreferenceComponent,
    CorouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    CoreModule,
    RouteConfigModule,
    DashboardmainoptimizeModule,
    FormoptimizeModule,
    ShortenpipeoptimizeModule
  ],
  providers: [configservice, { provide: APP_INITIALIZER, useFactory: init_app, deps: [configservice], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
