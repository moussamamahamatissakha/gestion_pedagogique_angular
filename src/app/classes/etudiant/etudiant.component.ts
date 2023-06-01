import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/shared/models/etudiant-model';
import { EtudiantsService } from 'src/app/shared/services/etudiants.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit{

  public etudiants:Etudiant[]=[]
 
  etudiant: any = {};
  constructor(
    private etudiantsService:EtudiantsService,
    private router:Router)
  {

  }
  ngOnInit(): void {
  this.etudiantsService.getAllEtudiant().subscribe(data=>
    this.etudiants=data
      );
     console.log(this.etudiants);
  }/*
  insertAnneeScolaire()
  {
        this.schoolService.addAnneeScolaire(this.libelle);
        //this.router.navigateByUrl('/')
    }*/



    onAddEtudiant(){
      this.etudiantsService.addEtudiant(this.etudiant).subscribe(data => 
        {
          window.location.reload();
        //this.router.navigateByUrl('/classes');
        //console.log(data);

        },
          error => {
            console.log(error);
          });
    }




}

