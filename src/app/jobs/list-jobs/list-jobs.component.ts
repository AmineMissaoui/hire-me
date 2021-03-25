import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.scss']
})
export class ListJobsComponent implements OnInit {
  @Input() listJobs;
  @Input() listSectors;
  searchResult = 'all';
  constructor() { }

  ngOnInit(): void {
  }

  selectOption(value){
    console.log(value);
      this.searchResult = value;
  }

}
