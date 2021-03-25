import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJobsComponent } from './detail-jobs.component';

describe('DetailJobsComponent', () => {
  let component: DetailJobsComponent;
  let fixture: ComponentFixture<DetailJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
