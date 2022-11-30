import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
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
  {path:"addcourses",component:AddCourseComponent},
  {path:"addfriends",component:AddFriendsComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"contactus",component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
