import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDashboardClientComponent } from './sidebar-dashboard-client.component';

describe('SidebarDashboardClientComponent', () => {
  let component: SidebarDashboardClientComponent;
  let fixture: ComponentFixture<SidebarDashboardClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarDashboardClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarDashboardClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
