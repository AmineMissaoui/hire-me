import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from 'src/app/model/entreprise.model';
import { Jobs } from 'src/app/model/jobs.model';
import { EntrepriseService } from 'src/app/shared/entreprise.service';
import { JobsService } from 'src/app/shared/jobs.service';

@Component({
  selector: 'app-detail-jobs',
  templateUrl: './detail-jobs.component.html',
  styleUrls: ['./detail-jobs.component.scss']
})
export class DetailJobsComponent implements OnInit {
  
  

  jobId: Jobs;
  jobDetail : Jobs;
  sectorId : number;
  sectorName : string;
  recievedJob : Jobs;
  nbrApplications : number;
  entreprise : Entreprise;
  entrepriseId : number;
  entrepriseName : string;

  constructor(private route: ActivatedRoute, private _jobsService: JobsService, private _entrepriseService : EntrepriseService, private _router : Router) { }

  ngOnInit(): void {

    
    this.route.params.subscribe(data => {
      this.jobId = data.id;
    });



    this._jobsService.viewJob(this.jobId).subscribe(data =>{
      this.jobDetail = data;
      this.sectorId = data.secteurId;
      this.entrepriseId = data.entrepriseId;
      this._entrepriseService.getSectorsById(this.sectorId).subscribe(data => {
        this.sectorName = data[0].name;
      });
      this._entrepriseService.getEntrepriseById(this.entrepriseId).subscribe(data => {
        this.entrepriseName = data[0].raisonSociale;
      })
    });
    
  }


  apply(id){
    this._jobsService.getJobById(id).subscribe(data => {
      this.recievedJob = data;
      this.nbrApplications = this.recievedJob[0].nbrApplications;

       const updateJob = {
         title : this.recievedJob[0].title,
         description : this.recievedJob[0].description,
         entrepriseId : this.recievedJob[0].entrepriseId,
        nbrPostes : this.recievedJob[0].nbrPostes,
        secteurId : this.recievedJob[0].secteurId,
        nbrApplications : this.recievedJob[0].nbrApplications + 1,
        viewersNbr : this.recievedJob[0].viewersNbr 
      }

      this._jobsService.updateJob(updateJob, id).subscribe()
      this._router.navigate(['./jobs']);
    });

  }

}
