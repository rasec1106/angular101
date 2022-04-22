import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateSessionGuard implements CanActivate {

  private cookie: string|null = null; 
  // private cookie: string|null = '12345'; // with this cookie the guardian let the user visit the page

  constructor(private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookie(); //TODO: true | false
  }

  private checkCookie():boolean{
    console.log('@@', this.cookie);
    // const response =  (this.cookie !== null); // This returns true or false
    if(this.cookie !== null){
      return true;
    }else{
      this.router.navigate(['/','auth','login']); // This is to navigate to '/auth/login'
      return false;
    }
    return true;
  }
  
}
