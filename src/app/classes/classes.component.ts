import { Component, OnInit,HostListener } from '@angular/core';

import { SchoolService } from '../shared/services/school.service';
import { Router } from '@angular/router';
import { ClassesService } from '../shared/services/classes.service';
import { Classe, Cours, Filiere, Niveau } from '../shared/models/classe-model';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit{

  public classes:Classe[]=[]
  public filieres:Filiere[]=[]
  public niveaux:Niveau[]=[]
  public coursByClasse:Cours[]=[]

  //public semestre!:Semestre

  classe: any = {};
  constructor(
    private classeService:ClassesService,
    private router:Router)
  {

  }
  ngOnInit(): void {
   
    //iniialisation de tableau de filiere
    this.classeService.getAllFiliere().subscribe(data=>
      this.filieres=data);
      //iniialisation de tableau de niveau
      this.classeService.getAllNiveau().subscribe(data=>
        this.niveaux=data);
      //iniialisation de tableau de classe
    this.classeService.getAllClasses().subscribe(data=>
      this.classes=data);
      
      console.log(this.classes);
  }/*
  insertAnneeScolaire()
  {
        this.schoolService.addAnneeScolaire(this.libelle);
        //this.router.navigateByUrl('/')
    }*/
    onAddClasse(){
      this.classeService.addClasse(this.classe).subscribe(data => 
        {
          window.location.reload(); 
        //this.router.navigateByUrl('/');
        //console.log(data);
        },
          error => {
            console.log(error);
          });
    }
    //
    onCoursByClasse(id:number)
    {
      this.classeService.getCoursdByClasseID(id).subscribe(data => 
        this.coursByClasse=data
        //this.annScolaire.semestres=this.semestres;

      )

    }


}

