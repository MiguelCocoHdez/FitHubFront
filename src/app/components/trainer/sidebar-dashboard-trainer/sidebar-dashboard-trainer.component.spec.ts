import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDashboardTrainerComponent } from './sidebar-dashboard-trainer.component';

describe('SidebarDashboardTrainerComponent', () => {
  let component: SidebarDashboardTrainerComponent;
  let fixture: ComponentFixture<SidebarDashboardTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarDashboardTrainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarDashboardTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
