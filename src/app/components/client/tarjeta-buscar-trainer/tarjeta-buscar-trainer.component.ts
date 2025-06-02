import { Component, Input } from '@angular/core';
import { TrainerSinClient } from '../../../services/trainerService/trainer.service';

@Component({
  selector: 'app-tarjeta-buscar-trainer',
  imports: [],
  templateUrl: './tarjeta-buscar-trainer.component.html',
  styleUrl: './tarjeta-buscar-trainer.component.css'
})
export class TarjetaBuscarTrainerComponent {

  @Input() trainer!: TrainerSinClient
}
