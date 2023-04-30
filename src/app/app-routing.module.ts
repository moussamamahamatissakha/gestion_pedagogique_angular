import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'security', loadChildren: () => import('./shared/security/security.module').then(m => m.SecurityModule) },

  { path: 'formulaires', loadChildren: () => import('./formulaires/formulaires.module').then(m => m.FormulairesModule) },
  { path: 'classes', loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
