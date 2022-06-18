import { Injectable } from '@angular/core';
import { AnnouncementModel } from 'src/models/announcementModel';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getAnnouncements() : Array<AnnouncementModel> {
    return [
      {
        announcementTitle:'Examination',
        announcementDescription:'There will be an examination on upcomming tuesday.',
        author:'Kanor',
        date: new Date('2019-01-16')
      },
      {
        announcementTitle:'Examination',
        announcementDescription:'There will be an examination on upcomming tuesday.',
        author:'Kanor',
        date: new Date('2019-01-16')
      },
      {
        announcementTitle:'Examination',
        announcementDescription:'There will be an examination on upcomming tuesday.',
        author:'Kanor',
        date: new Date('2019-01-16')
      },
      {
        announcementTitle:'Examination',
        announcementDescription:'There will be an examination on upcomming tuesday.',
        author:'Kanor',
        date: new Date('2019-01-16')
      },
      {
        announcementTitle:'Examination',
        announcementDescription:'There will be an examination on upcomming tuesday.',
        author:'Kanor',
        date: new Date('2019-01-16')
      },
    ]
  }
}
