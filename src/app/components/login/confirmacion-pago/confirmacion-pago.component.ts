import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion-pago',
  imports: [],
  templateUrl: './confirmacion-pago.component.html',
  styleUrl: './confirmacion-pago.component.css'
})
export class ConfirmacionPagoComponent {

  constructor(private route: Router) {}

  irAlDashboard() {
    this.route.navigate(['/trainer/dashboard'])
  }
}
