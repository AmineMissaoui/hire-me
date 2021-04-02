import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobSeekerEducation } from 'src/app/model/job-seeker-education.model';
import { JobSeekerExperience } from 'src/app/model/job-seeker-experience.model';
import { JobSeeker } from 'src/app/model/job-seeker.model';
import { JobSeekerService } from 'src/app/shared/job-seeker.service';

@Component({
  selector: 'app-detail-job-seeker',
  templateUrl: './detail-job-seeker.component.html',
  styleUrls: ['./detail-job-seeker.component.scss']
})
export class DetailJobSeekerComponent implements OnInit {
  @Output() shareMyId = new EventEmitter();

  jobSeekerId : JobSeeker;
  jobSeekerDetail : JobSeeker;
  jobSeekerExperiences : JobSeekerExperience;
  jobSeekerEducations : JobSeekerEducation;

  constructor(private route: ActivatedRoute, private _jobsSeekerService: JobSeekerService) { }

  ngOnInit(): void {

    this.route.params.subscribe(data => {
      this.jobSeekerId = data.id;
    });

    this._jobsSeekerService.viewJobSeeker(this.jobSeekerId).subscribe(data =>{
      this.jobSeekerDetail = data;
    });

    this._jobsSeekerService.getWorkExperiences(this.jobSeekerId).subscribe(data =>{
      this.jobSeekerExperiences = data;
    });

    this._jobsSeekerService.getEducations(this.jobSeekerId).subscribe(data =>{
      this.jobSeekerEducations = data;
    });
    this.shareMyId.emit(this.jobSeekerId);
  }


}
