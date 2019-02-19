import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import {DashboarmaincongigModule} from './dashboardmainconfig.module';
import {FormsModule} from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import {ShortenpipeoptimizeModule} from './../sharedmodule/shortenpipeoptimize.module';



@NgModule({
  declarations: [ 
    DashboardComponent,
    MainComponent  
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboarmaincongigModule,
    ShortenpipeoptimizeModule
  ]

})
export class DashboardmainoptimizeModule { }