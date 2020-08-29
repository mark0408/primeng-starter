import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowcaseModule } from './modules/showcase/showcase.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MouseDirective } from './shared/directives/mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    MouseDirective,
  ],
  imports: [
    BrowserModule, 
    ShowcaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
