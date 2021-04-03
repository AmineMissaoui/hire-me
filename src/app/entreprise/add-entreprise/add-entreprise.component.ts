import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/model/entreprise.model';
import { Sector } from 'src/app/model/sector.model';
import { EntrepriseService } from 'src/app/shared/entreprise.service';

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.scss']
})
export class AddEntrepriseComponent implements OnInit {
  Entreprise : Entreprise;
  listSectors : Sector;
  sectorId : string;
  constructor(private _entrepriseService: EntrepriseService, private _router: Router) { }

  ngOnInit(): void {
    this.Entreprise = new Entreprise();
    this._entrepriseService.getSectors().subscribe(data => {
      this.listSectors = data;
    })
  }

  selectOption(value){
    this.sectorId = value;
    this.Entreprise.secteurId = parseInt(this.sectorId);
}

  save(myForm : NgForm){
    this._entrepriseService.addEntreprise(this.Entreprise).subscribe();
    myForm.reset();
    this._router.navigate(['./entreprise']);
  }

}
