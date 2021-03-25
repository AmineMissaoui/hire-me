import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from 'src/app/model/jobs.model';
import { EntrepriseService } from 'src/app/shared/entreprise.service';
import { JobsService } from 'src/app/shared/jobs.service';

@Component({
  selector: 'app-delete-jobs',
  templateUrl: './delete-jobs.component.html',
  styleUrls: ['./delete-jobs.component.scss']
})
export class DeleteJobsComponent implements OnInit {

  jobId : Jobs;

  constructor(private route: ActivatedRoute, private _jobsService: JobsService, private _router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.jobId = data.id;
      this._jobsService.deleteJob(this.jobId).subscribe();
      this._router.navigate(['./jobs']);
    })
  }

}
