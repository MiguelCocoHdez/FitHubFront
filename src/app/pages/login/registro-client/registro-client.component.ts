import { Component } from '@angular/core';
import { FormularioRegistroClientComponent } from "../../../components/login/formulario-registro-client/formulario-registro-client.component";
import { HeaderRegistroComponent } from "../../../components/login/header-registro/header-registro.component";

@Component({
  selector: 'app-registro-client',
  imports: [FormularioRegistroClientComponent, HeaderRegistroComponent],
  templateUrl: './registro-client.component.html',
  styleUrl: './registro-client.component.css'
})
export class RegistroClientComponent {

}
