import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Jobs } from 'src/app/model/jobs.model';
import { Sector } from 'src/app/model/sector.model';
import { EntrepriseService } from 'src/app/shared/entreprise.service';
import { JobsService } from 'src/app/shared/jobs.service';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.scss']
})
export class AddJobsComponent implements OnInit {

  job : Jobs;
  nbrApplications : number ;
  viewersNbr : number;
  listSectors : Sector;
  sectorId : string;

  constructor(private _jobsService: JobsService, private _router: Router, private _entrepriseService : EntrepriseService) { }

  ngOnInit(): void {
    this.job = new Jobs();
    this.job.nbrApplications = 0;
    this.job.viewersNbr = 0;
    this._entrepriseService.getSectors().subscribe(data => {
      this.listSectors = data;
    })
  }

  selectOption(value){
      this.sectorId = value;
      this.job.secteurId = parseInt(this.sectorId);
  }


  save(myForm : NgForm){
    this._jobsService.addJobs(this.job).subscribe();
    myForm.reset();
    this._router.navigate(['./jobs']);
  }

}
