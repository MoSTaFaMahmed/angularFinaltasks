import { AuthserviceService } from './../Services/authservice.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthgurdGuard implements CanActivate {
  constructor(private userAuthSer:AuthserviceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if(this.userAuthSer.IsUserLogged)
   {
    return true;
   }
   else{
     this.router.navigate(['/Login']);
     return false;
   }
  }

}
