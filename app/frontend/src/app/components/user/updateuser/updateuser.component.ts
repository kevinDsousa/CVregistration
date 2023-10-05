import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersModel } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  registerForm: FormGroup;
  user!: UsersModel;
  userId: number;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router,
    private route: ActivatedRoute) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      admin: [false]
    });

    this.userId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    if (!isNaN(this.userId)) {
      this.userService.readById(this.userId).subscribe(
        (userData: UsersModel | null) => {
          if (userData) {
            this.user = userData;

            this.registerForm.patchValue({
              name: this.user.name,
              email: this.user.email,
              password: '',
              admin: this.user.admin
            });
          }
        },
        (error: any) => {
          console.error('Erro ao carregar o usuário:', error);
        }
      );
    } else {
      console.error('ID do usuário inválido:', this.userId);
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      this.userService.update(this.userId, userData).subscribe(
        (response: any) => {
          this.userService.showMessage('Usuário editado com sucesso.');
        },
        (error: any) => {
          this.userService.showMessage('Erro ao editar o usuário:');
          if (error.status === 409) {
            this.userService.showMessage('Já existe um usuário com este email.');
          } else {
            this.userService.showMessage('Erro ao alterar os dados do usuário.');
          }
        }
      );
    }
  }
}
