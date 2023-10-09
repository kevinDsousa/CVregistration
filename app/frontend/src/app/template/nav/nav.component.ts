import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  tokenData: any;
  imageUrl!: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.tokenData = jwt_decode(token);
      const userEmail = this.tokenData.email;
      const gravatarUrl = `https://www.gravatar.com/avatar/${userEmail}?s=50`;
      this.imageUrl = gravatarUrl;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
