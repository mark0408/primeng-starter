import { Component, HostListener } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  asideMenuIsVisibleFromHeader: boolean;
  asideMenuIsVisibleFromP: boolean = true;
  elementClicked: string = "";
  targetElement: string;
  constructor() { }

  ngOnInit() {
  }

  getMessage(message: boolean) {
    this.asideMenuIsVisibleFromP  = message ;
    this.asideMenuIsVisibleFromHeader = message;
  }

  @HostListener('click', ['$event.target.className']) onClick(targetElement: any) {
    this.elementClicked = targetElement; 
    this.targetElement = targetElement; 
  }

}
