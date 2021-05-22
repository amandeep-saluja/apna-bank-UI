import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

    constructor(
        private loginService:LoginService, 
        private router:Router) { }

    canActivate():boolean {
        if(this.loginService.getDataFromLocalStorage() != null || this.loginService.user.value != null) {
            console.log('auth guard called: ',(this.loginService.getDataFromLocalStorage() != null || this.loginService.user.value != null))
            console.log('Local Storage: ', this.loginService.getDataFromLocalStorage());
            console.log('User Behavior Subject:', this.loginService.user.value);
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
