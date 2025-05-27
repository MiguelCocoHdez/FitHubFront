import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsInfoDashboardComponent } from './cards-info-dashboard.component';

describe('CardsInfoDashboardComponent', () => {
  let component: CardsInfoDashboardComponent;
  let fixture: ComponentFixture<CardsInfoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsInfoDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsInfoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
