import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShortenPipe } from './shorten.pipe';
import { FilterarrayPipe } from './filterarray.pipe';

@NgModule({
  declarations: [ShortenPipe, FilterarrayPipe],
  imports: [CommonModule, FormsModule],
  exports: [ShortenPipe, FilterarrayPipe]
})
export class ShortenpipeoptimizeModule {}
