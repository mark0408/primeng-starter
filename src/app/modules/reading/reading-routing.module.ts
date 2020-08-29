import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReadingComponent } from './reading.component';

const readingRoutes: Routes = [
  {
    path: '',
    component: ReadingComponent,
    children: [
      {
        path: 'book',
        loadChildren: () => import('./book/book.module').then(m => m.BookModule), 
        data: {
          breadcrumb: 'book',
        },

      }, {
        path: 'author',
        loadChildren: () => import('./author/author.module').then(m => m.AuthorModule), 
        data: {
          breadcrumb: 'author',
        },

      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(readingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReadingRoutingModule { }