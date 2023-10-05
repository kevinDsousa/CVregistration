import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  credentials: LoginModel = {
    email: '',
    password: ''
  };

  BASEURL = environment.BASEURL

  constructor(
    private router: Router,
    private authService: AuthService,
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
      this.credentials = this.loginForm.value as LoginModel;

      this.http.post<LoginModel>(`${this.BASEURL}/user`, this.credentials)
        .subscribe(
          response => {
            this.authService.showMessage('Usuário autenticado:');
          },
          error => {
            this.authService.showMessage('Erro ao autenticar:');
          }
        );
    }
  }
}
