import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { StudentserviceService } from 'src/app/service/studentservice.service';
import { University } from 'src/app/University';

@Component({
  selector: 'app-universitylist',
  templateUrl: './universitylist.component.html',
  styleUrls: ['./universitylist.component.css']
})
export class UniversitylistComponent {

  searchName!:any;

  universities!:University[];
  instituteCode!:Number;

  constructor(private studentService: StudentserviceService,
    private router: Router, private cookie:CookieService) { }

    ngOnInit():void{
      this.getUniversityList();
      
    }


  private getUniversityList() { 
    this.studentService.getUniversityList()
     .subscribe(data => this.universities = data);
  }

  universityCourseList2(instituteCode:Number){
    this.router.navigate(["universitycourselist2/"+instituteCode]);
  }

  //logout
  logOut(){
    this.cookie.delete('instituteCode');
    this.cookie.delete('emailId');

  }
  


}
