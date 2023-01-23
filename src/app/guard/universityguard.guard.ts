import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UniversityserviceService } from '../service/universityservice.service';

@Injectable({
  providedIn: 'root'
})

export class UniversityguardGuard implements CanActivate {
  constructor(private universityService:UniversityserviceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if(this.universityService.isloggedIn()){
        return true;
      }
      else{
        this.router.navigate(['/university']);
        return false;
      }
  }
  
}
