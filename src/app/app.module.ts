import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { BookComponent } from './book/book.component';
import { CoursesService } from './courses/courses.services';


@NgModule({
  declarations: [
    AppComponent,
   CoursesComponent,
   BookComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
