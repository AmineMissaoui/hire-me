import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from '../model/jobs.model';
import { Sector } from '../model/sector.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  url = 'http://localhost:3000/job';

  constructor(private http: HttpClient) { }

  getJobs() : Observable<Jobs>{
    return this.http.get<Jobs>(this.url);
  }

  addJobs(job : Jobs) : Observable<Jobs>{
    return this.http.post<Jobs>(this.url, job);
  }

  updateJob(job, jobId) : Observable<Jobs>{
    const jobUrl = this.url + '/' + jobId;
    return this.http.put<Jobs>(jobUrl , job);
  }

  viewJob(jobId) : Observable<Jobs>{
    const jobUrl = this.url + '/' + jobId;
    return this.http.get<Jobs>(jobUrl);
  }

  deleteJob(jobId) : Observable<Jobs>{
    const jobUrl = this.url + '/' + jobId;
    return this.http.delete<Jobs>(jobUrl);
  }

  searchBySector(sectorId) : Observable<Jobs>{
    const jobUrl = this.url + '?secteurId=' + sectorId;
    return this.http.get<Jobs>(jobUrl);
  }

  getSectors(): Observable<Sector>{
    const sectorUrl = 'http://localhost:3000/sector';
    return this.http.get<Sector>(sectorUrl);
  }

}
