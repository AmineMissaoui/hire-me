import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jobs } from 'src/app/model/jobs.model';
import { Sector } from 'src/app/model/sector.model';
import { EntrepriseService } from 'src/app/shared/entreprise.service';
import { JobsService } from 'src/app/shared/jobs.service';

@Component({
  selector: 'app-search-job-by-sector',
  templateUrl: './search-job-by-sector.component.html',
  styleUrls: ['./search-job-by-sector.component.scss']
})
export class SearchJobBySectorComponent implements OnInit {

  listSectors: Sector;
  searchBySector: number;
  listJobs : Jobs;
  searchResult ='all';

  constructor(private _jobService: JobsService ,private _entrepriseservice: EntrepriseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._entrepriseservice.getSectors().subscribe(data => {
      this.listSectors = data;
    });

    this.route.params.subscribe(data => {
      this.searchBySector = data.id;
      
      this._jobService.searchBySector(this.searchBySector).subscribe(data => {
        this.listJobs = data;
      })
    })
  }

  selectOption(value){
    console.log(value);
      this.searchResult = value;
  }

}
