import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UniversityserviceService } from '../service/universityservice.service';
import { University } from '../University';


@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  loginForm!: FormGroup;
  inCorrect: boolean = false;
  isChecked = false;

  notFound: boolean = false;


  university: University = new University();
  submitted = false;
  constructor(private fb: FormBuilder,
    private universityService: UniversityserviceService,
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
      
        this.universityService.getUserByEmail(this.loginForm.value.emailId).subscribe(
          (data) => {
            if (
              data?.password == this.loginForm.value.password &&
              data?.emailId == this.loginForm.value.emailId)
             {
         
              this.inCorrect = false;
              this.notFound = false;
              this.cookie.set('emailId', `${data?.emailId}`);
               console.log(this.loginForm.value);
             
              this.cookie.set('instituteCode', `${data?.instituteCode}`);
               this.router.navigate(['/universityhomepage']);
              this.universityService.setSideMenuView(Object.keys(this.cookie.getAll()).length != 0);
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



    
   
   console.log(this.university);
    this.submitted = true;
   
  }

  


}