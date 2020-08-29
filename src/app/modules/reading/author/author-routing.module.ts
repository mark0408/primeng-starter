import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthorComponent } from './author.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorAddComponent } from './author-add/author-add.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';

const authorRoutes: Routes = [
  {
    path: '',
    component: AuthorComponent,
    data: {
      breadcrumb: null,
    },
    children: [
      {
        path: '',
        component: AuthorListComponent,
        data: {
          breadcrumb: null,
        },
      },      
      {
        path: 'new',
        component: AuthorAddComponent,
        data: {
          breadcrumb: 'new',
        }, 
        children: [
          {
            path: 'book',
            loadChildren: () => import('../book/book.module').then(m => m.BookModule), 
            data: {
              breadcrumb: 'book',
            },
    
          }
        ]
      },
      {
        path: ':id', 
        data: {
          breadcrumb: 'xx',
        },
        children:[   
          {
            path: '',
            component: AuthorDetailsComponent,            
        data: {
          breadcrumb: null,
        }, 
          },
          {
            path: 'edit',
            component: AuthorEditComponent, 
            data: {
              breadcrumb: 'edit',
            }, 
            children: [
              {
                path: 'book',
                loadChildren: () => import('../book/book.module').then(m => m.BookModule), 
                data: {
                  breadcrumb: 'book',
                },
        
              }
            ]
          },
          
        ]
      },
    ]
  }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(authorRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthorRoutingModule { }