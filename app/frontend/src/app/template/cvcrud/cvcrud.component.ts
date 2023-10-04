import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cvcrud',
  templateUrl: './cvcrud.component.html',
  styleUrls: ['./cvcrud.component.css']
})
export class CvcrudComponent {
  constructor(private router: Router) {}

  navigateToCreateCV(): void {
    this.router.navigate(['register/newcv'])
  }

  navigateToCreateUser(): void {
    this.router.navigate(['register/newuser'])
  }
}
