import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfComponent } from './prof.component';
import { ProfesseurComponent } from './professeur/professeur.component';

const routes: Routes = [
  { path: '', component: ProfComponent },
  { path: 'professeur', component: ProfesseurComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfRoutingModule { }
