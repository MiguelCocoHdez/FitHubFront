import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaRolComponent } from './tarjeta-rol.component';

describe('TarjetaRolComponent', () => {
  let component: TarjetaRolComponent;
  let fixture: ComponentFixture<TarjetaRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaRolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
