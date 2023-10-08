import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, delay, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASEURL = environment.BASEURL
  isLoggedIn: boolean = Boolean(localStorage.getItem("auth"));

  redirectUrl: string | null = null;

  constructor(private snackbar: MatSnackBar, private http: HttpClient){}

  /**
   * Função modelo injectable que recebe uma mensagem e retornar um snackbar
   * @param msg Mensagem para passar via injectable
   */
  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  login(credencials: any) {
    return this.http.post(`${this.BASEURL}/login`, credencials)
  }

  logout(): void {
    localStorage.removeItem("auth")

    this.isLoggedIn = false
  }
}
