import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Enroll } from 'src/app/Enroll';
import { StudentserviceService } from 'src/app/service/studentservice.service';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-enrolleddetails',
  templateUrl: './enrolleddetails.component.html',
  styleUrls: ['./enrolleddetails.component.css']
})
export class EnrolleddetailsComponent {

  enrolls!:Enroll[];
  student!:Student;
  aadhaarNo!:any;

  constructor(private studentService: StudentserviceService,
    private router: Router,private route:ActivatedRoute,private cookie:CookieService) { }

    ngOnInit():void
    {
      this.aadhaarNo = this.cookie.get('aadhaarNo');
      console.log(this.aadhaarNo)
      this.aadhaarNo = this.route.snapshot.params['aadhaarNo'];
      this.studentService.getEnrolledDetails(this.aadhaarNo)
        .subscribe(data => {
          console.log(data)
          this.enrolls = data;
          console.log(this.enrolls)
  
        }
        );
        
        

        this.studentService.getStudentById(this.aadhaarNo).subscribe(data =>{
          this.student=data;
        });
    }
    deleteEnroll(enrollId:Number){
      if(confirm("Are you sure want to reject ?")){
        location.reload();
this.studentService.deleteEnrollment(enrollId,this.aadhaarNo).subscribe(data =>{  });
      }
     
    }
  

  }




