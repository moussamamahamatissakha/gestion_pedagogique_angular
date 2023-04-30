import { Injectable } from '@angular/core';
import { Professeur } from '../models/profModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesseursService {

  constructor(private http:HttpClient) { }
  private url=`http://localhost:8080/angular/professeur`


   //============================================Professeur==========================================================
   
 
   getAllProfesseur():Observable<Professeur[]>
   {
     return this.http.get<Professeur[]>(`${this.url}/professurs`)
 
   }
  //ajout une session
  addProfesseur(module:any)
  {
    return this.http.post(`${this.url}/addProfessur`,module)
    //this.isConnect.next(true)
  }
   
}
