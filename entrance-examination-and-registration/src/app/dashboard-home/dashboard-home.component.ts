import { Component, OnInit } from '@angular/core';
import { AnnouncementModel } from 'src/models/announcementModel';
import { DashboardService } from 'src/services/dashboard.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  announcements: Array<AnnouncementModel> = {} as Array<AnnouncementModel>;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.announcements = this.dashboardService.getAnnouncements();
  }

}
