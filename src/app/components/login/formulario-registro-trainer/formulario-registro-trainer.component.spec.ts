import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroTrainerComponent } from './formulario-registro-trainer.component';

describe('FormularioRegistroTrainerComponent', () => {
  let component: FormularioRegistroTrainerComponent;
  let fixture: ComponentFixture<FormularioRegistroTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRegistroTrainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRegistroTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
