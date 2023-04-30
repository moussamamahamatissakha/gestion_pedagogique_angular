import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AnneeScolaire, Semestre } from 'src/app/shared/models/schoolModel';
import { SchoolService } from 'src/app/shared/services/school.service';

@Component({
  selector: 'app-annee-scolaire',
  templateUrl: './annee-scolaire.component.html',
  styleUrls: ['./annee-scolaire.component.css']
})
export class AnneeScolaireComponent implements OnInit{

  public anneescolaires:AnneeScolaire[]=[]
  public libelle!:string
  annScolaire: any = {};
  public semestres:Semestre[]=[]
  constructor(
    private schoolService:SchoolService,
    private router:Router)
  {

  }
  ngOnInit(): void {
    this.schoolService.getAllAnneescolaires().subscribe(data=>
      this.anneescolaires=data);
      console.log(this.anneescolaires);
  }/*
  insertAnneeScolaire()
  {
        this.schoolService.addAnneeScolaire(this.libelle);
        //this.router.navigateByUrl('/')
    }*/



    onAddAnneScolaire(){
      this.schoolService.addAnneeScolaire(this.annScolaire).subscribe(data => 
        {
        window.location.reload(); 
        //this.router.navigateByUrl('/');
        //console.log(data);

        },
          error => {
            console.log(error);
          });
    }
    
    onUneAnneScolaire(id:number)
    {
      this.schoolService.getSemestreindByIdAnneeScolaire(id).subscribe(data => 
        this.semestres=data
        //this.annScolaire.semestres=this.semestres;

      )

    }
    




}
