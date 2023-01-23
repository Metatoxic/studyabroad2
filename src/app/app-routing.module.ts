 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { UniversityComponent } from './university/university.component';
import { StudentComponent } from './student/student.component';
import { StudentsignupComponent } from './student/studentsignup/studentsignup.component';
import { UniversitysignupComponent } from './university/universitysignup/universitysignup.component';
import { StudenthomepageComponent } from './homepage/studenthomepage/studenthomepage.component';
import { UniversityhomepageComponent } from './homepage/universityhomepage/universityhomepage.component';
import { UniversitylistComponent } from './list/universitylist/universitylist.component';
import { DegreetypeComponent } from './filter/degreetype/degreetype.component';
import { CourselistComponent } from './list/courselist/courselist.component';
import { CoursesignupComponent } from './course/coursesignup/coursesignup.component';
import { StudentprofileComponent } from './profile/studentprofile/studentprofile.component';
import { EnrolledlistComponent } from './list/enrolledlist/enrolledlist.component';
import { UniversityprofileComponent } from './profile/universityprofile/universityprofile.component';
import { UniversitycourselistComponent } from './list/universitycourselist/universitycourselist.component';
import { Universitycourselist2Component } from './list/universitycourselist2/universitycourselist2.component';
import { CoursedegreetypeComponent } from './filter/coursedegreetype/coursedegreetype.component';
import { EnrolleddetailsComponent } from './list/enrolleddetails/enrolleddetails.component';
import { StarlistComponent } from './list/starlist/starlist.component';
import { UniversityguardGuard } from './guard/universityguard.guard';


const routes: Routes = [
  // {path : '',component : WelcomeComponent},
  // {path : 'welcome',component : WelcomeComponent},

  // {path : 'university',component : UniversityComponent},
  // {path : 'student',component : StudentComponent},
  // {path : 'studentsignup',component : StudentsignupComponent},
  // {path : 'universitysignup',component :UniversitysignupComponent},
  // {path : 'studenthomepage',component :StudenthomepageComponent},
  // {path : 'universityhomepage',component : UniversityhomepageComponent},
  // {path : 'universitylist',component : UniversitylistComponent},
  // {path : 'degreetypefilter/:degreeType',component : DegreetypeComponent},
  // {path : 'courselist',component :CourselistComponent },
  // {path : 'coursesignup',component : CoursesignupComponent},
  // {path : 'studentprofile',component : StudentprofileComponent},
  // {path : 'universityprofile',component :UniversityprofileComponent},
  // {path : 'enrolledlist/:instituteCode',component : EnrolledlistComponent},
  // {path : 'universitycourselist/:instituteCode',component : UniversitycourselistComponent},
  // {path : 'universitycourselist2/:instituteCode',component : Universitycourselist2Component},
  // {path : 'coursedegreetype/:instituteCode/:degreeType',component : CoursedegreetypeComponent},
  // {path : 'enrolleddetails/:aadhaarNo', component : EnrolleddetailsComponent},
  // {path : 'starlist/:aadhaarNo', component : StarlistComponent},

  {path : '',component : WelcomeComponent},
  {path : 'welcome',component : WelcomeComponent},

  // University 

  {path : 'university',component : UniversityComponent , canActivate:[UniversityguardGuard]},
  {path : 'universitysignup',component :UniversitysignupComponent , canActivate:[UniversityguardGuard]},
  {path : 'universityhomepage',component : UniversityhomepageComponent , canActivate:[UniversityguardGuard]},
  {path : 'courselist',component :CourselistComponent, canActivate:[UniversityguardGuard] },
  {path : 'coursesignup',component : CoursesignupComponent , canActivate:[UniversityguardGuard]},
  {path : 'universityprofile',component :UniversityprofileComponent , canActivate:[UniversityguardGuard]},
  {path : 'enrolledlist/:instituteCode',component : EnrolledlistComponent , canActivate:[UniversityguardGuard]},
 
  
  // student 
  {path : 'student',component : StudentComponent},
  {path : 'studentsignup',component : StudentsignupComponent},
  {path : 'studenthomepage',component :StudenthomepageComponent},
  {path : 'studentprofile',component : StudentprofileComponent},
  {path : 'enrolleddetails/:aadhaarNo', component : EnrolleddetailsComponent},
  {path : 'starlist/:aadhaarNo', component : StarlistComponent}, 
  {path : 'universitylist',component : UniversitylistComponent},
  {path : 'degreetypefilter/:degreeType',component : DegreetypeComponent},
  {path : 'universitycourselist/:instituteCode',component : UniversitycourselistComponent},
  {path : 'universitycourselist2/:instituteCode',component : Universitycourselist2Component},
  {path : 'coursedegreetype/:instituteCode/:degreeType',component : CoursedegreetypeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
