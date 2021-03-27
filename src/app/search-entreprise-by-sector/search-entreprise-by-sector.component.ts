import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from '../model/entreprise.model';
import { Sector } from '../model/sector.model';
import { EntrepriseService } from '../shared/entreprise.service';

@Component({
  selector: 'app-search-entreprise-by-sector',
  templateUrl: './search-entreprise-by-sector.component.html',
  styleUrls: ['./search-entreprise-by-sector.component.scss']
})
export class SearchEntrepriseBySectorComponent implements OnInit {
  listSectors: Sector;
  searchBySector: Sector;
  listEntreprise : Entreprise;
  searchResult ='all';
;
  constructor(private route: ActivatedRoute, private _entrepriseservice: EntrepriseService, private _router: Router) { }



  ngOnInit(): void {

    this._entrepriseservice.getSectors().subscribe(data => {
      this.listSectors = data;
    })

    this.route.params.subscribe(data => {
      this.searchBySector = data.id;
      
      this._entrepriseservice.searchBySector(this.searchBySector).subscribe(data => {
        this.listEntreprise = data;
      })
    })
  }


  selectOption(value){
    console.log(value);
      this.searchResult = value;
  }

}
