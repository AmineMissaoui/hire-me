import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jobs } from 'src/app/model/jobs.model';
import { JobsService } from 'src/app/shared/jobs.service';

@Component({
  selector: 'app-detail-jobs',
  templateUrl: './detail-jobs.component.html',
  styleUrls: ['./detail-jobs.component.scss']
})
export class DetailJobsComponent implements OnInit {

  jobId: Jobs;
  jobDetail : Jobs;

  constructor(private route: ActivatedRoute, private _jobsService: JobsService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(data => {
      this.jobId = data.id;
    });

    this._jobsService.viewJob(this.jobId).subscribe(data =>{
      this.jobDetail = data;
    })
  }

}
