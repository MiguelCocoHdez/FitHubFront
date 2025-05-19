import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionRolComponent } from './eleccion-rol.component';

describe('EleccionRolComponent', () => {
  let component: EleccionRolComponent;
  let fixture: ComponentFixture<EleccionRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EleccionRolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleccionRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
