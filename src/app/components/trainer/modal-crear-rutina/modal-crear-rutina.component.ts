import { Component, EventEmitter, Output } from '@angular/core';
import { Ejercicio, RutinasService } from '../../../services/rutinasService/rutinas.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-crear-rutina',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-crear-rutina.component.html',
  styleUrl: './modal-crear-rutina.component.css'
})
export class ModalCrearRutinaComponent {

  @Output() close = new EventEmitter<void>()

  crearRuitinaForm!: FormGroup
  ejercicios: Ejercicio[] = []

  constructor(private fb: FormBuilder, private rutinasService: RutinasService) {
    this.crearRuitinaForm = this.fb.group({
      nombreRutina: [''],
      descripcion: [''],
      nivel: [''],
      categoria: [''],
      duracionMins: [''],
      ejercicios: this.fb.array(this.ejercicios)
    })
  }

  cerrarModal() {
    this.close.emit()
  }

  crearRutina() {
    if(this.crearRuitinaForm.valid) {
      console.log(this.crearRuitinaForm.value)
    }
  }
}
