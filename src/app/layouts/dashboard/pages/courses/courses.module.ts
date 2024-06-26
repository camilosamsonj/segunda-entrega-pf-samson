import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module'; 
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { CoursesDetailComponent } from './pages/courses-detail/courses-detail.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [CoursesComponent, CoursesDialogComponent, CoursesDetailComponent],
  imports: [

    CommonModule,
    SharedModule,
    CoursesRoutingModule,

  ],
  exports: [
    CoursesComponent,
  ]
})
export class CoursesModule { }

