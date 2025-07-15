import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCrearRutinaComponent } from './boton-crear-rutina.component';

describe('BotonCrearRutinaComponent', () => {
  let component: BotonCrearRutinaComponent;
  let fixture: ComponentFixture<BotonCrearRutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonCrearRutinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonCrearRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
