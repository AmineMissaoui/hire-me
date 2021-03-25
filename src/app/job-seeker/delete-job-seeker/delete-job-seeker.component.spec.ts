import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJobSeekerComponent } from './delete-job-seeker.component';

describe('DeleteJobSeekerComponent', () => {
  let component: DeleteJobSeekerComponent;
  let fixture: ComponentFixture<DeleteJobSeekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteJobSeekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
