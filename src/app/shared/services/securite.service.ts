import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { Professeur } from '../models/profModel';
import { AppUser } from '../models/app-user';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class SecuriteService {

 // userConnect!: Client | null;
  isConnect: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  readonly userKey = environment.USERKEY;
  private url = `${environment.API}/security`;
  constructor(private http: HttpClient,private router: Router) {}
  /*initClient() {
    this.clients.push({
      id: 2,
      nomComplet: 'Birane Baila Wane',
      login: 'client',
      password: 'client',
      role: Role.Client,
    });
  }*/

  connexion(login: string, password: string): Observable<AppUser> {
    /* this.userConnect = this.clients.find(
      (user) => user.login == login && user.password == password
    ) as Client;
    this.isConnect.next(this.userConnect != null);*/
    return this.http.post<AppUser>(`${this.url}/login`, {
      login: login,
      password: password,
    });
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    // Vérifiez si le jeton est présent et valide selon vos propres critères
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    localStorage.removeItem(this.userKey);
    // Effectuez toute autre logique de déconnexion nécessaire
    //this.router.navigate(['/connexion']);
  }

  
  removeUser(): void {
    localStorage.removeItem(this.userKey);
  }
  saveUser(user: AppUser): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
 }

 getUser(): AppUser | null {
   const user = localStorage.getItem(this.userKey);
   if (user != null) {
     return JSON.parse(user) as AppUser;
   }
   return null;
 }

  getRoles(): String[]{
    const roles = localStorage.getItem('roles');
    if (roles != null) {
      return JSON.parse(roles) as String[];
    }
    return [];
  }
}
