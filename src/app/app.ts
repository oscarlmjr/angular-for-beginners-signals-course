import { Component, signal } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Courses } from './courses/courses';
import { CourseCard } from './course-card/course-card';
import { Course, CourseCategory } from './model/course';
import { Tabs } from './tabs/tabs';
import { TabData } from './tabs/tabs.model';
import { MOCK_COURSES } from './shared/mock-courses';

@Component({
  selector: 'root',
  imports: [Toolbar, Courses, CourseCard, Tabs],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  courses = MOCK_COURSES;
  
  courseTabs: TabData[] = [
    { label: 'Beginner', value: 'beginner' },
    // { label: 'Beginner', value: CourseCategory.BEGINNER },
    { label: 'Advanced', value: 'advanced' },
    // { label: 'Advanced', value: CourseCategory.ADVANCED },
  ];

  activeTab = signal<CourseCategory>('beginner');

  onTabChanged(newTab: CourseCategory) {
    // this.activeTab.update(previus => newTab);
    this.activeTab.set(newTab);
    console.log(`active tab: ${newTab}`);
  }

  onEditStarted(message:string) {
    console.log(`onEditStarded called with message: ${message}`);
  }
}
