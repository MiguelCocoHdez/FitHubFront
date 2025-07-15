import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-crear-rutina',
  imports: [],
  templateUrl: './modal-crear-rutina.component.html',
  styleUrl: './modal-crear-rutina.component.css'
})
export class ModalCrearRutinaComponent {

  @Output() close = new EventEmitter<void>()

  cerrarModal() {
    this.close.emit()
  }
}
