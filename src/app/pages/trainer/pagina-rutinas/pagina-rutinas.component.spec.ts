import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRutinasComponent } from './pagina-rutinas.component';

describe('PaginaRutinasComponent', () => {
  let component: PaginaRutinasComponent;
  let fixture: ComponentFixture<PaginaRutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaRutinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaRutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
