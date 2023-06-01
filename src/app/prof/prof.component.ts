import { Component, OnInit, Output ,TemplateRef} from '@angular/core';
import { Etudiant } from '../shared/models/etudiant-model';
import { Classe, Cours, Filiere, Niveau, Session } from '../shared/models/classe-model';
import { ClassesService } from '../shared/services/classes.service';
import { EtudiantsService } from '../shared/services/etudiants.service';
import { Router } from '@angular/router';
import { ProfesseursService } from '../shared/services/prof.service';
import { Module } from '../shared/models/schoolModel';
import { SecuriteService } from '../shared/services/securite.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent  implements OnInit{
  public modalRef!: BsModalRef;
  @Output() public etudiants:Etudiant[]=[]
  public cours:Cours[]=[]
  public session!:Session
  public coursByProf:Cours[]=[]
  public moduleBycoursByProf:Module[]=[]
  public sessionsByCours:Session[]=[]
  public byDate:any={}
  public dateDebutFilter:any={}
  public dateFinFilter:any={}
  public idByModel:number=0
  public idProf!:number;


  //public semestre!:Semestre

 
  constructor(
    private modalService: BsModalService,
    private securityService:SecuriteService,
    private classeService:ClassesService,
    private etudiantsService:EtudiantsService,
    private professeursService:ProfesseursService,
    private router:Router)
  {

  }
  ngOnInit(): void {
    this.idProf=Number(this.securityService.getUser()?.id);
    //iniialisation les cours
    if(this.cours.length==0)
    {
      this.professeursService.getCoursByProf( this.idProf).subscribe(data=>
        this.cours=data
        );
    }
   

      this.professeursService.getAModulesByProf( this.idProf).subscribe(data=>
        this.moduleBycoursByProf=data
        );

     
      //iniialisation de tableau de niveau
   
  }/*
  insertAnneeScolaire()
  {
        this.schoolService.addAnneeScolaire(this.libelle);
        //this.router.navigateByUrl('/')
    }*/
    onChercheCoursByProfByDate(){
      
      this.professeursService.getCoursByProfAndByDate(this.idProf,this.byDate).subscribe(data => 
        {
          //getCoursByProfAndByDate
          //window.location.reload(); 
          this.cours=data  
        //this.router.navigateByUrl('/');
        //console.log(data);
        },
          error => {
            console.log(error);
          });
    }
    //cherchezCours 'unprof par periode
    onChercheCoursByProfByPeriode(){
      
      this.professeursService.getCoursByProfAndByPeriode(this.idProf,this.dateDebutFilter,this.dateFinFilter).subscribe(data => 
        {
          //getCoursByProfAndByDate
          //window.location.reload(); 
          this.cours=data  
        //this.router.navigateByUrl('/');
        //console.log(data);
        },
          error => {
            console.log(error);
          });
    }
    //
    onRechargeCoursToAll()
    {
      this.professeursService.getCoursByProf(this.idProf).subscribe(data=>
        this.cours=data);

    }


    onSessionsByCours(id:number)
    {
      this.classeService.getSessionByCoursId(id).subscribe(data => 
        this.sessionsByCours=data
        //this.annScolaire.semestres=this.semestres;

      )

    }

    onChangeEtatSessionToDeclareTOrDemandeAnnuler(id:number,num:number)
    {
      this.professeursService.setEtatToSessionToDemandeAnnulerOrDeclarerTerminer(id,num).subscribe(data => 
        this.session=data
        //this.annScolaire.semestres=this.semestres;
      )
       window.location.reload()

    }
    //trier les cours par module par la echerche :getCoursByModule
    onFindCoursByModule()
    {
      this.professeursService.getCoursByModule(this.idByModel).subscribe(data => 
        this.cours=data
        
        //this.annScolaire.semestres=this.semestres;
      )
      console.log("id Module "+this.idByModel)
      //window.location.reload()

    }
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
    
    
    //getCoursByProfAndByDate
    //onEtudiantByClasse
   


}