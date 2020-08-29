import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author.component';
import { AuthorAddComponent } from './author-add/author-add.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorRoutingModule } from './author-routing.module';



@NgModule({
  declarations: [AuthorComponent, AuthorAddComponent, AuthorEditComponent, AuthorDetailsComponent, AuthorListComponent],
  imports: [
    CommonModule, 
    AuthorRoutingModule
  ]
})
export class AuthorModule { }
