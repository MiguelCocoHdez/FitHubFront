import { Component } from '@angular/core';
import { HeaderRegistroComponent } from "../../../components/login/header-registro/header-registro.component";
import { FormularioRegistroTrainerComponent } from "../../../components/login/formulario-registro-trainer/formulario-registro-trainer.component";

@Component({
  selector: 'app-registro-trainer',
  imports: [HeaderRegistroComponent, FormularioRegistroTrainerComponent],
  templateUrl: './registro-trainer.component.html',
  styleUrl: './registro-trainer.component.css'
})
export class RegistroTrainerComponent {

}
