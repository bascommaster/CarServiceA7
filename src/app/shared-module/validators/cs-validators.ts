import { AbstractControl } from '@angular/forms';

export class CsValidator {

  static power(control: AbstractControl) {

    const minPower = 50;
    const maxPower = 500;

    if (control.value < minPower || control.value > maxPower) {
      return {
        power: true
      };
    }
    return null;
  }
}
