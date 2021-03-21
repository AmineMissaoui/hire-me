import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEntrepriseComponent } from './update-entreprise.component';

describe('UpdateEntrepriseComponent', () => {
  let component: UpdateEntrepriseComponent;
  let fixture: ComponentFixture<UpdateEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
