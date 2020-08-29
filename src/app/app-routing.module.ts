import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Component } from '@fullcalendar/core';
import { ShowcaseComponent } from './modules/showcase/showcase.component';

const appRoutes: Routes = [
    {    
       path: 'cases',
       data: {
         breadcrumb: 'Cases'
        },
       loadChildren: () => import('./modules/showcase/showcase.module').then(m => m.ShowcaseModule),
    }, 
    {    
      path: 'reading',
      data: {
        breadcrumb: 'Reading',
      },
      loadChildren: () => import('./modules/reading/reading.module').then(m => m.ReadingModule),
   }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  