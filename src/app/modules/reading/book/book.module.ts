import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book.component';
import { BookRoutingModule } from './book-routing.module';



@NgModule({
  declarations: [ BookAddComponent, 
    BookEditComponent, 
    BookListComponent, 
    BookDetailsComponent, 
    BookComponent],
  imports: [
    CommonModule, 
    BookRoutingModule
  ]
})
export class BookModule { }
