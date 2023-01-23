import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentserviceService } from '../service/studentservice.service';

@Injectable({
  providedIn: 'root'
})
export class StudentguardGuard implements CanActivate {
  constructor(private studentService:StudentserviceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.studentService.isloggedIn()){
        return true;
      }
      else{
        this.router.navigate(['/student']);
        return false;
      }
  }
  
}
