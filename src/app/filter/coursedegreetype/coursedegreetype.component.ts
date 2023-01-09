import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Course, DegreeType } from 'src/app/Course';
import { StudentserviceService } from 'src/app/service/studentservice.service';
import { University } from 'src/app/University';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coursedegreetype',
  templateUrl: './coursedegreetype.component.html',
  styleUrls: ['./coursedegreetype.component.css']
})
export class CoursedegreetypeComponent {

  searchName!: any;

  instituteCode!: any;
  university!: University;
  courses!: Course[];
  course!: Course;
  aadhaarNo!: any;
  degreeType !: DegreeType;

  constructor(private studentService: StudentserviceService, private router: Router, private route: ActivatedRoute, private cookie: CookieService) { }

  ngOnInit(): void {

    this.instituteCode = this.route.snapshot.params['instituteCode'];
    this.degreeType = this.route.snapshot.params['degreeType'];
    this.aadhaarNo = this.cookie.get('aadhaarNo');
    console.log(this.degreeType);
    console.log(this.instituteCode);
    this.studentService.filterCourseByDegreeType(this.instituteCode, this.degreeType)
      .subscribe(data => {
        console.log(data)
        this.courses = data;
        console.log(this.courses)

      }
      );
    this.studentService.getUniversityById(this.instituteCode).subscribe(data => {
      console.log(data)
      this.university = data;
      console.log(this.university)
    });

  }


  logOut() {
    this.cookie.delete('instituteCode');
    this.cookie.delete('emailId');

  }

  universityCourseList2(instituteCode: Number) {
    this.router.navigate(["universitycourselist2/" + instituteCode]);
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

}
