import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usercrud',
  templateUrl: './usercrud.component.html',
  styleUrls: ['./usercrud.component.css']
})
export class UsercrudComponent {
  constructor(private router: Router) {}

  navigateToCreateCV(): void {
    this.router.navigate(['register/newcv'])
  }

  navigateToCreateUser(): void {
    this.router.navigate(['register/newuser'])
  }
}
