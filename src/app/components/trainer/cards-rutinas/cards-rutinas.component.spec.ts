import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsRutinasComponent } from './cards-rutinas.component';

describe('CardsRutinasComponent', () => {
  let component: CardsRutinasComponent;
  let fixture: ComponentFixture<CardsRutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsRutinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsRutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
