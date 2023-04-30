import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulairesRoutingModule } from './formulaires-routing.module';
import { FormulairesComponent } from './formulaires.component';
import { AnneeScolaireComponent } from './annee-scolaire/annee-scolaire.component';
import { FormsModule } from '@angular/forms';
import { SemestreComponent } from './semestre/semestre.component';
import { SalleComponent } from './salle/salle.component';
import { ProfesseurComponent } from './professeur/professeur.component';



@NgModule({
  declarations: [
    FormulairesComponent,
    AnneeScolaireComponent,
    SemestreComponent,
    SalleComponent,
    ProfesseurComponent,
  
  ],
  imports: [
    CommonModule,
    FormulairesRoutingModule,
    FormsModule
  ]
})
export class FormulairesModule { }
