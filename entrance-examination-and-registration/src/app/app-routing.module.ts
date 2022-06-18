import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';
import { HomeComponent } from '../app/home/home.component';
import { SignUpComponent } from '../app/sign-up/sign-up.component';
import { DashboardCoursesComponent } from './dashboard-courses/dashboard-courses.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardScoresComponent } from './dashboard-scores/dashboard-scores.component';
import { DashboardTestsComponent } from './dashboard-tests/dashboard-tests.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'home', component: DashboardHomeComponent },
      { path: 'courses', component: DashboardCoursesComponent },
      { path: 'tests', component: DashboardTestsComponent },
      { path: 'scores', component: DashboardScoresComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
