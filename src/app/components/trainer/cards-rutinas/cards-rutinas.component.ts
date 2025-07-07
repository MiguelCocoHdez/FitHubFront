import { Component, Input } from '@angular/core';
import { Rutina } from '../../../services/rutinasService/rutinas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-rutinas',
  imports: [CommonModule],
  templateUrl: './cards-rutinas.component.html',
  styleUrl: './cards-rutinas.component.css'
})
export class CardsRutinasComponent {

  @Input() rutina!: Rutina
}
