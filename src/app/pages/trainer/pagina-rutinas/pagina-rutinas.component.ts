import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Trainer } from '../../../services/trainerService/trainer.service';
import { SidebarDashboardTrainerComponent } from "../../../components/trainer/sidebar-dashboard-trainer/sidebar-dashboard-trainer.component";
import { Rutina, RutinasService } from '../../../services/rutinasService/rutinas.service';
import { CardsRutinasComponent } from "../../../components/trainer/cards-rutinas/cards-rutinas.component";
import { BotonCrearRutinaComponent } from "../../../components/trainer/boton-crear-rutina/boton-crear-rutina.component";

@Component({
  selector: 'app-pagina-rutinas',
  imports: [SidebarDashboardTrainerComponent, CardsRutinasComponent, BotonCrearRutinaComponent],
  templateUrl: './pagina-rutinas.component.html',
  styleUrl: './pagina-rutinas.component.css'
})
export class PaginaRutinasComponent implements OnInit {

  trainer!: Trainer
  rutinas!: Rutina[]

  constructor(private rutinasService: RutinasService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.trainer = JSON.parse(localStorage.getItem('trainer') || '{}')
    const token = localStorage.getItem('token') || ''

    this.rutinasService.verRutinasTrainer(this.trainer.id, token).subscribe({
      next: (data) => {
        this.rutinas = data
        console.log(this.rutinas)
        this.cdr.detectChanges()
      },
      error: (error) => {
        console.log('Error al obtener las rutinas del trainer:', error)
      }
    })
  }

  refrescarRutinas() {
    const token = localStorage.getItem('token') || ''
    this.rutinasService.verRutinasTrainer(this.trainer.id, token).subscribe({
      next: (data) => {
        this.rutinas = data
        console.log('Rutinas actualizadas:', this.rutinas)
        this.cdr.detectChanges()
      },
      error: (error) => {
        console.log('Error al actualizar las rutinas:', error)
      }
    })
  }
}
