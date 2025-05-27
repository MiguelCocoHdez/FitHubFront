import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent implements OnInit {

  formularioLogin!: FormGroup
  
  flagCorreo: boolean = false
  mensajeCorreo!: string

  flagContra: boolean = false
  mensajeContra!: string

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.formularioLogin = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  irAlDashboard() {
    if(this.formularioLogin.valid) {
      const datosLogin = this.formularioLogin.value

      this.authService.loginUsuario(datosLogin).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token)

          if(response.rol == 'TRAINER') {
            this.router.navigate(['/trainer/dashboard'])
          }

          //Hacer navigate de cliente a su dashboard
        },
        error: (error) => {
          console.log(error)
          if(error.status == 420) {
            this.mensajeCorreo = error.error.mensaje
            this.flagCorreo = true
            this.flagContra = false

            this.cdr.detectChanges()
          }

          if(error.status == 421) {
            this.mensajeContra = error.error.mensaje
            this.flagContra = true
            this.flagCorreo = false

            this.cdr.detectChanges()
          }
        }
      })
    }
    else {
      this.formularioLogin.markAllAsTouched();
    }
  }
}
