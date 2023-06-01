import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class AuthorisationService implements CanActivate {

  readonly userKey = environment.USERKEY;
  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/security/login']);
      return false;
    }
  }


 



}