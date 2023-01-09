import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { StudentserviceService } from 'src/app/service/studentservice.service';
import { Student } from 'src/app/Student';
import { University } from 'src/app/University';

@Component({
  selector: 'app-starlist',
  templateUrl: './starlist.component.html',
  styleUrls: ['./starlist.component.css']
})
export class StarlistComponent {

  universities!:University[];
  student!:Student;
  aadhaarNo!:any;

  constructor(private studentService: StudentserviceService,
    private router: Router, private cookie:CookieService) { }

    ngOnInit(): void {
      this.getStudentProfile();
      
      // this.degreeType = this.route.snapshot.params['degreeType'];
      this.studentService.getStarSearch(this.aadhaarNo)
        .subscribe(data => {
          console.log(data)
          this.universities = data;
          console.log(this.universities)
  
        }
        );
        
    }
    getStudentProfile(){
      this.aadhaarNo = this.cookie.get('aadhaarNo');
  
      this.studentService.getStudentById(this.aadhaarNo).subscribe(data =>{
        this.student=data;
      })}

      universityCourseList2(instituteCode:Number){
        this.router.navigate(["universitycourselist2/"+instituteCode]);
      }

}
