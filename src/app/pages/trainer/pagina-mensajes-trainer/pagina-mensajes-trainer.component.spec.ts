import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMensajesTrainerComponent } from './pagina-mensajes-trainer.component';

describe('PaginaMensajesTrainerComponent', () => {
  let component: PaginaMensajesTrainerComponent;
  let fixture: ComponentFixture<PaginaMensajesTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaMensajesTrainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaMensajesTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
