import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

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
  nombre: string
  descripcion: string
  series: number
  repeticionesMin: number
  repecionesMax: number
}

@Injectable({
  providedIn: 'root'
})

export class RutinasService {
  private apiUrl = environment.apiUrl + '/rutinas'

  constructor(private http: HttpClient) {}

  crearRutina(rutina: Rutina, token: string) {
    return this.http.post(`${this.apiUrl}/crearRutina`, rutina, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }

  verRutinasTrainer(trainerId: number, token: string) {
    return this.http.get<Rutina[]>(`${this.apiUrl}/verRutinasTrainer`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {
        trainerId: trainerId
      }
    })
  }

  eliminarRutina(id: number, token: string) {
    return this.http.delete(`${this.apiUrl}/eliminarRutina`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {
        id: id
      }
    })
  }

  asignarRutina(clientId: number, id: number, token: string) {
    return this.http.post(`${this.apiUrl}/asignarRutina/${clientId}/${id}`, null, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }
}
