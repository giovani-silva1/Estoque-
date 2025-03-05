import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loginCard = true;

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  createAccountForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmitLoginForm(): void {
    console.log('DADOS DO FORMULARIO DE LOGIN', this.loginForm.value);
  }

  onSubmitCreateAccount(): void {
    console.log(
      'DADOS DE CRIAÇÃO DE CONTA REALIZADO',
      this.createAccountForm.value
    );
  }
}
