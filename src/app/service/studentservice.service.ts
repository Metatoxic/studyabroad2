import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course, DegreeType } from '../Course';
import { Enroll } from '../Enroll';
import { Student } from '../Student';
import { University } from '../University';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  instituteCode!:number;
  aadhaarNo!:number;
  courseCode!:number;

  emailId!:any;
  isUserLogin = new BehaviorSubject<boolean>(true);
  showSideMenu = new BehaviorSubject<boolean>(false);

  private baseurl = 'http://localhost:8080/student/';


  constructor(private httpClient : HttpClient) { }

  // create student
  addStudent(student:Student):Observable<Object>{
    return this.httpClient.post(`${this.baseurl}` + 'create',student);
  }

  // read all universities
  getUniversityList(): Observable<University[]>{
    return this.httpClient.get<University[]>(`${this.baseurl}` +'read/'+'alluniversities');
  }

  // read all courses
  getCourseList(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseurl}` +'read/'+'allcourses');
  }

  // read enrolled details
  getEnrolledDetails(aadhaarNo:Number): Observable<Enroll[]>{
    return this.httpClient.get<Enroll[]>(`${this.baseurl}` +'read/'+'enrolleddetails/'+`${aadhaarNo}`);
  }

  // read university courses
  getUniversityCourseList(instituteCode:Number):Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseurl}` +'read/'+'universitycourses/'+`${instituteCode}`);
  }

  // filter by degree
  filterByDegreeType(degreeType:DegreeType):Observable<University[]>{
    return this.httpClient.get<University[]>(`${this.baseurl}`+'filter/university/'+`${degreeType}`);
  }

    // filter by degree
    filterCourseByDegreeType(instituteCode:Number,degreeType:DegreeType):Observable<Course[]>{
      return this.httpClient.get<Course[]>(`${this.baseurl}`+'filter/course/'+`${instituteCode}`+"/"+`${degreeType}`);
    }

  // apply university
  applyUniversity(instituteCode:Number,courseCode:Number,aadhaarNo:Number,course:Course):Observable<Object>{
    return this.httpClient.put<Object>(`${this.baseurl}`+'/apply/university/'+`${instituteCode}`+'/'+`${courseCode}`+'/'+`${aadhaarNo}`,course);
  }

  // delete applied university
  deleteEnrollment(enrollId:Number,aadhaarNo:Number):Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseurl}`+'/cancel/university/'+`${enrollId}`+'/'+`${aadhaarNo}`);
  }

  
  // read university by Id
  getUniversityById(instituteCode:Number):Observable<University>{
    return this.httpClient.get<University>(`${this.baseurl}` +'read/'+'university/'+`${instituteCode}`);
  }
  
  // update student profile
  updateProfile(aadhaarNo:Number,student:Student):Observable<Object>{
    return this.httpClient.put<Object>(`${this.baseurl}`+'update/'+'profile/'+`${aadhaarNo}`,student);
  }

  // star search
  getStarSearch(aadhaarNo:Number): Observable<University[]>{
    return this.httpClient.get<University[]>(`${this.baseurl}` +'starsearch/'+`${aadhaarNo}`);
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
  getUserByEmail(emailId: string): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseurl}`+'studentlogin/'+`${emailId}`);
  }

  getStudentById(aadhaarNo: Number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseurl}`+'studentprofile/'+`${aadhaarNo}`);
  }


  
}

