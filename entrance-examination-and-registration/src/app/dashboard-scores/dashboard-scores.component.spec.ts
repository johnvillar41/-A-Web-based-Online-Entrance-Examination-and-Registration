import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardScoresComponent } from './dashboard-scores.component';

describe('DashboardScoresComponent', () => {
  let component: DashboardScoresComponent;
  let fixture: ComponentFixture<DashboardScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardScoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
