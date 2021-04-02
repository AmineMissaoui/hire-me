import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJobBySectorComponent } from './search-job-by-sector.component';

describe('SearchJobBySectorComponent', () => {
  let component: SearchJobBySectorComponent;
  let fixture: ComponentFixture<SearchJobBySectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchJobBySectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJobBySectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
