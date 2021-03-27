import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JobSeeker } from 'src/app/model/job-seeker.model';
import { JobSeekerService } from 'src/app/shared/job-seeker.service';

@Component({
  selector: 'app-add-job-seeker',
  templateUrl: './add-job-seeker.component.html',
  styleUrls: ['./add-job-seeker.component.scss']
})
export class AddJobSeekerComponent implements OnInit {
  jobSeeker : JobSeeker;
  constructor(private _jobSeekerService: JobSeekerService, private _router: Router) { }

  ngOnInit(): void {
    this.jobSeeker = new JobSeeker();
  }


  save(myForm : NgForm){
    this._jobSeekerService.addJobSeeker(this.jobSeeker).subscribe();
    myForm.reset();
    this._router.navigate(['./job-seeker']);
  }

}
