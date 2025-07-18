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
  crearEjercicioForm!: FormGroup

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

    this.crearEjercicioForm = fb.group({
      nombre: [''],
      descripcionEjercicio: [''],
      series: [''],
      repeticionesMin: [''],
      repecionesMax: ['']
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

  agregarEjercicio() {
    if(this.crearEjercicioForm.valid) {
      const nuevoEjercicio: Ejercicio = this.crearEjercicioForm.value
      this.ejercicios.push(nuevoEjercicio)
      this.crearEjercicioForm.reset()
      console.log('Ejercicio añadido:', nuevoEjercicio)
    }
  }

  eliminarEjercicio(indice: number) {
    if (indice >= 0 && indice < this.ejercicios.length) {
      this.ejercicios.splice(indice, 1)
    }
  }
}
