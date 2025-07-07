import { Injectable } from '@angular/core';

export interface Rutina {
  id: number
  nombre: string
  descripcion: string
  nivel: string
  categoria: string
  duracionMins: number
  ejercicios: Ejercicio[]
  fechaCreacion: Date
  ultimaActualizacion: Date
  trainerId: number
}

export interface Ejercicio {
  id: number
  nombre: string
  descripcion: string
  series: number
  repeticionesMin: number
  repeticionesMax: number
}

@Injectable({
  providedIn: 'root'
})
export class RutinasService {

  constructor() { }
}
