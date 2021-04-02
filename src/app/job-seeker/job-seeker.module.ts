import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSeekerRoutingModule } from './job-seeker-routing.module';
import { JobSeekerComponent } from './job-seeker.component';
import { AddJobSeekerComponent } from './add-job-seeker/add-job-seeker.component';
import { DeleteJobSeekerComponent } from './delete-job-seeker/delete-job-seeker.component';
import { UpdateJobSeekerComponent } from './update-job-seeker/update-job-seeker.component';
import { DetailJobSeekerComponent } from './detail-job-seeker/detail-job-seeker.component';
import { ListJobSeekerComponent } from './list-job-seeker/list-job-seeker.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [JobSeekerComponent, AddJobSeekerComponent, DeleteJobSeekerComponent, UpdateJobSeekerComponent, DetailJobSeekerComponent, ListJobSeekerComponent],
  imports: [
    CommonModule,
    JobSeekerRoutingModule,
    LayoutModule,
    FormsModule,
    RouterModule
  ]
})
export class JobSeekerModule { }
