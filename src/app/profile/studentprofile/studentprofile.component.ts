import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { StudentserviceService } from 'src/app/service/studentservice.service';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent {

  aadhaarNo!:any;
  student!:Student;
  students !: FormGroup;
  stud :Student = new Student();

  constructor(private cookie: CookieService , private studentService:StudentserviceService, private formbuilder : FormBuilder,private router : Router  )
   {
    this.students = this.formbuilder.group({

 
    // cgpa: [],
    greScore: [ ],
    ieltsScore:[ ],
    passportNo: [ ],
    })
  }

  updateStudent(){
    this.studentService.updateProfile(this.aadhaarNo,this.stud).subscribe(data => 
      data=this.stud);

      alert("Details Updated Successfully");
      // this.goToStudentProfile();
  }

  
  onSubmit(){
    this.stud = new Student();

  
    // this.student.cgpa = this.form['cgpa'].value;
    this.stud.greScore = this.form['greScore'].value;
    this.stud.ieltsScore = this.form['ieltsScore'].value;
    this.stud.passportNo = this.form['passportNo'].value;
 

    this.updateStudent();

  }

  get form(){
    return this.students.controls;
  }

  // goToStudentProfile(){
  //   this.router.navigate(['/studentprofile']);
  // }

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
