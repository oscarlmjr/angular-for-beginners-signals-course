import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Courses } from './courses/courses';
import { Course, CourseCategory } from './model/course';
import { CourseCard } from './course-card/course-card';
import { MOCK_COURSES } from './shared/mock-courses';

@Component({
  selector: 'root',
  // imports: [Toolbar, Courses, CourseCard],
  imports: [Toolbar, CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  courses: Course[] = [];
  
  onEditStarted(message:string) {
    console.log(`onEditStarded called with message: ${message}`);
  }

}
