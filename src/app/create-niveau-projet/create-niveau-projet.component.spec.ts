import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNiveauProjetComponent } from './create-niveau-projet.component';

describe('CreateNiveauProjetComponent', () => {
  let component: CreateNiveauProjetComponent;
  let fixture: ComponentFixture<CreateNiveauProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNiveauProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNiveauProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
