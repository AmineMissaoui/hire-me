import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJobSeekerComponent } from './detail-job-seeker.component';

describe('DetailJobSeekerComponent', () => {
  let component: DetailJobSeekerComponent;
  let fixture: ComponentFixture<DetailJobSeekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailJobSeekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
