import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntrepriseComponent } from './list-entreprise.component';

describe('ListEntrepriseComponent', () => {
  let component: ListEntrepriseComponent;
  let fixture: ComponentFixture<ListEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
