import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"viewcourses",component:ViewCoursesComponent},
  {path:"viewfriends",component:ViewFriendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
