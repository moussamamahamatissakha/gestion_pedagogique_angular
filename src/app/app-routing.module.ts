import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorisationService } from './shared/services/authorisation.service';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'security', loadChildren: () => import('./shared/security/security.module').then(m => m.SecurityModule) },

  { path: 'formulaires', loadChildren: () => import('./formulaires/formulaires.module').then(m => m.FormulairesModule), canActivate: [AuthorisationService] },
  { path: 'classes', loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule) , canActivate: [AuthorisationService]},
  { path: 'prof', loadChildren: () => import('./prof/prof.module').then(m => m.ProfModule) , canActivate: [AuthorisationService]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
