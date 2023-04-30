import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {

  constructor(private http:HttpClient) { }
  private url=`http://localhost:8080/angular/etudiant`
  //etudiants
     //============================================Etudiant==========================================================
  
     getAllEtudiant():Observable<Etudiant[]>
     {
       return this.http.get<Etudiant[]>(`${this.url}/etudiants`)
   
     }
    //ajout une session
    addEtudiant(etudiant:any)
    {
      return this.http.post(`${this.url}/addEtudiant`,etudiant)
      //this.isConnect.next(true)
    }

}
