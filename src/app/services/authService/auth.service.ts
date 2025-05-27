import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface RegistroAuth {
  nombreusuario: string
  contraseña: string
  email: string
  rol: string
}

export interface Login {
  email: string
  contraseña: string
}

export interface AuthTokenResponse {
  token: string
}

export interface LoginResponse {
  token: string
  rol: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/auth'

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: RegistroAuth) {
    return this.http.post<AuthTokenResponse>(`${this.apiUrl}/register`, usuario);
  }

  loginUsuario(login: Login) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, login);
  }
}
