import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classe, Cours, Filiere, Niveau, Session } from '../models/classe-model';


@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http:HttpClient) { }

  private url=`http://localhost:8080/angular/classe`



   //============================================classe==========================================================

   getAllClasses():Observable<Classe[]>
   {
     return this.http.get<Classe[]>(`${this.url}/classes`)
 
   }
  //ajout une classe
  addClasse(classe:any)
  {
    return this.http.post(`${this.url}/addClasse`,classe)
    
  }

  //============================================Niveau==========================================================

    getAllNiveau():Observable<Niveau[]>
    {
      return this.http.get<Niveau[]>(`${this.url}/niveaux`)
  
    }
   //ajout un niveau
   addNiveau(niveau:any)
   {
     return this.http.post(`${this.url}/addNiveau`,niveau)
    
   }

    //============================================Filiere==========================================================

    getAllFiliere():Observable<Filiere[]>
    {
      return this.http.get<Filiere[]>(`${this.url}/filieres`)
  
    }
   //ajout une Filiere
   addFiliere(filiere:any)
   {
     return this.http.post(`${this.url}/addFiliere`,filiere)
     
   }
    //============================================Cours==========================================================

    getAllCours():Observable<Cours[]>
    {
      return this.http.get<Cours[]>(`${this.url}/cours`)
  
    }
    //coursByClasseID
      
  getCoursdByClasseID(id:number):Observable<Cours[]>
  {
    return this.http.get<Cours[]>(`${this.url}/coursByClasseID/${id}`)
  
  }

   //ajout une Filiere
   addCours(filiere:any)
   {
     return this.http.post(`${this.url}/addCours`,filiere)
     
   }
    //============================================Session==========================================================

    getAllSession():Observable<Session[]>
    {
      return this.http.get<Session[]>(`${this.url}/sessions`)
  
    }
     //coursByClasseID
      
  getSessionByCoursId(id:number):Observable<Session[]>
  {
    return this.http.get<Session[]>(`${this.url}/sessionsByCoursID/${id}`)
  
  }
   //ajout une session
   addSession(session:any)
   {
     return this.http.post(`${this.url}/addSession`,session)
     
   }
   



 

}
