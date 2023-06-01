import { Component, OnInit ,TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { Professeur } from 'src/app/shared/models/profModel';
import {  Salle } from 'src/app/shared/models/schoolModel';
import { ProfesseursService } from 'src/app/shared/services/prof.service';
import { SchoolService } from 'src/app/shared/services/school.service';

@Component({
  selector: 'app-professeur',
  templateUrl: './professeur.component.html',
  styleUrls: ['./professeur.component.css']
})
export class ProfesseurComponent implements OnInit{

  public professeurs:Professeur[]=[]
  p: number = 1;
  professeur: any = {};
  constructor(
    private schoolService:SchoolService,
    private professeursService:ProfesseursService,
    private router:Router)
  {

  }
  ngOnInit(): void {
    this.professeursService.getAllProfesseur().subscribe(data=>
      this.professeurs=data);
      console.log(this.professeurs);
  }/*
  insertAnneeScolaire()
  {
        this.schoolService.addAnneeScolaire(this.libelle);
        //this.router.navigateByUrl('/')
    }*/



    onAddProfesseur(){
      this.professeursService.addProfesseur(this.professeur).subscribe(data => 
        {
          window.location.reload();
        //this.router.navigateByUrl('/formulaires/anneeScolaire');
        //console.log(data);

        },
          error => {
            console.log(error);
          });
    }




}

