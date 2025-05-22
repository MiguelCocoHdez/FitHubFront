import { Component, Input } from '@angular/core';

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

  suscripcionPago() {

  }

  suscripcionGratuita() {

  }
}
