import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DegreeType } from 'src/app/Course';
import { StudentserviceService } from 'src/app/service/studentservice.service';
import { University } from 'src/app/University';

@Component({
  selector: 'app-degreetype',
  templateUrl: './degreetype.component.html',
  styleUrls: ['./degreetype.component.css']
})
export class DegreetypeComponent {

  searchName!:any;

  universities!: University[];
  degreeType !: DegreeType;

  constructor(private studentService: StudentserviceService, private router: Router, private route: ActivatedRoute,private cookie:CookieService) { }

  ngOnInit(): void {

    this.degreeType = this.route.snapshot.params['degreeType'];
    this.studentService.filterByDegreeType(this.degreeType)
      .subscribe(data => {
        console.log(data)
        this.universities = data;
        console.log(this.universities)

      }
      );
  }


  logOut(){
    this.cookie.delete('instituteCode');
    this.cookie.delete('emailId');

  }

  universityCourseList2(instituteCode:Number){
    this.router.navigate(["coursedegreetype/"+instituteCode+'/'+ this.degreeType]);
  }




}
