import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidacionesCustom } from '../../../validaciones/validaciones-custom';
import { Router } from '@angular/router';
import { AuthService, AuthTokenResponse, RegistroAuth } from '../../../services/authService/auth.service';
import { ClientRegister, ClientService } from '../../../services/clientService/client.service';
import { first, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-formulario-registro-client',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-registro-client.component.html',
  styleUrl: './formulario-registro-client.component.css'
})
export class FormularioRegistroClientComponent implements OnInit {

  registroClient!: FormGroup

  constructor(private fb: FormBuilder, private validacionesCustom: ValidacionesCustom, private route: Router, private authService: AuthService, private clientSerivice: ClientService) {}

  ngOnInit(): void {
    this.registroClient = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
      repetirContraseña: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      nombreUsuario: ['', [Validators.required, Validators.minLength(3)]],
      bio: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      chekbox: [false, [Validators.requiredTrue]]
    }, { validators: this.validacionesCustom.ValidacionContraseñas() })
  }

  async irADashboard() {
    if (this.registroClient.valid) {
      console.log(this.registroClient.value)
      
      const datosDelForm = this.registroClient.value

      const datosRegistroAuth: RegistroAuth = {
        nombreusuario: datosDelForm.nombreUsuario,
        contraseña: datosDelForm.contraseña,
        email: datosDelForm.email,
        rol: 'USER'
      }

      const datosRegistroClient: ClientRegister = {
        nombre: datosDelForm.nombre,
        apellidos: datosDelForm.apellidos,
        tfno: datosDelForm.telefono,
        bio: datosDelForm.bio,
        genero: datosDelForm.genero
      }

      try {
        const authResponse: AuthTokenResponse = await firstValueFrom(this.authService.registrarUsuario(datosRegistroAuth))
        const token = authResponse.token

        await firstValueFrom(this.clientSerivice.registrarClient(datosRegistroClient, token))
        localStorage.setItem('token', token)

        this.route.navigate(['/client/dashboard'])

      } catch (error) {
        console.error('Error al registrar el cliente:', error)
      }
    }
    else {
      this.registroClient.markAllAsTouched();
    }
  }
}
