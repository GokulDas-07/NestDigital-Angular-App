import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { HomeComponent } from './home/home.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"viewcourses",component:ViewCoursesComponent},
  {path:"viewfriends",component:ViewFriendsComponent},
  {path:"employeelogin",component:EmployeeLoginComponent},
  {path:"employeeregistration",component:EmployeeRegistrationComponent},
  {path:"addcourses",component:AddCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
