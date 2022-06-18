import { Injectable } from '@angular/core';
import { CourseModel } from 'src/models/courseModel';

@Injectable({
  providedIn: 'root'
})
export class DashboardCoursesService {
  mockCourses: Array<CourseModel> = {} as Array<CourseModel>;
  constructor() {
    this.onInitializeCourses();
  }

  onInitializeCourses(): void {
    this.mockCourses = [
      {
        courseCode: 'cs106',
        courseName: 'Automata and Language Theory',
        instructor: 'Dennis Martillano'
      },
      {
        courseCode: 'cs106',
        courseName: 'Automata and Language Theory',
        instructor: 'Dennis Martillano'
      },
      {
        courseCode: 'cs106',
        courseName: 'Automata and Language Theory',
        instructor: 'Dennis Martillano'
      }
    ]
  }
}
