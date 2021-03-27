import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobSeeker } from 'src/app/model/job-seeker.model';
import { JobSeekerService } from 'src/app/shared/job-seeker.service';

@Component({
  selector: 'app-update-job-seeker',
  templateUrl: './update-job-seeker.component.html',
  styleUrls: ['./update-job-seeker.component.scss']
})
export class UpdateJobSeekerComponent implements OnInit {
  jobSeekerId : JobSeeker;
  jobSeekerDetail: JobSeeker;
  constructor(private route : ActivatedRoute ,private _jobSeekerService: JobSeekerService, private _router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data =>{
      this.jobSeekerId = data.id;
    })

    this._jobSeekerService.viewJobSeeker(this.jobSeekerId).subscribe(data => {
      this.jobSeekerDetail = data;
    })
  }


  
  save(myForm : NgForm){
    const updateJobSeeker ={
      fullName : myForm.value.fullName,
      profession : myForm.value.profession,
      adresse : myForm.value.adresse,
      phoneNumber : myForm.value.phoneNumber,
      facebookLink : myForm.value.facebookLink,
      twitterLink : myForm.value.twitterLink,
      linkedInLink : myForm.value.linkedInLink,
      description : myForm.value.description,
    }


    this._jobSeekerService.updateJobSeeker(updateJobSeeker, this.jobSeekerId ).subscribe();
    myForm.reset();
    this._router.navigate(['./job-seeker']);
  }

}
