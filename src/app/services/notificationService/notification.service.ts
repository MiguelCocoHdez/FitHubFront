import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../clientService/client.service';
import { environment } from '../../../environments/environment';

export interface NotificacionesTrainer {
  id: number
  mensaje: string
  cliente: Client
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = environment.apiUrl+'/notification'

  constructor(private http: HttpClient) {}

  verNotificacionesTrainer(trainerId: number, token: string) {
    return this.http.get<NotificacionesTrainer[]>(`${this.apiUrl}/verPeticionesTrainer`, {
      params: { 
        trainerId : trainerId
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  aceptarPeticion(idPeticion: number, token: string) {
    return this.http.put(`${this.apiUrl}/aceptarPeticion`, {}, {
      params: {
        idPeticion: idPeticion
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  rechazarPeticion(idPeticion: number, token: string) {
    return this.http.put(`${this.apiUrl}/rechazarPeticion`,{} , {
      params: {
        idPeticion: idPeticion
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
