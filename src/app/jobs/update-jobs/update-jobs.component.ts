import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from 'src/app/model/jobs.model';
import { Sector } from 'src/app/model/sector.model';
import { EntrepriseService } from 'src/app/shared/entreprise.service';
import { JobsService } from 'src/app/shared/jobs.service';

@Component({
  selector: 'app-update-jobs',
  templateUrl: './update-jobs.component.html',
  styleUrls: ['./update-jobs.component.scss']
})
export class UpdateJobsComponent implements OnInit {

  jobId : Jobs;
  jobDetail : Jobs;
  listSectors : Sector;
  sectorId : string;
  selected : any;
  sectorName : string;

  constructor(private _entrepriseService : EntrepriseService ,private route : ActivatedRoute ,private _jobsService: JobsService, private _router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data =>{
      this.jobId = data.id;
    });

    this._jobsService.viewJob(this.jobId).subscribe(data => {
      this.jobDetail = data;
      this.selected = data.secteurId;
      console.log(this.selected);
      this._entrepriseService.getSectorsById(this.selected).subscribe(data =>{
        console.log(data[0].name);
        this.sectorName =data[0].name;
        console.log(this.sectorName);
      })
    });

    this._entrepriseService.getSectors().subscribe(data => {
      this.listSectors = data;
    })
  }


  selectOption(value){
    this.sectorId = value;
    this.jobDetail.secteurId = parseInt(this.sectorId);
}


  save(myForm : NgForm){
    const updateJob ={
      title : myForm.value.title,
      description : myForm.value.description,
      entrepriseId : myForm.value.entrepriseId,
      nbrPostes : myForm.value.nbrPostes,
      secteurId :  myForm.value.secteurId,
      nbrApplications : this.jobDetail.nbrApplications,
      viewersNbr : this.jobDetail.viewersNbr
    }



    this._jobsService.updateJob(updateJob, this.jobId ).subscribe();
    myForm.reset();
    this._router.navigate(['./jobs']);
  }

}
