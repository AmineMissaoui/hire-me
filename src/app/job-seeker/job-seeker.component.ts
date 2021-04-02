import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.scss']
})
export class JobSeekerComponent implements OnInit {

recievedId ;

  constructor() { }

  ngOnInit(): void {
  }

  getChildId(data){
    this.recievedId = data;
    console.log('my id is ' + this.recievedId);
  }

}
