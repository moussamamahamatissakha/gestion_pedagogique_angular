import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnneeScolaire, Module,Salle, Semestre } from '../models/schoolModel';


@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http:HttpClient) { }
  //============================================annee-scolaire===================================================
  //public anneescolaires:AnneeScolaire[]=[]
  private url=`http://localhost:8080/api/school`
  getAllAnneescolaires():Observable<AnneeScolaire[]>
  {
    return this.http.get<AnneeScolaire[]>(this.url)

  }
  //find by id
   ///annneeScolaire/
  anneeScolaireFindById(id:number):Observable<AnneeScolaire>
  {
    return this.http.get<AnneeScolaire>(`${this.url}/annneeScolaire/${id}`)
  
  }

  //ajout une annee scolaires
  addAnneeScolaire(anneeScolaire:any)
  {
    return this.http.post(`${this.url}/addAnneeScolaire`,anneeScolaire)
  }
 

  //============================================semestre==========================================================
   
 
    getAllSemetres():Observable<Semestre[]>
    {
      return this.http.get<Semestre[]>(`${this.url}/semestres`)
  
    }

     //find by id
   ///annneeScolaire/
  getSemestreindByIdAnneeScolaire(id:number):Observable<Semestre[]>
  {
    return this.http.get<Semestre[]>(`${this.url}/semestresByAnnee/${id}`)
  
  }
   //ajout une session
   addSemestre(semestre:any)
   {
     return this.http.post(`${this.url}/addSemestre`,semestre)
     //this.isConnect.next(true)
   }
   //============================================Salle==========================================================
   
 
   getAllSalle():Observable<Salle[]>
   {
     return this.http.get<Salle[]>(`${this.url}/salles`)
 
   }
  //ajout une session
  addSalle(salle:any)
  {
    return this.http.post(`${this.url}/addSalle`,salle)
    //this.isConnect.next(true)
  }
  //============================================Module==========================================================
   
 
  getAllModule():Observable<Module[]>
  {
    return this.http.get<Module[]>(`${this.url}/modules`)

  }
 //ajout une session
 addModule(module:any)
 {
   return this.http.post(`${this.url}/addModule`,module)
   //this.isConnect.next(true)
 }
 










































































 


}
