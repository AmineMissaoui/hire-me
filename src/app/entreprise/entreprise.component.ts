import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../model/entreprise.model';
import { Sector } from '../model/sector.model';
import { EntrepriseService } from '../shared/entreprise.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements OnInit {

  listEntreprise : Entreprise ;
  listSectors : Sector;
  constructor(private _entrepriseService: EntrepriseService) { }

  ngOnInit(): void {
    this._entrepriseService.getEntreprise().subscribe(
      data => this.listEntreprise = data);
      this._entrepriseService.getSectors().subscribe( data => {
        this.listSectors = data;
      })
  }

}
