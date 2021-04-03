import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from 'src/app/model/entreprise.model';
import { Sector } from 'src/app/model/sector.model';
import { EntrepriseService } from 'src/app/shared/entreprise.service';

@Component({
  selector: 'app-update-entreprise',
  templateUrl: './update-entreprise.component.html',
  styleUrls: ['./update-entreprise.component.scss']
})
export class UpdateEntrepriseComponent implements OnInit {
  entrepriseId : Entreprise;

  entrepriseDetail : Entreprise;
  listSectors : Sector;
  sectorId : string;
  selected : any;
  sectorName : string;
  constructor(private route : ActivatedRoute ,private _entrepriseService: EntrepriseService, private _router: Router) { }

  ngOnInit(): void {
    

    this.route.params.subscribe(data =>{
      this.entrepriseId = data.id;
    })

    this._entrepriseService.viewEntreprise(this.entrepriseId).subscribe(data => {
      this.entrepriseDetail = data;
      this.selected = data.secteurId;
      console.log(this.selected);
      this._entrepriseService.getSectorsById(this.selected).subscribe(data =>{
        console.log(data[0].name);
        this.sectorName =data[0].name;
        console.log(this.sectorName);
      });

      this._entrepriseService.getSectors().subscribe(data => {
        this.listSectors = data;
      })
    })

  }


  selectOption(value){
    this.sectorId = value;
    this.entrepriseDetail.secteurId = parseInt(this.sectorId);
}


  save(myForm : NgForm){
    const updateEntreprise ={
      raisonSociale : myForm.value.raisonSociale,
      adresse : myForm.value.adresse,
      nbrEmployee : myForm.value.nbrEmployee,
      secteurId : myForm.value.secteurId,
      description : myForm.value.description
    }

    this._entrepriseService.updateEntreprise(updateEntreprise, this.entrepriseId ).subscribe();
    myForm.reset();
    this._router.navigate(['./entreprise']);
  }

}

