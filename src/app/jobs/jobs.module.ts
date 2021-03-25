import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { UpdateJobsComponent } from './update-jobs/update-jobs.component';
import { DeleteJobsComponent } from './delete-jobs/delete-jobs.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { DetailJobsComponent } from './detail-jobs/detail-jobs.component';


@NgModule({
  declarations: [
    JobsComponent, 
    AddJobsComponent, 
    ListJobsComponent, 
    UpdateJobsComponent, 
    DeleteJobsComponent, DetailJobsComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    FormsModule,
    LayoutModule
  ]
})
export class JobsModule { }
