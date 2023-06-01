import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulairesComponent } from './formulaires.component';
import { AnneeScolaireComponent } from './annee-scolaire/annee-scolaire.component';
import { SemestreComponent } from './semestre/semestre.component';
import { SalleComponent } from './salle/salle.component';
import { ProfesseurComponent } from '../prof/professeur/professeur.component';


const routes: Routes = [
  { path: '', component: FormulairesComponent },
  { path: 'anneeScolaire', component: AnneeScolaireComponent },
  { path: 'semestre', component: SemestreComponent },
  { path: 'salle', component: SalleComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulairesRoutingModule { }
