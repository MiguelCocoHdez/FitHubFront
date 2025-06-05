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

  @Output() solicitudRechazada = new EventEmitter<void>()

  rechazarCliente() {
    this.notificationService.rechazarPeticion(this.idPeticion, this.token).subscribe({
      next: (data) => {
        console.log(data)
        this.cdr.detectChanges()
        this.solicitudRechazada.emit()
      },
      error: (error) => {
        console.log("Error al rechazar la peticion", error)
      }
    })
  }
}
