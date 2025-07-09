import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAvisoEliminarRutinaComponent } from './modal-aviso-eliminar-rutina.component';

describe('ModalAvisoEliminarRutinaComponent', () => {
  let component: ModalAvisoEliminarRutinaComponent;
  let fixture: ComponentFixture<ModalAvisoEliminarRutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAvisoEliminarRutinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAvisoEliminarRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
