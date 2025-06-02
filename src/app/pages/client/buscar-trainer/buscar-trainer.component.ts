import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Client } from '../../../services/clientService/client.service';
import { SidebarDashboardClientComponent } from "../../../components/client/sidebar-dashboard-client/sidebar-dashboard-client.component";
import { TrainerService, TrainerSinClient } from '../../../services/trainerService/trainer.service';
import { TarjetaBuscarTrainerComponent } from "../../../components/client/tarjeta-buscar-trainer/tarjeta-buscar-trainer.component";

@Component({
  selector: 'app-buscar-trainer',
  imports: [SidebarDashboardClientComponent, TarjetaBuscarTrainerComponent],
  templateUrl: './buscar-trainer.component.html',
  styleUrl: './buscar-trainer.component.css'
})
export class BuscarTrainerComponent implements OnInit {

  client!: Client
  trainers!: TrainerSinClient[]

  constructor(private trainerService: TrainerService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.client = JSON.parse(localStorage.getItem('client') || '{}')

    this.trainerService.verTodosTrainers().subscribe({
      next: (trainers) => {
        this.trainers = trainers
        this.cdr.detectChanges()
        console.log('Trainers obtenidos:', this.trainers)
      },
      error: (error) => {
        console.error('Error al obtener los trainers:', error)
      }
    })
  }
}
