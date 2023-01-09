import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UniversityserviceService } from 'src/app/service/universityservice.service';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-enrolledlist',
  templateUrl: './enrolledlist.component.html',
  styleUrls: ['./enrolledlist.component.css']
})
export class EnrolledlistComponent {

  students!:Student[];
  instituteCode!:number;

  constructor(private universityService: UniversityserviceService,
    private router: Router,private route:ActivatedRoute,private cookie:CookieService) { }

    ngOnInit():void
    {

      this.instituteCode = this.route.snapshot.params['instituteCode'];
      this.universityService.getEnrolledList(this.instituteCode)
        .subscribe(data => {
          console.log(data)
          this.students = data;
          console.log(this.students)
  
        }
        );
    }

    //logout
    logOut(){
      this.cookie.delete('instituteCode');
      this.cookie.delete('emailId');
  
    }
}
