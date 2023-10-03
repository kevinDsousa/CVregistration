import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  acessar() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      this.http.post<any>('http://localhost:3000/user', credentials)
        .subscribe(
          response => {
            console.log('Usuário autenticado:', response);
          },
          error => {
            console.error('Erro ao autenticar:', error);
          }
        );
    }
  }
}
