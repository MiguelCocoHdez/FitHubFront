import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTrainerComponent } from './buscar-trainer.component';

describe('BuscarTrainerComponent', () => {
  let component: BuscarTrainerComponent;
  let fixture: ComponentFixture<BuscarTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarTrainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
