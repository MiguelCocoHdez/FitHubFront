import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Client } from '../clientService/client.service';

export interface RegistroTrainer {
  nombre: string
  apellidos: string
  tfno: string
  bio: string
}

export interface Trainer {
  id: number
  nombre: string
  apellidos: string
  email: string
  tfno: number
  bio: string
  foto: string
  fechacreacion: string
  plan: string
  clientes: Client[]
}

export interface TrainerSinClient {
  id: number
  nombre: string
  apellidos: string
  email: string
  tfno: number
  bio: string
  foto: string
  fechacreacion: string
}

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private apiUrl = environment.apiUrl+'/trainer'

  constructor(private http: HttpClient) {}

  registrarTrainer(trainer: RegistroTrainer, token: string) {
    return this.http.post(`${this.apiUrl}/register`, trainer, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      responseType: 'text'
    })
  }

  verTrainer(token: string) {
    return this.http.get<Trainer>(`${this.apiUrl}/verTrainer`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  verTodosTrainers() {
    return this.http.get<TrainerSinClient[]>(`${this.apiUrl}/verTodosTrainers`);
  }
}
