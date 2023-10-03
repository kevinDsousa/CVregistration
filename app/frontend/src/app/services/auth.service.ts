// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.BASEURL}/user`;
  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.get(`${this.apiUrl}`, { params: credentials });
  }

  private loggedInUserSubject = new BehaviorSubject<string>('');

  loggedInUser$ = this.loggedInUserSubject.asObservable();

  setLoggedInUser(username: string) {
    this.loggedInUserSubject.next(username);
  }

  register(newUserCredentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`,  newUserCredentials);
  }

}
