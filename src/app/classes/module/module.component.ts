import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Filiere } from 'src/app/shared/models/classe-model';
import { Module } from 'src/app/shared/models/schoolModel';
import { ClassesService } from 'src/app/shared/services/classes.service';
import { SchoolService } from 'src/app/shared/services/school.service';
@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit{

  public modules:Module[]=[]
 
  module: any = {};
  constructor(
    private schoolService:SchoolService,
    private router:Router)
  {

  }
  ngOnInit(): void {
    this.schoolService.getAllModule().subscribe(data=>
      this.modules=data);
      console.log(this.modules);
  }
    onAddModule(){
      this.schoolService.addModule(this.module).subscribe(data => 
        {
          window.location.reload();
        //this.router.navigateByUrl('/formulaires/anneeScolaire');
        console.log(data);

        },
          error => {
            console.log(error);
          });
    }




}

