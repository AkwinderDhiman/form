import { FormGroup } from '@angular/forms';

export function Validation(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName]
        if (matchingControl.errors && !matchingControl.errors.validation) {
             return;
        }

         if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ validation: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
