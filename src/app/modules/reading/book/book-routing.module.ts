import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookComponent } from './book.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent,
    data: {
      breadcrumb: null,
    },
    children: [
      {
        path: '',
        component: BookListComponent,
        data: {
          breadcrumb: null,
        },
      },      
      {
        path: 'new',
        component: BookAddComponent,
        data: {
          breadcrumb: 'new',
        },
      },
      {
        path: ':id', 
        data: {
          breadcrumb: 'xx',
        },
        children:[   
          {
            path: '',
            component: BookDetailsComponent,            
        data: {
          breadcrumb: null,
        },
          },
          {
            path: 'edit',
            component: BookEditComponent, 
            data: {
              breadcrumb: 'edit',
            },
          },
        ]
      },
    ]
  }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(bookRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BookRoutingModule { }