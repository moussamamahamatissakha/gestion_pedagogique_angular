import { Component, OnInit ,TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { Classe, Cours, Filiere, Niveau, Session } from 'src/app/shared/models/classe-model';
import { Professeur } from 'src/app/shared/models/profModel';
import { Module, Semestre } from 'src/app/shared/models/schoolModel';
import { ClassesService } from 'src/app/shared/services/classes.service';
import { ProfesseursService } from 'src/app/shared/services/prof.service';
import { SchoolService } from 'src/app/shared/services/school.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit{

  public listCours:Cours[]=[]
  public modules:Module[]=[]
  public classes:Classe[]=[]
  public semestres:Semestre[]=[]
  public sessionsByCours:Session[]=[]
  public professeurs:Professeur[]=[]

  //public semestre!:Semestre
  p: number = 1;
  public modalRef!: BsModalRef;


  ClasseCours:any={
    id:0,
    idModule:0,
    idSemestre:0,
    idProfesseur:0,
    nombreHeure:0,
    idClasses:[]
  }

  constructor(    
    private modalService: BsModalService,
    private classeService:ClassesService,
    private schoolService:SchoolService,
    private professeursService:ProfesseursService,
    private router:Router)
  {

  }
  ngOnInit(): void {
   
    //iniialisation de tableau de listCours
    this.classeService.getAllCours().subscribe(data=>
      this.listCours=data);    
      console.log("iciiiiiiiici"+this.listCours)
      //iniialisation de tableau de modules
    this.schoolService.getAllModule().subscribe(data=>
      this.modules=data); 
    this.classeService.getAllClasses().subscribe(data=>
      this.classes=data); 
    this.schoolService.getAllSemetres().subscribe(data=>
      this.semestres=data); 
      this.professeursService.getAllProfesseur().subscribe(data=>
        this.professeurs=data); 


      console.log(this.listCours);
  }/*
  insertAnneeScolaire()
  {
        this.schoolService.addAnneeScolaire(this.libelle);
        //this.router.navigateByUrl('/')
    }*/
    onAddCours(){

    for (const classe of this.classes) {
      if (classe.selected) {
        this.ClasseCours.idClasses.push(classe.id);

      }
      
      this.classeService.addCours(this.ClasseCours).subscribe(data => 
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

    onSessionsByCours(id:number)
    {
      this.classeService.getSessionByCoursId(id).subscribe(data => 
        this.sessionsByCours=data
        //this.annScolaire.semestres=this.semestres;

      )
    }
    onCoursByEtat(etat:number)
    {
      if(etat==1)
      {
        this.classeService.getCoursdByEtat("En Cours").subscribe(data => 
          this.listCours=data
          //this.annScolaire.semestres=this.semestres;
        )
      }
      if(etat==2)
      {
        this.classeService.getCoursdByEtat("Terminer").subscribe(data => 
          this.listCours=data
          //this.annScolaire.semestres=this.semestres;
        )
        
      }
      if(etat==3)
      {
        this.classeService.getAllCours().subscribe(data => 
          this.listCours=data
          //this.annScolaire.semestres=this.semestres;
  
        )
        
      }
    
    }
    //changer l'etat d'un cours
    onChangeEtatToCoursToAnnuler(id:number)
    {
      this.classeService.setEtatToCoursToAnnuler(id).subscribe(data => 
        this.listCours=data
        
        //this.annScolaire.semestres=this.semestres;
      )
      window.location.reload();
    }
    onChangeEtatToCoursToTerminer(id:number)
    {
      this.classeService.setEtatToCoursToTerminer(id).subscribe(data => 
        this.listCours=data
        
        //this.annScolaire.semestres=this.semestres;
      )
      window.location.reload();
    }
    //setEtatToSession
    onChangeEtatToSessionToTerminer(id:number)
    {
      this.classeService.setEtatToSessionToTerminer(id).subscribe(
        
        //this.annScolaire.semestres=this.semestres;
      )
      window.location.reload();
    }
    onChangeEtatToSessionToAnnuler(id:number)
    {
      this.classeService.setEtatToSessionToAnnuler(id).subscribe(
        
        //this.annScolaire.semestres=this.semestres;
      )
      window.location.reload();
    }

    openModal(template: TemplateRef<any>,id:number) {
      this.modalRef = this.modalService.show(template);
      this.classeService.getSessionByCoursId(id).subscribe(data => 
        this.sessionsByCours=data
        //this.annScolaire.semestres=this.semestres;
      )
    
    }
}

