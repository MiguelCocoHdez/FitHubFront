import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface RegistroTrainer {
  nombre: string
  apellidos: string
  tfno: string
  bio: string
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
}
