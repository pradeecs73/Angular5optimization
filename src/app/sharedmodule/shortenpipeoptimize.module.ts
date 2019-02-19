
import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ShortenPipe} from './shorten.pipe';



@NgModule({
  declarations: [ 
    ShortenPipe  
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
 exports:[ShortenPipe]

})
export class ShortenpipeoptimizeModule { }
