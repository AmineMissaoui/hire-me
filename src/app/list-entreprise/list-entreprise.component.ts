import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.scss']
})
export class ListEntrepriseComponent implements OnInit {

  @Input() detailEntreprise;
  constructor() { }

  ngOnInit(): void {
  }

}
