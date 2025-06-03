import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TrainerSinClient } from '../../../services/trainerService/trainer.service';
import { FormsModule } from '@angular/forms';
import { Client } from '../../../services/clientService/client.service';

@Component({
  selector: 'app-modal-conectar-trainer',
  imports: [FormsModule],
  templateUrl: './modal-conectar-trainer.component.html',
  styleUrl: './modal-conectar-trainer.component.css'
})
export class ModalConectarTrainerComponent {

  @Input() trainer!: TrainerSinClient
  @Input() client!: Client
  @Output() close = new EventEmitter<void>()

  cerrarModal() {
    this.close.emit()
  }

  enviarPeticion() {
    
  }
}
