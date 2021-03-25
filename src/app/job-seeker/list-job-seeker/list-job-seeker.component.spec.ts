import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobSeekerComponent } from './list-job-seeker.component';

describe('ListJobSeekerComponent', () => {
  let component: ListJobSeekerComponent;
  let fixture: ComponentFixture<ListJobSeekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJobSeekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
