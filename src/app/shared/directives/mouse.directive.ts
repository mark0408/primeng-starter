import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouse]'
})
export class MouseDirective {
  targetElement: string = "";
  constructor() { }
  @HostListener('window:click', ['$event.target']) onClick(targetElement: string) {
    this.targetElement = targetElement; 
    console.log(`You clicked on`, targetElement);
  }

}

