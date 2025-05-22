import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionSuscripcionComponent } from './eleccion-suscripcion.component';

describe('EleccionSuscripcionComponent', () => {
  let component: EleccionSuscripcionComponent;
  let fixture: ComponentFixture<EleccionSuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EleccionSuscripcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleccionSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
