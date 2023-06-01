import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfRoutingModule } from './prof-routing.module';
import { ProfComponent } from './prof.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule ,} from 'ngx-pagination';
import { ProfesseurComponent } from './professeur/professeur.component';




@NgModule({
  declarations: [
    ProfComponent,
    ProfesseurComponent
  
  ],
  imports: [
    CommonModule,
    ProfRoutingModule,
    FormsModule,
    NgxPaginationModule,
   // BrowserModule,
    ModalModule.forRoot()
  ]
})
export class ProfModule { }
