import { PipeTransform, Pipe, Injectable } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'parsehtml'
})
@Injectable()
export class DomOptimize implements PipeTransform {
  constructor(private DomSanitizer:DomSanitizer){}
  transform(value: any) {
    return this.DomSanitizer.bypassSecurityTrustHtml(value);
  }
}
