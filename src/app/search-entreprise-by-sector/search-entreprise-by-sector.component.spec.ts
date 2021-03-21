import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEntrepriseBySectorComponent } from './search-entreprise-by-sector.component';

describe('SearchEntrepriseBySectorComponent', () => {
  let component: SearchEntrepriseBySectorComponent;
  let fixture: ComponentFixture<SearchEntrepriseBySectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEntrepriseBySectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEntrepriseBySectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
