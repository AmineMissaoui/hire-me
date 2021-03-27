import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobSeeker } from '../model/job-seeker.model';

@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {
  url = 'http://localhost:3000/jobSeeker';

  constructor(private http: HttpClient) { }

  addJobSeeker(jobSeeker : JobSeeker) : Observable<JobSeeker>{
    return this.http.post<JobSeeker>(this.url, jobSeeker);
  }

  updateJobSeeker(jobSeeker, jobSeekerId) : Observable<JobSeeker>{
    const jobSeekerUrl = this.url + '/' + jobSeekerId;
    return this.http.put<JobSeeker>(jobSeekerUrl , jobSeeker);
  }

  viewJobSeeker(jobSeekerId) : Observable<JobSeeker>{
    const jobSeekerUrl = this.url + '/' + jobSeekerId;
    return this.http.get<JobSeeker>(jobSeekerUrl);
  }

  deleteJobSeeker(jobSeekerId) : Observable<JobSeeker>{
    const jobSeekerUrl = this.url + '/' + jobSeekerId;
    return this.http.delete<JobSeeker>(jobSeekerUrl);
  }

}
