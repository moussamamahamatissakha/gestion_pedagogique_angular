import { Injectable } from '@angular/core';
import { Professeur } from '../models/profModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cours, Session } from '../models/classe-model';
import { Module } from '../models/schoolModel';

@Injectable({
  providedIn: 'root'
})
export class ProfesseursService {
  constructor(private http:HttpClient) { }
  private url=`http://localhost:8080/api/professeur`
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
  //coursByProf
  getCoursByProf(id:number):Observable<Cours[]>
  {
    return this.http.get<Cours[]>(`${this.url}/coursByProf/${id}`)

  }
   //coursByProf and By Date
   getCoursByProfAndByDate(id:number,date:Date):Observable<Cours[]>
   {
     return this.http.get<Cours[]>(`${this.url}/coursByProfAndByDate/${id}/${date}`)
 
   }
   //{dateDebut}/{dateFin} lister les cours d'un prof par peride
   getCoursByProfAndByPeriode(id:number,dateDebut:Date,dateFin:Date):Observable<Cours[]>
   {
     return this.http.get<Cours[]>(`${this.url}/coursByProfAndByDate/${id}/${dateDebut}/${dateFin}`)
 
   }
   //setEtatToSessionToDemandeAnnulerOrDeclarerTerminer
   setEtatToSessionToDemandeAnnulerOrDeclarerTerminer(id:number,num:number):Observable<Session>
   {
     return this.http.get<Session>(`${this.url}/setEtatToSessionToDemandeAnnulerOrDeclarerTerminer/${id}/${num}`)
 
   }
   //getAModulesByProf
   getAModulesByProf(id:number):Observable<Module[]>
   {
     return this.http.get<Module[]>(`${this.url}/getAModulesByProf/${id}`)
 
   }
   //CoursDTO
    //getAModulesByProf
    getCoursByModule(id:number):Observable<Cours[]>
    {
      return this.http.get<Cours[]>(`${this.url}/getCoursByModule/${id}`)
  
    }
   
}
