import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShortenPipe } from './shorten.pipe';
import {DomOptimize} from './domoptimize.pipe';
import { FilterarrayPipe } from './filterarray.pipe';

@NgModule({
  declarations: [ShortenPipe, FilterarrayPipe,DomOptimize],
  imports: [CommonModule, FormsModule],
  exports: [ShortenPipe, FilterarrayPipe,DomOptimize]
})
export class ShortenpipeoptimizeModule {}
