import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tarjeta-rol',
  imports: [],
  templateUrl: './tarjeta-rol.component.html',
  styleUrl: './tarjeta-rol.component.css'
})
export class TarjetaRolComponent {

  @Input() icono!: string
  @Input() titulo!: string
  @Input() subtitulo!: string
  @Input() ruta!: string

  constructor(private router: Router) {}

  irRegistro() {
    if(this.ruta) {
      this.router.navigate([this.ruta]);
    }
  }
}
