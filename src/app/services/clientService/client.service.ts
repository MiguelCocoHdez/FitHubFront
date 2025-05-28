import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface Client {
  id: number
  nombre: string
  apellidos: string
  email: string
  tfno: number
  bio: string
  foto: string
  fechacreacion: string
  genero: string
}

export interface ClientRegister {
  nombre: string
  apellidos: string
  tfno: string
  bio: string
  genero: string
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = environment.apiUrl + '/client'

  constructor(private http: HttpClient) { }

  registrarClient(client: ClientRegister, token: string) {
    return this.http.post(`${this.apiUrl}/register`, client, {
      headers: { 
        Authorization: `Bearer ${token}` 
      },
      responseType: 'text'
    })
  }
}
