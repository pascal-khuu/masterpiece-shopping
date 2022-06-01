import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Passage par le guard !!!');
    const token = localStorage.getItem('token');
    if (token !== null) {
      const decodedToken: { userId: string, iat: number, exp: number, roles:string[] } = jwtDecode(token);
      console.log(decodedToken);
      let rolesBool:  string[];
      rolesBool=decodedToken.roles;
      const expirationDate = new Date(decodedToken.exp*1000);
      const currentDate = new Date();
      console.log(expirationDate);
      console.log(currentDate);
     
      if (expirationDate<currentDate){
        localStorage.removeItem('token');
        this.router.navigateByUrl('/sign-in');
        return false;
      }
      else{
        if (!rolesBool){
          alert("vous n'êtes pas administrateur");
          this.router.navigateByUrl('/list-product');
          return false;
        }

        if ((rolesBool.length > 0)&& rolesBool.includes("ROLE_ADMIN")) {
          alert("vous êtes administrateur");
          return true;
        } else {
          return false;
        }
      }
      
    }
    else {
      this.router.navigateByUrl('/sign-in');
      return false;
    }

  }
  
}
