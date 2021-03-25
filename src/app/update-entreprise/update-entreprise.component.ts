import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from '../model/entreprise.model';
import { EntrepriseService } from '../shared/entreprise.service';

@Component({
  selector: 'app-update-entreprise',
  templateUrl: './update-entreprise.component.html',
  styleUrls: ['./update-entreprise.component.scss']
})
export class UpdateEntrepriseComponent implements OnInit {
  entrepriseId : Entreprise;

  entrepriseDetail : Entreprise;
  constructor(private route : ActivatedRoute ,private _entrepriseService: EntrepriseService, private _router: Router) { }

  ngOnInit(): void {
    

    this.route.params.subscribe(data =>{
      this.entrepriseId = data.id;
    })

    this._entrepriseService.viewEntreprise(this.entrepriseId).subscribe(data => {
      this.entrepriseDetail = data;
    })

  } 

  save(myForm : NgForm){
    const updateEntreprise ={
      raisonSociale : myForm.value.raisonSociale,
      adresse : myForm.value.adresse,
      nbrEmployee : myForm.value.nbrEmployee,
      nbrPostes : myForm.value.nbrPostes,
      secteurId : myForm.value.secteurId
    }


    this._entrepriseService.updateEntreprise(updateEntreprise, this.entrepriseId ).subscribe();
    myForm.reset();
    this._router.navigate(['./entreprise']);
  }

}
