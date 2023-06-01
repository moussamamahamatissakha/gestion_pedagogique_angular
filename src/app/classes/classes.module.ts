import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes.component';
import { FormsModule } from '@angular/forms';
import { FiliereComponent } from './filiere/filiere.component';
import { NiveauComponent } from './niveau/niveau.component';
import { CoursComponent } from './cours/cours.component';
import { ModuleComponent } from './module/module.component';
import { SessionComponent } from './session/session.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    ClassesComponent,
    NiveauComponent,
    FiliereComponent,
    CoursComponent,
    ModuleComponent,
    SessionComponent,
    EtudiantComponent,
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    ClassesRoutingModule,

    //le package de formulaire
    FormsModule,
    //le package de pagination
 
   // BrowserModule,
    ModalModule.forRoot()
    
  ]
})
export class ClassesModule { }
