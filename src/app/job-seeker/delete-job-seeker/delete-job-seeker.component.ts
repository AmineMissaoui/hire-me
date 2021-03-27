import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobSeeker } from 'src/app/model/job-seeker.model';
import { JobSeekerService } from 'src/app/shared/job-seeker.service';

@Component({
  selector: 'app-delete-job-seeker',
  templateUrl: './delete-job-seeker.component.html',
  styleUrls: ['./delete-job-seeker.component.scss']
})
export class DeleteJobSeekerComponent implements OnInit {
  jobSeekerId: JobSeeker;
  constructor(private route: ActivatedRoute, private _jobSeekerService: JobSeekerService, private _router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.jobSeekerId = data.id;
      this._jobSeekerService.deleteJobSeeker(this.jobSeekerId).subscribe();
      this._router.navigate(['./job-seeker']);
    })

  }

}
