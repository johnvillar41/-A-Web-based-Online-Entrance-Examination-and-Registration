import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ExaminationTypesComponent } from './examination-types/examination-types.component';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AuthService } from 'src/services/auth-service.service';
import { AuthGuard } from 'src/auth.guard';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardCoursesComponent } from './dashboard-courses/dashboard-courses.component';
import { DashboardTestsComponent } from './dashboard-tests/dashboard-tests.component';
import { DashboardScoresComponent } from './dashboard-scores/dashboard-scores.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShowcaseComponent,
    ExaminationTypesComponent,
    FundamentalsComponent,
    FaqComponent,
    FooterComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    SideNavComponent,
    DashboardHomeComponent,
    DashboardCoursesComponent,
    DashboardTestsComponent,
    DashboardScoresComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
