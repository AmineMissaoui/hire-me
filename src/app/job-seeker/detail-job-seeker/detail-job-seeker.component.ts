import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobSeeker } from 'src/app/model/job-seeker.model';
import { JobSeekerService } from 'src/app/shared/job-seeker.service';

@Component({
  selector: 'app-detail-job-seeker',
  templateUrl: './detail-job-seeker.component.html',
  styleUrls: ['./detail-job-seeker.component.scss']
})
export class DetailJobSeekerComponent implements OnInit {
  jobSeekerId : JobSeeker;
  jobSeekerDetail : JobSeeker;
  constructor(private route: ActivatedRoute, private _jobsSeekerService: JobSeekerService) { }

  ngOnInit(): void {

    this.route.params.subscribe(data => {
      this.jobSeekerId = data.id;
    });

    this._jobsSeekerService.viewJobSeeker(this.jobSeekerId).subscribe(data =>{
      this.jobSeekerDetail = data;
    })

  }

}
