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
  @Output() rutinaCreada = new EventEmitter<void>()

  crearRutinaForm!: FormGroup
  crearEjercicioForm!: FormGroup

  ejercicios: Ejercicio[] = []

  constructor(private fb: FormBuilder, private rutinasService: RutinasService) {
    this.crearRutinaForm = this.fb.group({
      nombre: [''],
      descripcion: [''],
      nivel: [''],
      categoria: [''],
      duracionMins: [''],
      ejercicios: this.fb.array([]),
      trainerId: ['']
    })

    this.crearEjercicioForm = fb.group({
      nombre: [''],
      descripcion: [''],
      series: [''],
      repeticionesMin: [''],
      repecionesMax: ['']
    })
  }

  cerrarModal() {
    this.close.emit()
  }

  avisoRutinaCreada() {
    this.rutinaCreada.emit()
  }

  crearRutina() {
    if(this.crearRutinaForm.valid) {
      this.crearRutinaForm.value.ejercicios = this.ejercicios
      const trainer = JSON.parse(localStorage.getItem('trainer') || '{}')
      this.crearRutinaForm.value.trainerId = trainer.id
      
      this.rutinasService.crearRutina(this.crearRutinaForm.value, localStorage.getItem('token') || '').subscribe({
        next: (response) => {
          console.log('Rutina creada con éxito:', response)
          this.cerrarModal()
          this.avisoRutinaCreada()
        },
        error: (error) => {
          console.error('Error al crear la rutina:', error)
        }
      })
    }
  }

  agregarEjercicio() {
    if(this.crearEjercicioForm.valid) {
      const nuevoEjercicio: Ejercicio = this.crearEjercicioForm.value
      
      this.ejercicios.push(nuevoEjercicio)
      
      this.crearEjercicioForm.reset()
    }
  }

  eliminarEjercicio(indice: number) {
    if (indice >= 0 && indice < this.ejercicios.length) {
      this.ejercicios.splice(indice, 1)
    }
  }
}
