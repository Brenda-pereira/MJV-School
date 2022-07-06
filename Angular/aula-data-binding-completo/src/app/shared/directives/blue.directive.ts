import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlue]'
})
export class BlueDirective {

  constructor(elementRef: ElementRef) { 
    console.log(elementRef);
    elementRef.nativeElement.style.color= 'blue';
  }

}
