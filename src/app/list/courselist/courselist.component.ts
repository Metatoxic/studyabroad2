import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Course } from 'src/app/Course';
import { StudentserviceService } from 'src/app/service/studentservice.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent {


  courses!:Course[];

  constructor(private studentService: StudentserviceService,
    private router: Router,private cookie:CookieService) { }

    ngOnInit():void{
      this.getCourseList();
    }

    private getCourseList() { 
      this.studentService.getCourseList()
       .subscribe(data => this.courses = data);
    }

    //logout
    logOut(){
      this.cookie.delete('instituteCode');
      this.cookie.delete('emailId');
  
    }

}
