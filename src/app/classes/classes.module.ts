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



@NgModule({
  declarations: [
    ClassesComponent,
    NiveauComponent,
    FiliereComponent,
    CoursComponent,
    ModuleComponent,
    SessionComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    FormsModule
  ]
})
export class ClassesModule { }
