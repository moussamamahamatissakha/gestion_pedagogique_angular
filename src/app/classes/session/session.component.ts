import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classe, Cours, Session } from 'src/app/shared/models/classe-model';
import { Module, Semestre } from 'src/app/shared/models/schoolModel';
import { ClassesService } from 'src/app/shared/services/classes.service';
import { SchoolService } from 'src/app/shared/services/school.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit{

  public listCours:Cours[]=[]
  public sessions:Session[]=[]
 


  //public semestre!:Semestre

  session: any = {};

  constructor(
    private classeService:ClassesService,
    private schoolService:SchoolService,
    private router:Router)
  {

  }
  ngOnInit(): void {
   
    //iniialisation de tableau de listCours
    this.classeService.getAllCours().subscribe(data=>
      this.listCours=data);    
      //iniialisation de tableau de modules
    this.classeService.getAllSession().subscribe(data=>
      this.sessions=data); 
    


      console.log(this.listCours);
  }/*
  insertAnneeScolaire()
  {
        this.schoolService.addAnneeScolaire(this.libelle);
        //this.router.navigateByUrl('/')
    }*/
    onAddSession(){
      this.classeService.addSession(this.session).subscribe(data => 
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

