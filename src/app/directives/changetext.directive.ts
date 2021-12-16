import { Directive, ElementRef} from '@angular/core';
import { HostListener,HostBinding } from '@angular/core';
@Directive({
   selector: '[appChangeText]'
})
export class ChangeTextDirective {
    myelement:any;
   constructor(Element: ElementRef) {
      this.myelement=Element;
      Element.nativeElement.innerText = "Text is changed by changeText Directive. ";
      Element.nativeElement.style.color = "green";
   }

   @HostBinding('style.backgroundColor') color;

   /*@HostListener('click') onclick() {
      this.color = "red";			    	
   }*/

   @HostListener('click',['$event.target']) 

   public onClick(target){
      console.log(target);
      this.color = "red";	
   }

}