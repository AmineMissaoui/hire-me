import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJobsComponent } from './delete-jobs.component';

describe('DeleteJobsComponent', () => {
  let component: DeleteJobsComponent;
  let fixture: ComponentFixture<DeleteJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
