import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNiveauProjetComponent } from './list-niveau-projet.component';

describe('ListNiveauProjetComponent', () => {
  let component: ListNiveauProjetComponent;
  let fixture: ComponentFixture<ListNiveauProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNiveauProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNiveauProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
