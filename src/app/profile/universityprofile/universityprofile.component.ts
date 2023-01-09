import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UniversityserviceService } from 'src/app/service/universityservice.service';
import { University } from 'src/app/University';

@Component({
  selector: 'app-universityprofile',
  templateUrl: './universityprofile.component.html',
  styleUrls: ['./universityprofile.component.css']
})
export class UniversityprofileComponent {

  instituteCode!:any;

  university!:University;

  courseCount!:Number;

  studentCount!:Number;

  constructor(private cookie: CookieService , private universityService:UniversityserviceService) {
  }
  ngOnInit() {
    this.getUniversityProfile();
    this.getCourseCount();
    this.getStudentCount();
  }

  getUniversityProfile(){
    this.instituteCode = this.cookie.get('instituteCode');

    this.universityService.getUniversityById(this.instituteCode).subscribe(data =>{
      this.university=data;
    })
  }

 

 getCourseCount(){
  this.instituteCode = this.cookie.get('instituteCode');

  this.universityService.getCourseCount(this.instituteCode).subscribe(data => {
    this.courseCount = data;})
 }

 getStudentCount(){
  this.instituteCode = this.cookie.get('instituteCode');

  this.universityService.getStudentCount(this.instituteCode).subscribe(data => {
    this.studentCount = data;})
 }

}
