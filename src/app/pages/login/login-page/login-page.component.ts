import { Component } from '@angular/core';
import { FormularioLoginComponent } from "../../../components/login/formulario-login/formulario-login.component";
import { HeaderRegistroComponent } from "../../../components/login/header-registro/header-registro.component";

@Component({
  selector: 'app-login-page',
  imports: [FormularioLoginComponent, HeaderRegistroComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
