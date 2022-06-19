import { Component, OnInit } from '@angular/core';
import { CourseGradeModel } from 'src/models/courseGradeModel';
import { DashboardScoresService } from 'src/services/dashboard-scores.service';

@Component({
  selector: 'app-dashboard-scores',
  templateUrl: './dashboard-scores.component.html',
  styleUrls: ['./dashboard-scores.component.css']
})
export class DashboardScoresComponent implements OnInit {
  courseGrades: Array<CourseGradeModel> = {} as Array<CourseGradeModel>
  constructor(private dashboardScoresService: DashboardScoresService) { }

  ngOnInit(): void {
    this.courseGrades = this.dashboardScoresService.getScores();
  }

}
