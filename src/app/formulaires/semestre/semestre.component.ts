import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AnneeScolaire, Semestre } from 'src/app/shared/models/schoolModel';
import { SchoolService } from 'src/app/shared/services/school.service';

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.css']
})
export class SemestreComponent implements OnInit{

  public anneescolaires:AnneeScolaire[]=[]
  public semestres:Semestre[]=[]
  public libelle!:string

  //public semestre!:Semestre
  //semestre!:Semestre;
  semestre:any={}
  /*
  semestre:any={
    id:0,
    numero:'',
    idAnnee:0,
    //anneeScolaire:null
  }
  */
  
  constructor(
    private schoolService:SchoolService,
    private router:Router)
  {

  }
  ngOnInit(): void {
    this.schoolService.getAllSemetres().subscribe(data=>
      this.semestres=data);
      this.schoolService.getAllAnneescolaires().subscribe(data=>
        this.anneescolaires=data);
    

      console.log(this.semestres);
  }/*
  insertAnneeScolaire()
  {
        this.schoolService.addAnneeScolaire(this.libelle);
        //this.router.navigateByUrl('/')
    }*/



    onAddSemestre(){  
      this.schoolService.addSemestre(this.semestre).subscribe(data => 
        {
          window.location.reload();
        //this.router.navigateByUrl('/');
        //console.log(data);
        
        },
          error => {
            console.log(error);
          });
    }


}
