import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSolicitudesClientesComponent } from './cards-solicitudes-clientes.component';

describe('CardsSolicitudesClientesComponent', () => {
  let component: CardsSolicitudesClientesComponent;
  let fixture: ComponentFixture<CardsSolicitudesClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsSolicitudesClientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsSolicitudesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
