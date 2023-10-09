import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      admin: [false]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      this.userService.create(userData).subscribe(
        (response: any) => {
          this.userService.showMessage('Novo usuário criado:');
          this.router.navigate(['/dashboard'])
        },
        (error: any) => {
          this.userService.showMessage('Erro ao criar o usuário:');
        }
      );
    }
  }
}
