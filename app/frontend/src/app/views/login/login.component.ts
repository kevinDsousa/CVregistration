import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment.development';
import { UsersService } from 'src/app/services/users.service';

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
  formLogin: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })

    if(this.authService.isLoggedIn) {
      this.router.navigate(['dashboard']);
    }
  }

  getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  acessar() {
    if (this.loginForm.valid) {
      this.credentials = this.loginForm.value as LoginModel;
      this.http.post<any>(`${this.BASEURL}/login`, this.credentials)
        .subscribe(
          response => {
            if (response.access_token) {
              localStorage.setItem('token', response.access_token);
              if (response.admin) {
                this.router.navigate(['dashboard']);
              } else {
                this.router.navigate(['user']);
              }
            } else {
              this.authService.showMessage('Token de acesso não encontrado na resposta.');
            }
          },
          error => {
            this.authService.showMessage('Erro ao autenticar: ' + error.message);
          }
        );
    }
  }

}
