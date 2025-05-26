import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }
}
