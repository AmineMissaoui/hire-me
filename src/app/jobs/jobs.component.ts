import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../model/entreprise.model';
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
  recievedId : number;
  recievedJob : Jobs;
  viewersNbr : number;
  entreprise : Entreprise;

  constructor(private _entrepriseService: EntrepriseService, private _jobsService: JobsService) { }

  ngOnInit(): void {

    


    this._jobsService.getJobs().subscribe(data => {
      this.listJobs = data
      console.log(this.listJobs);
      });
      
      this._entrepriseService.getSectors().subscribe( data => {
        this.listSectors = data;
      });
  }



  increase(id){
    this.recievedId = id;
    this._jobsService.getJobById(this.recievedId).subscribe(data => {
      this.recievedJob = data;
      this.viewersNbr = this.recievedJob[0].viewersNbr;
      console.log(this.recievedJob[0].viewersNbr)


       const updateJob = {
         title : this.recievedJob[0].title,
         description : this.recievedJob[0].description,
         entrepriseId : this.recievedJob[0].entrepriseId,
        nbrPostes : this.recievedJob[0].nbrPostes,
        secteurId : this.recievedJob[0].secteurId,
        nbrApplications : this.recievedJob[0].nbrApplications,
        viewersNbr : this.recievedJob[0].viewersNbr + 1
      }

      this._jobsService.updateJob(updateJob, this.recievedId).subscribe()
    });

  }



}
