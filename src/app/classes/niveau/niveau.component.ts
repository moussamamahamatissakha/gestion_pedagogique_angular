import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Niveau } from 'src/app/shared/models/classe-model';
import { ClassesService } from 'src/app/shared/services/classes.service';

@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent implements OnInit{

  public niveaux:Niveau[]=[]

  niveau: any = {};
  constructor(
    private classeService:ClassesService,
    private router:Router)
  {

  }
  ngOnInit(): void {
    this.classeService.getAllNiveau().subscribe(data=>
      this.niveaux=data);
      console.log(this.niveaux);
  }/*
  insertAnneeScolaire()
  {
        this.schoolService.addAnneeScolaire(this.libelle);
        //this.router.navigateByUrl('/')
    }*/



    onAddNiveau(){
      this.classeService.addNiveau(this.niveau).subscribe(data => 
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
