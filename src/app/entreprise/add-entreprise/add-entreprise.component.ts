import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/model/entreprise.model';
import { EntrepriseService } from 'src/app/shared/entreprise.service';

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.scss']
})
export class AddEntrepriseComponent implements OnInit {
  Entreprise : Entreprise;
  constructor(private _entrepriseService: EntrepriseService, private _router: Router) { }

  ngOnInit(): void {
    this.Entreprise = new Entreprise();
  }

  save(myForm : NgForm){
    this._entrepriseService.addEntreprise(this.Entreprise).subscribe();
    myForm.reset();
    this._router.navigate(['./entreprise']);
  }

}
