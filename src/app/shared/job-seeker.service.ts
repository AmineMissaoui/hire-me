import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobSeekerEducation } from '../model/job-seeker-education.model';
import { JobSeekerExperience } from '../model/job-seeker-experience.model';
import { JobSeeker } from '../model/job-seeker.model';

@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {
  jobSeekerUrl = 'http://localhost:3000/jobSeeker';
  jobSeekerWorkExperienceUrl = 'http://localhost:3000/workExperience';
  jobSeekerEducationUrl = 'http://localhost:3000/education';
  

  constructor(private http: HttpClient) { }

  addJobSeeker(jobSeeker : JobSeeker) : Observable<JobSeeker>{
    return this.http.post<JobSeeker>(this.jobSeekerUrl, jobSeeker);
  }

  updateJobSeeker(jobSeeker, jobSeekerId) : Observable<JobSeeker>{
    const jobSeekerUrl = this.jobSeekerUrl + '/' + jobSeekerId;
    return this.http.put<JobSeeker>(jobSeekerUrl , jobSeeker);
  }

  viewJobSeeker(jobSeekerId) : Observable<JobSeeker>{
    const jobSeekerUrl = this.jobSeekerUrl + '/' + jobSeekerId;
    return this.http.get<JobSeeker>(jobSeekerUrl);
  }

  deleteJobSeeker(jobSeekerId) : Observable<JobSeeker>{
    const jobSeekerUrl = this.jobSeekerUrl + '/' + jobSeekerId;
    return this.http.delete<JobSeeker>(jobSeekerUrl);
  }

  getWorkExperiences(jobSeekerId) : Observable<JobSeekerExperience>{
    const jobSeekerWorkExperience = this.jobSeekerWorkExperienceUrl + '?jobSeekerId=' + jobSeekerId;
    return this.http.get<JobSeekerExperience>(jobSeekerWorkExperience);
  }

  getEducations(jobSeekerId) : Observable<JobSeekerEducation>{
    const jobSeekerEducation = this.jobSeekerEducationUrl + '?jobSeekerId=' + jobSeekerId;
    return this.http.get<JobSeekerEducation>(jobSeekerEducation);
  }

}
