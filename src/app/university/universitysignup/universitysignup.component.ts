import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UniversityserviceService } from 'src/app/service/universityservice.service';
import { University } from 'src/app/University';

@Component({
  selector: 'app-universitysignup',
  templateUrl: './universitysignup.component.html',
  styleUrls: ['./universitysignup.component.css']
})
export class UniversitysignupComponent {

 
  


  universities !:FormGroup;

  university :University = new University();

  constructor(private router : Router , private formbuilder : FormBuilder ,private universityservice:UniversityserviceService){

    this.universities = this.formbuilder.group({

      instituteCode:[,Validators.required],   
      universityName:[,Validators.required], 
      country:[,Validators.required],       
      state:[,Validators.required],      
      minimumCgpa:[],    
      minimumIeltsScore:[],
      minimumGreScore:[], 
      seatsAvailable:[],  
      emailId:[,Validators.required,Validators.email],      
      password:[,Validators.required],      
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
  

  saveUniversity(){
    this.universityservice.addUniversity(this.university)
    .subscribe(data => {data=this.university
      alert("University Signed Up Successfully!")
      this.goToUniversityHomepage();
    },
      (error)=>{
        if (error?.status==409){
           alert(error.error.errorMessage);
           console.log(error.error.errorMessage);
         }
         else{
           alert("University Signed Up Successfully!")
           this.goToUniversityHomepage();
         }
       }
      
      )
    
  }

 

  onSubmit(){
    this.university = new University();

    this.university.instituteCode 	= this.form['instituteCode'].value;
    this.university.universityName	= this.form['universityName'].value;
    this.university.country		= this.form['country'].value;
    this.university.state		= this.form['state'].value;
    this.university.minimumCgpa	= this.form['minimumCgpa'].value;
    this.university.minimumIeltsScore	= this.form['minimumIeltsScore'].value;
    this.university.minimumGreScore	= this.form['minimumGreScore'].value;
   
    this.university.emailId		= this.form['emailId'].value;
    this.university.password 		= this.form['password'].value;
   

    this.saveUniversity();
  }

get form(){
  return this.universities.controls;
}

goToUniversityHomepage(){
  this.router.navigate(['/university']);
}


}
