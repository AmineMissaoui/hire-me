import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { DeleteJobsComponent } from './delete-jobs/delete-jobs.component';
import { DetailJobsComponent } from './detail-jobs/detail-jobs.component';

import { JobsComponent } from './jobs.component';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { SearchJobBySectorComponent } from './search-job-by-sector/search-job-by-sector.component';
import { UpdateJobsComponent } from './update-jobs/update-jobs.component';

const routes: Routes = [
  { path: '', component: JobsComponent },
  { path: 'add-job', component: AddJobsComponent },
  { path: 'delete-job/:id', component: DeleteJobsComponent },
  { path: 'update-job/:id', component: UpdateJobsComponent },
  { path: 'list-job', component: ListJobsComponent },
  { path: 'detail-job/:id', component: DetailJobsComponent },
  { path: 'sector-job/:id', component: SearchJobBySectorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
