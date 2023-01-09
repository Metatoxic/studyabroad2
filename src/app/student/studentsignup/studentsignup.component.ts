import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentserviceService } from 'src/app/service/studentservice.service';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-studentsignup',
  templateUrl: './studentsignup.component.html',
  styleUrls: ['./studentsignup.component.css']
})
export class StudentsignupComponent {


  students !: FormGroup;

  student :Student = new Student();


  constructor(private router : Router , private formbuilder : FormBuilder , private studentservice:StudentserviceService) { 

    this.students = this.formbuilder.group({

    firstName: [,Validators.required],
    lastName:  [,Validators.required],
    emailId: [,Validators.required,Validators.email],
    password: [,Validators.required],
    age: [,Validators.required],
    gender:[,Validators.required],
    cgpa: [,Validators.required],
    degree: [,Validators.required],
    aadhaarNo:[,Validators.required],
    passportNo: [,Validators.required],
    greScore: [ ,Validators.required],
    ieltsScore:[ ,Validators.required],
    specialization: [,Validators.required],
    
    })
  }

 

  OnlyNumbersAllowed(event: { which: any; keyCode: any; }):boolean {
    const charCode=(event.which)?event.which:event.keyCode;
    if(charCode>31&&(charCode<48||charCode>57)){
      console.log('charCode is restricted is'+charCode);
      return false;
    }
     return true;
  }

  OnlyNumbersAllowed2(event: { which: any; keyCode: any; }):boolean {
    const charCode=(event.which)?event.which:event.keyCode;
    if(charCode==190&&charCode>31&&(charCode<48||charCode>57)){
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
  

  saveStudent(){
    this.studentservice.addStudent(this.student)
    .subscribe(data => {data=this.student
    
      alert("Student Signed Up Successfully!")
      this.goToStudentHomepage();
    },
      (error)=>{
        if (error?.status==409){
           alert(error.error.errorMessage);
          
         }else{
           alert("Student Signed Up Successfully!")
           this.goToStudentHomepage();
         }
       }
      
      );

     
  }

  onSubmit(){
    this.student = new Student();

    this.student.firstName = this.form['firstName'].value;
    this.student.lastName = this.form['lastName'].value;
    this.student.emailId = this.form['emailId'].value;
    this.student.password = this.form['password'].value;
    this.student.age = this.form['age'].value;
    this.student.gender = this.form['gender'].value.toUpperCase();
    this.student.cgpa = this.form['cgpa'].value;
    this.student.degree = this.form['degree'].value;
    this.student.aadhaarNo=this.form['aadhaarNo'].value;
    this.student.passportNo = this.form['passportNo'].value;
    this.student.greScore = this.form['greScore'].value;
    this.student.ieltsScore = this.form['ieltsScore'].value;
    this.student.specialization = this.form['specialization'].value;

    this.saveStudent();
  }


get form(){
  return this.students.controls;
}

goToStudentHomepage(){
  this.router.navigate(['/student']);
}


}
