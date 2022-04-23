import { delay, map, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthTestService {

  constructor() { }

  uniqueEmailValidator(): AsyncValidatorFn{
    return (control:AbstractControl): Observable<ValidationErrors | null> => {
      // TODO: the value of the form object
      return of(control.value)
      .pipe(
        delay(1500),
        map(email=>{
          const emails = ['test@test.com', 'hola@gmail.com'];
          return emails.includes(email);
        })
      ).pipe(
        map(exists => (exists ? {emailExists: true} : null))
      )
    }
  }
}
