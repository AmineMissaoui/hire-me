import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entreprise } from '../model/entreprise.model';
import { EntrepriseService } from '../shared/entreprise.service';

@Component({
  selector: 'app-detail-entreprise',
  templateUrl: './detail-entreprise.component.html',
  styleUrls: ['./detail-entreprise.component.scss']
})
export class DetailEntrepriseComponent implements OnInit {

  entrepriseId: Entreprise;
  entrepriseDetail : Entreprise;


  constructor(private route: ActivatedRoute, private _entrepriseService: EntrepriseService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.entrepriseId = data.id;
    });

    this._entrepriseService.viewEntreprise(this.entrepriseId).subscribe(data =>{
      this.entrepriseDetail = data;
    })
  }

}
