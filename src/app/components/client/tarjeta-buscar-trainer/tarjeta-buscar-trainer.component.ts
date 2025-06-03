import { ChangeDetectorRef, Component, Input, signal } from '@angular/core';
import { TrainerSinClient } from '../../../services/trainerService/trainer.service';
import { ModalConectarTrainerComponent } from "../modal-conectar-trainer/modal-conectar-trainer.component";
import { Client } from '../../../services/clientService/client.service';

@Component({
  selector: 'app-tarjeta-buscar-trainer',
  imports: [ModalConectarTrainerComponent],
  templateUrl: './tarjeta-buscar-trainer.component.html',
  styleUrl: './tarjeta-buscar-trainer.component.css'
})
export class TarjetaBuscarTrainerComponent {

  constructor(private cdr: ChangeDetectorRef) {}

  @Input() trainer!: TrainerSinClient
  @Input() client!: Client

  mostrarModal = signal(false)

  accionModal() {
    this.mostrarModal.update((valor) => !valor)
  }
}
