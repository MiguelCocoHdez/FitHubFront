import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../../../services/clientService/client.service';
import { NotificationService } from '../../../services/notificationService/notification.service';

@Component({
  selector: 'app-cards-solicitudes-clientes',
  imports: [],
  templateUrl: './cards-solicitudes-clientes.component.html',
  styleUrl: './cards-solicitudes-clientes.component.css'
})
export class CardsSolicitudesClientesComponent {

  constructor(private notificationService: NotificationService, private cdr: ChangeDetectorRef) {}

  @Input() client!: Client
  @Input() mensaje!: string
  @Input() idPeticion!: number
  @Input() token!: string

  @Output() refrescarSolicitudes = new EventEmitter<void>()

  aceptarCliente() {
    this.notificationService.aceptarPeticion(this.idPeticion, this.token).subscribe({
      next: (data) => {
        console.log(data)
        this.cdr.detectChanges()
        this.refrescarSolicitudes.emit()
      },
      error: (error) => {
        console.log("Error al aceptar la peticion", error)
      }
    })
  }

  rechazarCliente() {
    this.notificationService.rechazarPeticion(this.idPeticion, this.token).subscribe({
      next: (data) => {
        console.log(data)
        this.cdr.detectChanges()
        this.refrescarSolicitudes.emit()
      },
      error: (error) => {
        console.log("Error al rechazar la peticion", error)
      }
    })
  }
}
