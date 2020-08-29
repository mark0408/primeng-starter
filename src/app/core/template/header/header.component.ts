import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  resourcesMenuVisible: boolean = false;
  versionsMenuVisible: boolean = false
  templatesMenuVisible: boolean = false;
  themesMenuVisible: boolean = false;
  asideMenuIsVisible: boolean = true;
  @Output() asideMenuVisible = new EventEmitter<boolean>();
  @Output() messageToEmit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onMenuButtonClick($event) {
    if (this.asideMenuIsVisible)
      this.asideMenuIsVisible = false;
    else
      this.asideMenuIsVisible = true;
    this.messageToEmit.emit(this.asideMenuIsVisible)
  }

  onThemesMenuClick($event) {
    if (this.themesMenuVisible) {
      this.themesMenuVisible = false;
      return
    }
    this.resourcesMenuVisible = false;
    this.versionsMenuVisible = false;
    this.templatesMenuVisible = false;
    this.themesMenuVisible = true;

  }

  onResourcesMenuClick($event) {
    if (this.resourcesMenuVisible) {
      this.resourcesMenuVisible = false;
      return
    }
    this.resourcesMenuVisible = true;
    this.versionsMenuVisible = false;
    this.templatesMenuVisible = false;
    this.themesMenuVisible = false;
  }

  onTemplatesMenuClick($event) {
    if (this.templatesMenuVisible) {
      this.templatesMenuVisible = false;
      return
    }
    this.versionsMenuVisible = false;
    this.resourcesMenuVisible = false;
    this.templatesMenuVisible = true;
    this.themesMenuVisible = false;
  }

  onVersionsMenuClick($event) {
    if (this.versionsMenuVisible) {
      this.versionsMenuVisible = false;
      return
    }
    this.resourcesMenuVisible = false;
    this.versionsMenuVisible = true;
    this.templatesMenuVisible = false;
    this.themesMenuVisible = false;
  }

  @Input() public set categoryId(categoryId: any) {
    if (categoryId !== "btn-header-catcher") {
      this.resourcesMenuVisible = false;
      if (categoryId.includes("topbar-submenu-versions-header"))
        this.versionsMenuVisible = true;
      else
        this.versionsMenuVisible = false;
      this.templatesMenuVisible = false;
      this.themesMenuVisible = false;
    }
  }
}
