import { Component, OnInit } from '@angular/core';
import { Jobs } from '../model/jobs.model';
import { Sector } from '../model/sector.model';
import { EntrepriseService } from '../shared/entreprise.service';
import { JobsService } from '../shared/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  listJobs : Jobs ;
  listSectors : Sector;
  constructor(private _entrepriseService: EntrepriseService, private _jobsService: JobsService) { }

  ngOnInit(): void {
    this._jobsService.getJobs().subscribe(
      data => this.listJobs = data);
      this._entrepriseService.getSectors().subscribe( data => {
        this.listSectors = data;
      })
  }

}
