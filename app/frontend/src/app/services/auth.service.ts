import { MatSnackBar } from '@angular/material/snack-bar'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASEURL = `${environment.BASEURL}/user`;
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

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

  login(credentials: any): Observable<any> {
    return this.http.get(`${this.BASEURL}`, { params: credentials });
  }

  private loggedInUserSubject = new BehaviorSubject<string>('');

  loggedInUser$ = this.loggedInUserSubject.asObservable();

  setLoggedInUser(username: string) {
    this.loggedInUserSubject.next(username);
  }

  register(newUserCredentials: any): Observable<any> {
    return this.http.post(`${this.BASEURL}`,  newUserCredentials);
  }

}
