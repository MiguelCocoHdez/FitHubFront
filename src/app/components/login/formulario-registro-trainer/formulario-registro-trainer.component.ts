import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { ValidacionesCustom } from '../../../validaciones/validaciones-custom';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-formulario-registro-trainer',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-registro-trainer.component.html',
  styleUrl: './formulario-registro-trainer.component.css'
})
export class FormularioRegistroTrainerComponent implements OnInit {
  registroTrainer!: FormGroup

  constructor(private fb: FormBuilder, private validacionesCustom: ValidacionesCustom, private route: Router) {}
  
  ngOnInit(): void {
    this.registroTrainer = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
      repetirContraseña: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      nombreUsuario: ['', [Validators.required, Validators.minLength(3)]],
      bio: ['', [Validators.required]],
      chekbox: [false, [Validators.requiredTrue]]
    }, { validators: this.validacionesCustom.ValidacionContraseñas() })
  }

  irAPantallaPago() {
    if (this.registroTrainer.valid) {
      console.log(this.registroTrainer.value)
      
      sessionStorage.setItem('registroTrainer', JSON.stringify(this.registroTrainer.value))

      this.route.navigate(['/register/trainer/suscripcion'])
    }
    else {
      this.registroTrainer.markAllAsTouched();
    }
  }
}
