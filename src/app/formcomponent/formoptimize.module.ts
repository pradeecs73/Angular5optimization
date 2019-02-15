
import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import {FormconfigModule} from './formconfig.module';
import {FormsModule} from '@angular/forms';



import { FormcomponentComponent } from './formcomponent.component';



@NgModule({
  declarations: [ 
    FormcomponentComponent  
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormconfigModule
  ]

})
export class FormoptimizeModule { }
