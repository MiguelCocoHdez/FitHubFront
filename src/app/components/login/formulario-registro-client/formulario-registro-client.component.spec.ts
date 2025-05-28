import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroClientComponent } from './formulario-registro-client.component';

describe('FormularioRegistroClientComponent', () => {
  let component: FormularioRegistroClientComponent;
  let fixture: ComponentFixture<FormularioRegistroClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRegistroClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRegistroClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
