import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPrecedenteComponent } from './pizza-precedente.component';

describe('PizzaPrecedenteComponent', () => {
  let component: PizzaPrecedenteComponent;
  let fixture: ComponentFixture<PizzaPrecedenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaPrecedenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaPrecedenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
