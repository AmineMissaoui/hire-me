import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from 'src/app/model/jobs.model';
import { JobsService } from 'src/app/shared/jobs.service';

@Component({
  selector: 'app-update-jobs',
  templateUrl: './update-jobs.component.html',
  styleUrls: ['./update-jobs.component.scss']
})
export class UpdateJobsComponent implements OnInit {

  jobId : Jobs;

  jobDetail : Jobs;

  constructor(private route : ActivatedRoute ,private _jobsService: JobsService, private _router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data =>{
      this.jobId = data.id;
    })

    this._jobsService.viewJob(this.jobId).subscribe(data => {
      this.jobDetail = data;
    })
  }


  save(myForm : NgForm){
    const updateJob ={
      raisonSociale : myForm.value.raisonSociale,
      adresse : myForm.value.adresse,
      nbrEmployee : myForm.value.nbrEmployee,
      nbrPostes : myForm.value.nbrPostes,
      secteurId : myForm.value.secteurId
    }


    this._jobsService.updateJob(updateJob, this.jobId ).subscribe();
    myForm.reset();
    this._router.navigate(['./jobs']);
  }

}
