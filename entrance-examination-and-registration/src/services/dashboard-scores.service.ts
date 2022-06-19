import { Injectable } from '@angular/core';
import { CourseGradeModel } from 'src/models/courseGradeModel';

@Injectable({
  providedIn: 'root'
})
export class DashboardScoresService {

  constructor() { }

  getScores(): Array<CourseGradeModel> {
    return [
      {
        courseModel: {
          courseCode: 'cs106',
          courseName: 'Automata',
          instructor: 'Martillano'
        },
        grade : 100,
        recentGrades : [
          {
            moduleTitle: 'Quiz 1',
            moduleGrade : 100,
            submittedDate : new Date('2021-01-01')
          }
        ]
      },
      {
        courseModel: {
          courseCode: 'cs106',
          courseName: 'Automata',
          instructor: 'Martillano'
        },
        grade : 100,
        recentGrades : [
          {
            moduleTitle: 'Quiz 1',
            moduleGrade : 100,
            submittedDate : new Date('2021-01-01')
          },
          {
            moduleTitle: 'Quiz 2',
            moduleGrade : 100,
            submittedDate : new Date('2021-01-01')
          },
          {
            moduleTitle: 'Quiz 3',
            moduleGrade : 100,
            submittedDate : new Date('2021-01-01')
          },
        ]
      },
      {
        courseModel: {
          courseCode: 'cs106',
          courseName: 'Automata',
          instructor: 'Martillano'
        },
        grade : 100,
        recentGrades : [
          {
            moduleTitle: 'Quiz 1',
            moduleGrade : 100,
            submittedDate : new Date('2021-01-01')
          }
        ]
      }
    ]
  }

}
