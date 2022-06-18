import { Component, OnInit } from '@angular/core';
import { CourseModel } from 'src/models/courseModel';
import { DashboardCoursesService } from 'src/services/dashboard-courses.service';

@Component({
  selector: 'app-dashboard-courses',
  templateUrl: './dashboard-courses.component.html',
  styleUrls: ['./dashboard-courses.component.css']
})
export class DashboardCoursesComponent implements OnInit {
  courses: Array<CourseModel> = {} as Array<CourseModel>;
  constructor(private courseService: DashboardCoursesService) { }

  ngOnInit(): void {
    this.courses = this.courseService.mockCourses;
  }

}
