import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { StudentserviceService } from '../service/studentservice.service';
import { Student } from '../Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  {

  loginForm!: FormGroup;
  inCorrect: boolean = false;
  isChecked = false;

  notFound: boolean = false;


  student: Student = new Student();
  submitted = false;
  constructor(private fb: FormBuilder,
    private studentService: StudentserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private cookie: CookieService,

  ) {

    this.loginForm = this.fb.group({


      emailId: ['', Validators.required],
      password: ['', Validators.required],

    });


  }



  ngOnInit(): void {
    this.onSubmit1();
    
  }

  onSubmit1(){

    if (!this.loginForm.valid) {
      // alert("UserName or Password Incorrect");
      return;
    } else {
     
      //this.inCorrect = false;
      this.notFound = false;
      
        this.studentService.getUserByEmail(this.loginForm.value.emailId).subscribe(
          (data) => {
            if (
              data?.password == this.loginForm.value.password &&
              data?.emailId == this.loginForm.value.emailId)
             {
         
              this.inCorrect = false;
              this.notFound = false;
              this.cookie.set('emailId', `${data?.emailId}`);
               console.log(this.loginForm.value);
             
              this.cookie.set('aadhaarNo', `${data?.aadhaarNo}`);
               this.router.navigate(['/studenthomepage']);
              this.studentService.setSideMenuView(Object.keys(this.cookie.getAll()).length != 0);
            } else {
              this.inCorrect = true;
              
    
                alert("Password is incorrect!")
              
            }
          },
          (error) => {
            if (error?.status == 500) {
              alert("Email is incorrect!")
              this.notFound = true;
            }
          }
        );
      }



    
   
   console.log(this.student);
    this.submitted = true;
   
  }

  


}