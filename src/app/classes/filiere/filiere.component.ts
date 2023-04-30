import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Filiere } from 'src/app/shared/models/classe-model';
import { ClassesService } from 'src/app/shared/services/classes.service';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit{

  public filieres:Filiere[]=[]
 
  filiere: any = {};
  constructor(
    private classeService:ClassesService,
    private router:Router)
  {

  }
  ngOnInit(): void {
    this.classeService.getAllFiliere().subscribe(data=>
      this.filieres=data);
      console.log(this.filieres);
  }/*
  insertAnneeScolaire()
  {
        this.schoolService.addAnneeScolaire(this.libelle);
        //this.router.navigateByUrl('/')
    }*/



    onAddFiliere(){
      this.classeService.addFiliere(this.filiere).subscribe(data => 
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

