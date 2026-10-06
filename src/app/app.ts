import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
// import { Courses } from './courses/courses';
import { Course } from './model/course';
import { CourseCard } from './course-card/course-card';

@Component({
  selector: 'root',
  // imports: [Toolbar, Courses, CourseCard],
  imports: [Toolbar, CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  corseData: Course = {
    id: 23,
    title: 'Angular For Beginners (Signals Edition) v4',
    description: 
      'Learn Angular from scratch using the new Signals API — build real apps with the modern Angular paradigm',
    iconUrl: 
      'https://d3vigmphadbn9b.cloudfront.net/course-images/large-images/angular-for-beginners.jpg',
    category: 'BEGINNER',
    seqNo: 0,
    price: 0,
  };

}
