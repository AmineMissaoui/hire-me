import { Component, Input, OnInit } from '@angular/core';
import { Entreprise } from '../model/entreprise.model';
import { EntrepriseService } from '../shared/entreprise.service';

@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.scss']
})
export class ListEntrepriseComponent implements OnInit {

  @Input() detailEntreprise;
  listEntreprise ;
  constructor(private _entrepriseService: EntrepriseService) { }
  
  ngOnInit(): void {
    this._entrepriseService.getEntreprise().subscribe(
       (data) => this.listEntreprise = data);
  }


}
