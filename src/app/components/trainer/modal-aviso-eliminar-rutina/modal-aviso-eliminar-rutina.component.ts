import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RutinasService } from '../../../services/rutinasService/rutinas.service';

@Component({
  selector: 'app-modal-aviso-eliminar-rutina',
  imports: [],
  templateUrl: './modal-aviso-eliminar-rutina.component.html',
  styleUrl: './modal-aviso-eliminar-rutina.component.css'
})
export class ModalAvisoEliminarRutinaComponent {

  @Input() nombreRutina!: string
  @Input() id!: number
  @Output() close = new EventEmitter<void>()
  @Output() refrescar = new EventEmitter<void>()

  constructor(private rutinasService: RutinasService, private cdr: ChangeDetectorRef) {}

  cerrarModal() {
    this.close.emit()
  }

  refrescarRutinas() {
    this.refrescar.emit()
  }

  eliminarRutina() {
    const token = localStorage.getItem('token')
    if (token) {
      this.rutinasService.eliminarRutina(this.id, token).subscribe({
        next: () => {
          console.log('Rutina eliminada correctamente')
          this.cerrarModal()
          this.refrescarRutinas()
          this.cdr.detectChanges()
        },
        error: (error) => {
          console.error('Error al eliminar la rutina:', error)
        }
      });
    } else {
      console.error('Token no encontrado en el almacenamiento local')
    }
  }
}
