import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Verifica se o token está presente no localStorage
    const token = localStorage.getItem('access_token');
    if (token) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}
