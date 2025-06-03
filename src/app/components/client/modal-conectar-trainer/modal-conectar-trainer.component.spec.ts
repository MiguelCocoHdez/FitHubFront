import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConectarTrainerComponent } from './modal-conectar-trainer.component';

describe('ModalConectarTrainerComponent', () => {
  let component: ModalConectarTrainerComponent;
  let fixture: ComponentFixture<ModalConectarTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalConectarTrainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConectarTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
