import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  CookieService } from 'ngx-cookie-service';
import { Course } from 'src/app/Course';
import { UniversityserviceService } from 'src/app/service/universityservice.service';

@Component({
  selector: 'app-coursesignup',
  templateUrl: './coursesignup.component.html',
  styleUrls: ['./coursesignup.component.css']
})
export class CoursesignupComponent {

  instituteCode!:any;

  courseForm!: FormGroup;
  course: Course = new Course();
  submitted = false;

  instituteCodeForm!: FormGroup;

  constructor(
   private fb: FormBuilder, 
    private universityservice:UniversityserviceService, 
    private router: Router,
    private route: ActivatedRoute,private cookie:CookieService) {

     
      // this.instituteCodeForm = this.fb.group({
      //   instituteCode : []


      // });

    this.courseForm = this.fb.group({
      courseCode: [],
      courseName: [],
      seatsAvailable:[],
      courseDuration: [],
      degreeType: []
      
      });
   }

  ngOnInit(): void {
    this.course = new Course();
this.instituteCode = this.cookie.get('instituteCode');
 //   this.instituteCode = this.route.snapshot.params['instituteCode'];

  

  }


  OnlyNumbersAllowed(event: { which: any; keyCode: any; }):boolean {
    const charCode=(event.which)?event.which:event.keyCode;
    if(charCode>31&&(charCode<48||charCode>57)){
      console.log('charCode is restricted is'+charCode);
      return false;
    }
     return true;
  }
   
  OnlyLettersAllowed(event: { which: any; keyCode: any; }):boolean {
    const charCode=(event.which)?event.which:event.keyCode;
    if((charCode==20)&&(charCode<97||charCode>122)&&(charCode<65||charCode>90)){
      console.log('charCode is restricted is'+charCode);
      return false;
    }
     return true;
  }
  
  onSubmit1(){
    this.course = new Course();
    this.course.courseCode = this.form['courseCode'].value;
    this.course.courseName = this.form['courseName'].value;
    this.course.seatsAvailable = this.form['seatsAvailable'].value;
    this.course.courseDuration = this.form['courseDuration'].value;
    this.course.degreeType = this.form['degreeType'].value;

    // this.instituteCode = this.form['instituteCode'].value;

  //  this.instituteCode = this.form1['instituteCode'].value;

    console.log(this.instituteCode);
   console.log(this.course);
    this.submitted = true;
    this.saveCourse();
  }

  get form(){
    return this.courseForm.controls;
  } 
  // get form1(){
  //   return this.instituteCodeForm.controls;
  //   console.log(this.instituteCodeForm);
  // } 

  
  saveCourse(){
    this.universityservice.addCourse(this.instituteCode,this.course)
      .subscribe(data => {data=this.course
        alert("Course Added Successfully!")
        this.goToUniversityHomepage();},
      (error)=>{
       if (error?.status==409){
          alert(error.error.errorMessage);
        }
        else{
          alert("Course Added Successfully!")
          this.goToUniversityHomepage();
        }
      });
      
      
    
   
  }

  goToUniversityHomepage(){
    this.router.navigate(['/universityhomepage']);
  }

  logOut(){
    this.cookie.delete('instituteCode');
    this.cookie.delete('emailId');

  }

}
