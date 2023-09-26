import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registercv',
  templateUrl: './registercv.component.html',
  styleUrls: ['./registercv.component.css']
})
export class RegistercvComponent {
  constructor(private router: Router) {}

  navigateToCreateCV(): void {
    console.log();
  }
}
