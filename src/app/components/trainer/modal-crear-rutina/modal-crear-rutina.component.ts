import { Component, EventEmitter, Output } from '@angular/core';
import { Ejercicio } from '../../../services/rutinasService/rutinas.service';

@Component({
  selector: 'app-modal-crear-rutina',
  imports: [],
  templateUrl: './modal-crear-rutina.component.html',
  styleUrl: './modal-crear-rutina.component.css'
})
export class ModalCrearRutinaComponent {

  @Output() close = new EventEmitter<void>()

  ejercicios: Ejercicio[] = []

  constructor() {}

  cerrarModal() {
    this.close.emit()
  }
}
