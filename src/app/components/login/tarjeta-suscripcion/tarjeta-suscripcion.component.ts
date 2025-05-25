import { Component, Input, OnInit } from '@angular/core';
import { AuthService, RegistroAuth } from '../../../services/authService/auth.service';
import { firstValueFrom } from 'rxjs';
import { RegistroTrainer, TrainerService } from '../../../services/trainerService/trainer.service';
import { PaymentService } from '../../../services/paymentService/payment.service';

@Component({
  selector: 'app-tarjeta-suscripcion',
  imports: [],
  templateUrl: './tarjeta-suscripcion.component.html',
  styleUrl: './tarjeta-suscripcion.component.css'
})
export class TarjetaSuscripcionComponent {

  @Input() nombrePlan: string = '';
  @Input() subtituloPlan: string = '';
  @Input() precioPlan: string = '';
  @Input() clientes: string = '';
  @Input() gestionRutinas: string = '';
  @Input() calendario: string = '';
  @Input() perfilDestacado: string = '';
  @Input() textoBoton: string = '';

  constructor(private authService: AuthService, private trainerService: TrainerService, private paymentService: PaymentService) {}

  async suscripcionPago() {
    const datosDelForm = JSON.parse(sessionStorage.getItem('registroTrainer')!)

    const datosRegistroAuth: RegistroAuth = {
      nombreusuario: datosDelForm.nombreUsuario,
      contraseña: datosDelForm.contraseña,
      email: datosDelForm.email,
      rol: 'TRAINER'
    }

    const datosRegistroTrainer: RegistroTrainer = {
      nombre: datosDelForm.nombre,
      apellidos: datosDelForm.apellidos,
      tfno: datosDelForm.telefono,
      bio: datosDelForm.bio
    }

    try {
      //Registro en el auth y te da el token
      const authResponse = await firstValueFrom(this.authService.registrarUsuario(datosRegistroAuth))
      const token = authResponse.token

      //Registro en el trainer
      await firstValueFrom(this.trainerService.registrarTrainer(datosRegistroTrainer, token))

      //Redirigir a la pantalla de pago
      const stripeResponse = await firstValueFrom(this.paymentService.suscripcionPremium(token))
      const url = stripeResponse.url

      window.location.href = url

    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  }

  async suscripcionGratuita() {

  }
}
