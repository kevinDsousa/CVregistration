import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      admin: [false]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      this.userService.create(userData).subscribe(
        (response: any) => {
          this.userService.showMessage('Novo usuário criado com sucesso.');
          this.router.navigate(['/readuser']);
        },
        (error: any) => {
          console.error('Erro ao criar o usuário:', error);
          if (error.status === 409) {
            this.userService.showMessage('Já existe um usuário com este email.');
          } else {
            this.userService.showMessage('Erro ao criar o usuário.');
          }
        }
      );
    }
  }
}
