import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

@Injectable({
    providedIn: "root"
})

export class ValidacionesCustom {
    
    ValidacionContraseñas(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      const password = form.get('contraseña')?.value;
      const confirmPassword = form.get('repetirContraseña')?.value;
      if (password && confirmPassword && password !== confirmPassword) {
        return { noCoincide: true };
      }
      return null;
    };
  }
}