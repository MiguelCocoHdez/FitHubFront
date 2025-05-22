import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaSuscripcionComponent } from './tarjeta-suscripcion.component';

describe('TarjetaSuscripcionComponent', () => {
  let component: TarjetaSuscripcionComponent;
  let fixture: ComponentFixture<TarjetaSuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaSuscripcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
