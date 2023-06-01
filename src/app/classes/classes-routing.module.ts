import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes.component';
import { NiveauComponent } from './niveau/niveau.component';
import { FiliereComponent } from './filiere/filiere.component';
import { CoursComponent } from './cours/cours.component';
import { ModuleComponent } from './module/module.component';
import { SessionComponent } from './session/session.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

const routes: Routes = [
  { path: '', component: ClassesComponent },
  { path: 'niveau', component: NiveauComponent },
  { path: 'filiere', component: FiliereComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'module', component: ModuleComponent },
  { path: 'session', component: SessionComponent },
  { path: 'etudiant', component: EtudiantComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
