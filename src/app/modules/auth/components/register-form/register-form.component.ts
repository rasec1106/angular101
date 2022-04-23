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
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(3)]),
      aboutMe: new FormControl('', [Validators.required, Validators.minLength(3)])
    },
    {
      validators: passwordMatchValidator
    });
  }

  testLoaded():void{
    const mockData = {
      email: 'test@test.com',
      name: 'Cesar',
      lastName: 'Herrera',
      phone: '5555555',
      aboutMe: 'Hello, im a frontend developer'
    }

    this.registerForm.setValue(mockData); // to set 
  }

  testUploaded():void{
    const mockData = {
      phone: '1111111'
    }

    this.registerForm.patchValue(mockData); // to update only the attributes of the object
  }
}
  
function passwordMatchValidator(currentForm: AbstractControl | FormGroup):any{
  const valuePassword = currentForm.get('password')?.value;
  const valuePasswordConfirm = currentForm.get('passwordConfirm')?.value;
  return (valuePassword === valuePasswordConfirm ? null : {mismatch: true});
}
