import { Component } from '@angular/core';
import { HeaderRegistroComponent } from "../../../components/login/header-registro/header-registro.component";
import { TarjetaRolComponent } from "../../../components/login/tarjeta-rol/tarjeta-rol.component";

@Component({
  selector: 'app-eleccion-rol',
  imports: [HeaderRegistroComponent, TarjetaRolComponent],
  templateUrl: './eleccion-rol.component.html',
  styleUrl: './eleccion-rol.component.css'
})
export class EleccionRolComponent {

  
}
