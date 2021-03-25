import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobSeekerComponent } from './update-job-seeker.component';

describe('UpdateJobSeekerComponent', () => {
  let component: UpdateJobSeekerComponent;
  let fixture: ComponentFixture<UpdateJobSeekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJobSeekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
