import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddJobSeekerComponent } from './add-job-seeker/add-job-seeker.component';
import { DeleteJobSeekerComponent } from './delete-job-seeker/delete-job-seeker.component';
import { DetailJobSeekerComponent } from './detail-job-seeker/detail-job-seeker.component';

import { JobSeekerComponent } from './job-seeker.component';
import { ListJobSeekerComponent } from './list-job-seeker/list-job-seeker.component';
import { UpdateJobSeekerComponent } from './update-job-seeker/update-job-seeker.component';

const routes: Routes = [
  { path: 'job-seeker', component: JobSeekerComponent },
  { path: 'add-job-seeker', component: AddJobSeekerComponent },
  { path: 'delete-job-seeker/:id', component: DeleteJobSeekerComponent },
  { path: 'detail-job-seeker/:id', component: DetailJobSeekerComponent },
  { path: 'list-job-seeker', component: ListJobSeekerComponent },
  { path: 'update-job-seeker/:id', component: UpdateJobSeekerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSeekerRoutingModule { }
