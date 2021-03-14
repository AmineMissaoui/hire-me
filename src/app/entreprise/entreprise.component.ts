import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements OnInit {

  listeEntreprises = [
    {id: 1, raisonSociale: ' Entreprise 1',
    adresse: 'Adresse Entreprise 1', secteur: 'IT', nbrEmployee: 1, nbrPostes : 1},

    {id: 2, raisonSociale: ' Entreprise 2',
    adresse: 'Adresse Entreprise 2', secteur: 'IT', nbrEmployee: 1, nbrPostes : 1},

    {id: 3, raisonSociale: ' Entreprise 3',
    adresse: 'Adresse Entreprise 3', secteur: 'IT', nbrEmployee: 1, nbrPostes : 1},
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
