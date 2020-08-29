import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadingComponent } from './reading.component';
import { ReadingRoutingModule } from './reading-routing.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [ReadingComponent,],
  imports: [
    CommonModule, 
    ReadingRoutingModule,
    CoreModule
    
  ]
})
export class ReadingModule { }
