import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { CourseComponent } from './course/course.component';



@NgModule({
  declarations: [TrainingComponent, CourseComponent],
  imports: [
    CommonModule
  ]
})
export class TrainingModule { }
