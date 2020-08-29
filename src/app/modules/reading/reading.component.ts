import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // custom codes

  asideMenuIsVisibleFromHeader: boolean;
  asideMenuIsVisibleFromP: boolean = true;
  elementClicked: string = "";
  targetElement: string;

  getMessage(message: boolean) {
    this.asideMenuIsVisibleFromP  = message ;
    this.asideMenuIsVisibleFromHeader = message;
  }

  @HostListener('click', ['$event.target.className']) onClick(targetElement: any) {
    this.elementClicked = targetElement; 
    this.targetElement = targetElement; 
  }


}
