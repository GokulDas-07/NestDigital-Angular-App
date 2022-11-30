import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { AboutUsComponent } from './about-us/about-us.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdminLoginComponent,
    ViewCoursesComponent,
    AdminnavbarComponent,
    ViewFriendsComponent,
    EmployeeLoginComponent,
    EmployeeRegistrationComponent,
    AddCourseComponent,
    EmployeeNavbarComponent,
    AddFriendsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
