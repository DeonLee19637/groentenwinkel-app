import { AbstractControl, ValidatorFn } from '@angular/forms';
export function aantalValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any} | null => {
        const groente = control.get('groente');
        const aantal = control.get('aantal');

        console.log(groente);
        return groente && aantal && groente.value != "kg" ? { 'mismatch': true } : null;
    };
}