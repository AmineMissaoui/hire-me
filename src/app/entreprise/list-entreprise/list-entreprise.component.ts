import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.scss']
})
export class ListEntrepriseComponent implements OnInit {

  @Input() listEntreprise;
  @Input() listSectors;
  searchResult ='all';

  constructor(private _router: Router) { }

  ngOnInit(): void {

  }

  selectOption(value){
      this.searchResult = value;
  }
}
