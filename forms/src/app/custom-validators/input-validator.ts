import { FormControl }    from '@angular/forms';

export class InputValidator {

  static startsWithNumber(control: FormControl) {
    var valid = /^\d/.test(control.value);
    if (valid && control.value != "" && !isNaN(control.value.charAt(0))) {
      return { startsWithNumber: true };
    }
    return null;
  }
  
}