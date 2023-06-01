import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecuriteService } from '../../services/securite.service';
import { AppUser, UserForm } from '../../models/app-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  page!: string;
  user: UserForm = {
    login: '',
    password: '',
  };
  isLoginFailed: boolean = true;
  errorMessage: string = '';
  constructor(
    private route: ActivatedRoute,
    private secService: SecuriteService,
    private router: Router,
  ) {}

  ngOnInit(): void {
   // this.route.queryParams.subscribe((params) => {
    //  this.page = params['page'];
    //});
    //Panier Avec Connexion
    //if (this.page == 'panier' && this.secService.isConnect.getValue()) {
      //let panier = this.panierService.panier$.getValue();
      //const client = this.secService.getUser();
      //if (client) panier.client = client;
      //this.cmdeService.addCommande(panier);
      //this.panierService.clearPanier();
      //this.router.navigateByUrl('/cmdes');
    //}
  }
  onConnexion() {
    this.secService.connexion(this.user.login, this.user.password).subscribe({
      next: (response) => {
          if(response)
          {
            localStorage.setItem('token', response.username);
            localStorage.setItem('roles', JSON.stringify(response.roles));
            this.secService.saveUser(response);
          }else
          {
            
          }
     
          // Réponse réussie - stocker le jeton dans le localStorage
         
        



        this.isLoginFailed = true;
        //Enregistrement du User dans le LocalStorage
        //this.secService.saveUser(client);
        //if (this.page == 'panier') {
          //let panier = this.panierService.panier$.getValue();
         // panier.client = client;
          //this.cmdeService.addCommande(panier);
         // this.panierService.clearPanier();
       // }
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        this.isLoginFailed = false;
        this.errorMessage = err.error.message;
      },
    });
    //Connexion
    /* if (this.page == 'login') {
      if (this.login()) {
        this.router.navigateByUrl('/cmdes');
      } else {
        this.isLoginFailed = false;
      }
    }
    //Panier sans Connexion
    if (this.page == 'panier') {
      if (this.login()) {
        let panier = this.panierService.panier$.getValue();
        if (this.secService.userConnect)
          panier.client = this.secService.userConnect;
        this.cmdeService.addCommande(panier);
        this.panierService.clearPanier();
        this.router.navigateByUrl('/cmdes');
      } else {
        this.isLoginFailed = false;
      }
    }*/
  }

  /*login(): boolean {
    this.secService.connexion(this.user.login, this.user.password)
    .subscribe();
    return this.secService.isConnect.getValue();
  }*/
}