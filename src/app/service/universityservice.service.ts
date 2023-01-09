import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from '../Course';
import { Student } from '../Student';
import { University } from '../University';

@Injectable({
  providedIn: 'root'
})
export class UniversityserviceService {
  emailId!:any;
  isUserLogin = new BehaviorSubject<boolean>(true);
  showSideMenu = new BehaviorSubject<boolean>(false);

  private baseurl = 'http://localhost:8080/university/';


  constructor(private httpClient : HttpClient) { }

  // create university
  addUniversity(university:University):Observable<Object>{
    return this.httpClient.post(`${this.baseurl}` + 'create',university);
  }

  // create course to particular university
  addCourse(instituteCode:Number ,course:Course):Observable<Object>{
    return this.httpClient.post(`${this.baseurl}`+'add/course/'+`${instituteCode}`,course);
  }

  // read enrolled lists
  getEnrolledList(instituteCode:number):Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseurl}`+'read/enrolledlist/'+`${instituteCode}`);
  } 

  
  // read course count
  getCourseCount(instituteCode:number):Observable<Number>{
    return this.httpClient.get<Number>(`${this.baseurl}`+'coursecount/'+`${instituteCode}`);
  } 

   // read student count
   getStudentCount(instituteCode:number):Observable<Number>{
    return this.httpClient.get<Number>(`${this.baseurl}`+'studentcount/'+`${instituteCode}`);
  } 





  public setUserType(isUser: boolean) {
    this.isUserLogin.next(isUser);
  }

  public setSideMenuView(view: boolean) {
    this.showSideMenu.next(view);
  }


 setEmailId(emailId: string){
  this.emailId=emailId;
 }
  getUserByEmail(emailId: string): Observable<University>{
    return this.httpClient.get<University>(`${this.baseurl}`+'universitylogin/'+`${emailId}`);
  }

  getUniversityById(instituteCode: number): Observable<University>{
    return this.httpClient.get<University>(`${this.baseurl}`+'universityprofile/'+`${instituteCode}`);
  }
}
