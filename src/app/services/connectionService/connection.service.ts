import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface RequestConnection {
  clientId: number
  trainerId: number
  mensaje: string 
}

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private apiUrl = environment.apiUrl+"/connection"

  constructor(private http: HttpClient) {}

  crearSolicitudConexión(request: RequestConnection, token: string) {
    return this.http.post(`${this.apiUrl}/solicitarTrainer`, request, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      responseType: 'text'
    })
  }
}
