import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionSuccessComponent } from './suscripcion-success.component';

describe('SuscripcionSuccessComponent', () => {
  let component: SuscripcionSuccessComponent;
  let fixture: ComponentFixture<SuscripcionSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuscripcionSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuscripcionSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
