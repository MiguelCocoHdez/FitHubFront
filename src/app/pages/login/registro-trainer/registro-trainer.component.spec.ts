import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTrainerComponent } from './registro-trainer.component';

describe('RegistroTrainerComponent', () => {
  let component: RegistroTrainerComponent;
  let fixture: ComponentFixture<RegistroTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroTrainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
