import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Trainer } from '../../../services/trainerService/trainer.service';
import { SidebarDashboardTrainerComponent } from "../../../components/trainer/sidebar-dashboard-trainer/sidebar-dashboard-trainer.component";
import { NotificacionesTrainer, NotificationService } from '../../../services/notificationService/notification.service';
import { CardsSolicitudesClientesComponent } from "../../../components/trainer/cards-solicitudes-clientes/cards-solicitudes-clientes.component";

@Component({
  selector: 'app-solicitudes-clientes',
  imports: [SidebarDashboardTrainerComponent, CardsSolicitudesClientesComponent],
  templateUrl: './solicitudes-clientes.component.html',
  styleUrl: './solicitudes-clientes.component.css'
})
export class SolicitudesClientesComponent implements OnInit {

  trainer!: Trainer
  token!: string
  notificaciones!: NotificacionesTrainer[]

  constructor(private notificationService: NotificationService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.trainer = JSON.parse(localStorage.getItem('trainer') || '{}')
    this.token = localStorage.getItem('token') || ''

    this.notificationService.verNotificacionesTrainer(this.trainer.id, this.token).subscribe({
      next: (data) => {
        this.notificaciones = data
        this.cdr.detectChanges()
        console.log(this.notificaciones)
      },
      error: (error) => {
        console.error('Error al obtener las notificaciones:', error)
      }
    })
  }

  recargarNotificaciones() {
    this.trainer = JSON.parse(localStorage.getItem('trainer') || '{}')
    this.token = localStorage.getItem('token') || ''

    this.notificationService.verNotificacionesTrainer(this.trainer.id, this.token).subscribe({
      next: (data) => {
        this.notificaciones = data
        this.cdr.detectChanges()
        console.log(this.notificaciones)
      },
      error: (error) => {
        console.error('Error al obtener las notificaciones:', error)
      }
    })
  }
}
