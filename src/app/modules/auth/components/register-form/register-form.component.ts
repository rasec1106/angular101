import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(3)])
    },
    {
      validators: passwordMatchValidator
    });
  }
}
  
function passwordMatchValidator(currentForm: AbstractControl | FormGroup):any{
  const valuePassword = currentForm.get('password')?.value;
  const valuePasswordConfirm = currentForm.get('passwordConfirm')?.value;
  return (valuePassword === valuePasswordConfirm ? null : {mismatch: true});
}
