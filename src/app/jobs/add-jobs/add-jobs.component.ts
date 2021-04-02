import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Jobs } from 'src/app/model/jobs.model';
import { JobsService } from 'src/app/shared/jobs.service';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.scss']
})
export class AddJobsComponent implements OnInit {

  job : Jobs;
  nbrApplications : number ;
  viewersNbr : number 
  constructor(private _jobsService: JobsService, private _router: Router) { }

  ngOnInit(): void {
    this.job = new Jobs();
    this.job.nbrApplications = 0;
    this.job.viewersNbr = 0;
  }


  save(myForm : NgForm){
    this._jobsService.addJobs(this.job).subscribe();
    myForm.reset();
    this._router.navigate(['./jobs']);
  }

}
