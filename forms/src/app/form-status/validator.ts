export class Validator {
    static emailValidator(control) {
        if (!control.value.match(/\S+@\S+\.\S+/)) {
            return { emailValidator: true };
        } else {
            return null;
        }
    }
}
