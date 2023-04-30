import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Filiere } from 'src/app/shared/models/classe-model';
import { Salle } from 'src/app/shared/models/schoolModel';
import { ClassesService } from 'src/app/shared/services/classes.service';
import { SchoolService } from 'src/app/shared/services/school.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit{

  public salles:Salle[]=[]
 
  salle: any = {};
  constructor(
    private schoolService:SchoolService,
    private router:Router)
  {

  }
  ngOnInit(): void {
    this.schoolService.getAllSalle().subscribe(data=>
      this.salles=data);
      console.log(this.salles);
  }/*
  insertAnneeScolaire()
  {
        this.schoolService.addAnneeScolaire(this.libelle);
        //this.router.navigateByUrl('/')
    }*/



    onAddSalle(){
      this.schoolService.addSalle(this.salle).subscribe(data => 
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

