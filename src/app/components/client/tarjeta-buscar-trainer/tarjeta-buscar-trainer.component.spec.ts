import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaBuscarTrainerComponent } from './tarjeta-buscar-trainer.component';

describe('TarjetaBuscarTrainerComponent', () => {
  let component: TarjetaBuscarTrainerComponent;
  let fixture: ComponentFixture<TarjetaBuscarTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaBuscarTrainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaBuscarTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
