import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../model/entreprise.model';
import { EntrepriseService } from '../shared/entreprise.service';

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.scss']
})
export class AddEntrepriseComponent implements OnInit {
  Entreprise : Entreprise;
  constructor(private _entrepriseService: EntrepriseService) { }

  ngOnInit(): void {
    this.Entreprise = new Entreprise();
  }

  save(){
    this._entrepriseService.addEntreprise(this.Entreprise).subscribe();
  }

}
