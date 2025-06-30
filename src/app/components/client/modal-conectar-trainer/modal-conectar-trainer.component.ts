import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrainerSinClient } from '../../../services/trainerService/trainer.service';
import { Client } from '../../../services/clientService/client.service';
import { ConnectionService } from '../../../services/connectionService/connection.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-conectar-trainer',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-conectar-trainer.component.html',
  styleUrl: './modal-conectar-trainer.component.css'
})
export class ModalConectarTrainerComponent implements OnInit {

  constructor(private connectionService: ConnectionService, private fb: FormBuilder) {}

  formularioMensaje!: FormGroup

  @Input() trainer!: TrainerSinClient
  @Input() client!: Client
  @Output() close = new EventEmitter<void>()
  @Output() notificar = new EventEmitter<void>()

  ngOnInit(): void {
    this.formularioMensaje = this.fb.group({
      mensaje: ['']
    })
  }

  cerrarModal() {
    this.close.emit()
  }

  notificarUsuario() {
    this.notificar.emit()
  }

  enviarPeticion() {
    const mensaje = this.formularioMensaje.value.mensaje

    const request = {
      clientId: this.client.id,
      trainerId: this.trainer.id,
      mensaje: mensaje
    }

    const token = localStorage.getItem('token') || ''

    this.connectionService.crearSolicitudConexión(request, token).subscribe({
      next: (response) => {
        console.log('Solicitud de conexión enviada:', response)
        this.cerrarModal()
        this.notificarUsuario()
      },
      error: (error) => {
        console.error('Error al enviar la solicitud de conexión:', error)
      }
    })
  }
}
