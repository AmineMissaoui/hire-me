import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entreprise } from 'src/app/model/entreprise.model';
import { EntrepriseService } from 'src/app/shared/entreprise.service';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.scss']
})
export class ListJobsComponent implements OnInit {
  @Input() listJobs;
  @Input() listSectors;
  searchResult = 'all';
  entreprise : Entreprise;
  @Output() increaseViewers = new EventEmitter();
  constructor(private _entrepriseService : EntrepriseService) { }

  ngOnInit(): void {

  }

  selectOption(value){
    console.log(value);
      this.searchResult = value;
  }
  
  view(id){
    this.increaseViewers.emit(id);
  }

}
