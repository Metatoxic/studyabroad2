import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { UniversityComponent } from './university/university.component';
import { StudentComponent } from './student/student.component';

import { StudentsignupComponent } from './student/studentsignup/studentsignup.component';
import { UniversitysignupComponent } from './university/universitysignup/universitysignup.component';

import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomepageComponent } from './homepage/homepage.component';
import { StudenthomepageComponent } from './homepage/studenthomepage/studenthomepage.component';
import { UniversityhomepageComponent } from './homepage/universityhomepage/universityhomepage.component';
import { ListComponent } from './list/list.component';
import { UniversitylistComponent } from './list/universitylist/universitylist.component';
import { FilterComponent } from './filter/filter.component';
import { DegreetypeComponent } from './filter/degreetype/degreetype.component';
import { CourselistComponent } from './list/courselist/courselist.component';
import { CourseComponent } from './course/course.component';
import { CoursesignupComponent } from './course/coursesignup/coursesignup.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentprofileComponent } from './profile/studentprofile/studentprofile.component';
import { EnrolledlistComponent } from './list/enrolledlist/enrolledlist.component';
import { UniversityprofileComponent } from './profile/universityprofile/universityprofile.component';
import { CookieService } from 'ngx-cookie-service';
import { UniversitycourselistComponent } from './list/universitycourselist/universitycourselist.component';
import { Universitycourselist2Component } from './list/universitycourselist2/universitycourselist2.component';
import { CoursedegreetypeComponent } from './filter/coursedegreetype/coursedegreetype.component';
import { EnrolleddetailsComponent } from './list/enrolleddetails/enrolleddetails.component';
import { UniversitysearchPipe } from './pipe/universitysearch.pipe';
import { CoursesearchPipe } from './pipe/coursesearch.pipe';
import { StarlistComponent } from './list/starlist/starlist.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UniversityComponent,
    StudentComponent,
    StudentsignupComponent,
    UniversitysignupComponent,
    HomepageComponent,
    StudenthomepageComponent,
    UniversityhomepageComponent,
    ListComponent,
    UniversitylistComponent,
    FilterComponent,
    DegreetypeComponent,
    CourselistComponent,
    CourseComponent,
    CoursesignupComponent,
    ProfileComponent,
    StudentprofileComponent,
    EnrolledlistComponent,
    UniversityprofileComponent,
    UniversitycourselistComponent,
    Universitycourselist2Component,
    CoursedegreetypeComponent,
    EnrolleddetailsComponent,
    UniversitysearchPipe,
    CoursesearchPipe,
    StarlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
