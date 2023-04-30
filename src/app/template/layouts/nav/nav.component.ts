import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from 'src/app/shared/services/school.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private schoolService:SchoolService,
    private router:Router)
  {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onHome()
  {
    this.router.navigateByUrl('/formulaires/anneeScolaire');
  }


  

}
