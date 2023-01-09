import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Course } from 'src/app/Course';
import { StudentserviceService } from 'src/app/service/studentservice.service';
import { UniversityserviceService } from 'src/app/service/universityservice.service';
import { University } from 'src/app/University';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-universitycourselist',
  templateUrl: './universitycourselist.component.html',
  styleUrls: ['./universitycourselist.component.css']
})
export class UniversitycourselistComponent {

  instituteCode!:number;
  courses!:Course[];
  university!:University;
  aadhaarNo!:any;
  course!:Course;

  constructor(private studentService:StudentserviceService,
    private router:Router, private cookie:CookieService,private route:ActivatedRoute,private universityService:UniversityserviceService) { }

    ngOnInit(): void {
      this.course = new Course();
this.aadhaarNo = this.cookie.get('aadhaarNo')
      this.instituteCode = this.route.snapshot.params['instituteCode'];
      this.studentService.getUniversityCourseList( this.instituteCode )
        .subscribe(data => {
          console.log(data)
          this.courses = data;
          console.log(this.courses)
  
        }
        );
        this.universityService.getUniversityById(this.instituteCode).subscribe(data => {console.log(data)
        this.university = data;
      console.log(this.university)});
    
        
    }

    
  //logout
  logOut(){
    this.cookie.delete('instituteCode');
    this.cookie.delete('emailId');

  }
  apply(courseCode: Number) {
    this.studentService.applyUniversity(this.instituteCode, courseCode, this.aadhaarNo, this.course)
      .subscribe(data => { },
        (error) => {
          if (error?.status == 409) {
            // alert("You cannoty able to  applly");
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You are not eligible to apply!',
            })
          }
          else {
            Swal.fire({
              icon: 'success',
              title: 'Applied Successfully',
              text: 'You have successfully applied to this course',

            })
            //  alert("Successfully Applied to " + this.university.universityName);
            this.router.navigate(['/studenthomepage']);


          }

        }


      );



    // this.goToStudentHomepage;
  }


  // goToStudentHomepage(){
  //   this.router.navigate(['/student']);
  // }

}
