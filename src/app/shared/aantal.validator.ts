import { AbstractControl, ValidatorFn } from '@angular/forms';
export function aantalValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any} | null => {
        const groente = control.get('groente').value;
        const aantal = control.get('aantal').value;
        //Als de groente geen "kg" bevat en het aantal heeft een komma 
        return !groente.toString().includes("kg") && aantal % 1 != 0 ? { "misMatch": true } : null;
    };
}