import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UniversityserviceService } from 'src/app/service/universityservice.service';
import { University } from 'src/app/University';

@Component({
  selector: 'app-universityhomepage',
  templateUrl: './universityhomepage.component.html',
  styleUrls: ['./universityhomepage.component.css']
})
export class UniversityhomepageComponent {

  instituteCode!:any;

  university!:University;

    constructor(private cookie: CookieService ,private universityService:UniversityserviceService, private router:Router ){}

  logOut(){
    this.cookie.delete('instituteCode');
    this.cookie.delete('emailId');

  }
  ngOnInit() {
    this.getUniversityProfile();
  }

  getUniversityProfile(){
    this.instituteCode = this.cookie.get('instituteCode');

    this.universityService.getUniversityById(this.instituteCode).subscribe(data =>{
      this.university=data;
    })
  }

  universityCourseList(instituteCode:Number){
    this.router.navigate(["universitycourselist/"+instituteCode]);
  }

}
