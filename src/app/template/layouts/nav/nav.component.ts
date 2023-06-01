import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/shared/models/app-user';
import { SchoolService } from 'src/app/shared/services/school.service';
import { SecuriteService } from 'src/app/shared/services/securite.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private schoolService:SchoolService,
    private securityService:SecuriteService,
    private router:Router)
  {

  }
 public username:any='';
 public photo:any='';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    //this.username=localStorage.removeItem('token');
   // console.log("username : "+this.username);
    this.username=this.securityService.getUser()?.username;
    this.photo=this.securityService.getUser()?.photo;
    console.log("username : "+this.username);
  }
  hasRpRole() {
    const roles = this.securityService.getRoles();
    // Vérifiez si le rôle d'administrateur est présent dans la liste des rôles de l'utilisateur
    return roles.includes('RP');
  }
  hasProf() {
    const roles = this.securityService.getRoles();
    // Vérifiez si le rôle d'administrateur est présent dans la liste des rôles de l'utilisateur
    return roles.includes('PROFESSEUR');
  }

  onHome()
  {
    this.router.navigateByUrl('/formulaires/anneeScolaire');
  }

  isLoggedIn() {
    return this.securityService.isLoggedIn();
  }

  logout() {
    this.securityService.logout();
    this.router.navigate(['/security/login']);
  }


  

}
