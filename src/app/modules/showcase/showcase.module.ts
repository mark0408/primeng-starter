import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ShowcaseRoutingModule } from './showcase-routing.module';

import { ShowcaseComponent } from './showcase.component';
import { HomeComponent } from './components/home/home.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { CarService } from '../../core/services/carservice';
import { CountryService } from '../../core/services/countryservice';
import { EventService } from '../../core/services/eventservice';
import { NodeService } from '../../core/services/nodeservice';
import { IconService } from '../../core/services/iconservice';
import { CustomerService } from '../../core/services/customerservice';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    ShowcaseComponent,
    HomeComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ShowcaseRoutingModule,
    HttpClientModule,
  //  BrowserAnimationsModule,
    AutoCompleteModule, 
    CoreModule
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      CarService,CountryService,EventService,NodeService,IconService,CustomerService
  ]
})
export class ShowcaseModule { }
