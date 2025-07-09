import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Rutina } from '../../../services/rutinasService/rutinas.service';
import { CommonModule } from '@angular/common';
import { ModalAvisoEliminarRutinaComponent } from "../modal-aviso-eliminar-rutina/modal-aviso-eliminar-rutina.component";

@Component({
  selector: 'app-cards-rutinas',
  imports: [CommonModule, ModalAvisoEliminarRutinaComponent],
  templateUrl: './cards-rutinas.component.html',
  styleUrl: './cards-rutinas.component.css'
})
export class CardsRutinasComponent {

  @Input() rutina!: Rutina
  @Output() refrescar = new EventEmitter<void>()

  mostrarModal = signal(false)

  accionModal() {
    this.mostrarModal.update((valor) => !valor)
    console.log('Modal toggled:', this.mostrarModal());
  }

  refrescarRutinas() {
    this.refrescar.emit()
  }
  
}
