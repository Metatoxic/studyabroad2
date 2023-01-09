import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { StudentserviceService } from 'src/app/service/studentservice.service';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-studenthomepage',
  templateUrl: './studenthomepage.component.html',
  styleUrls: ['./studenthomepage.component.css']
})
export class StudenthomepageComponent {
  type: string = 'PGD';
  type1: string = 'MASTERS';
  type2: string = 'MSC';

  aadhaarNo!:any;

  student!:Student;

  constructor(private cookie: CookieService ,private studentService:StudentserviceService){}

  logOut(){
    
    this.cookie.delete('aadhaarNo');
    this.cookie.delete('emailId');

  }

  ngOnInit() {
    this.getStudentProfile();
  }
  
  getStudentProfile(){
    this.aadhaarNo = this.cookie.get('aadhaarNo');
  
    this.studentService.getStudentById(this.aadhaarNo).subscribe(data =>{
      this.student=data;
    })
  }
  
  

}



