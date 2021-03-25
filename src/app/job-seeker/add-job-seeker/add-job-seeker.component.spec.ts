import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobSeekerComponent } from './add-job-seeker.component';

describe('AddJobSeekerComponent', () => {
  let component: AddJobSeekerComponent;
  let fixture: ComponentFixture<AddJobSeekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobSeekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
