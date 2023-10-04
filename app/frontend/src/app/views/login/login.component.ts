import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
import { LoginModel } from 'src/app/models/login.model';

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

  constructor(
    private router: Router,
    private userService: UsersService,
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

      this.http.post<any>('http://localhost:3000/user', this.credentials)
        .subscribe(
          response => {
            this.userService.showMessage('Usuário autenticado:');
          },
          error => {
            this.userService.showMessage('Erro ao autenticar:');
          }
        );
    }
  }
}
