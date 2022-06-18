import { Injectable } from '@angular/core';
import { CourseModel } from 'src/models/courseModel';

@Injectable({
  providedIn: 'root'
})
export class DashboardCoursesService {

  constructor() {

  }

  getCourses(): Array<CourseModel> {
    return [
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
