import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersModel } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {

  constructor(private userService: UsersService, private router: Router){}

  user: UsersModel = {
    name: '',
    email: '',
    cpf: '',
    birday: '',
    phone: '',
    password: '',
    education: 'FUNDAMENTAL_COMPLETO',
    idskill: 0
  }

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage('Curriculo cadastrado com sucesso');
      this.router.navigate(['/register'])
    })
  }

  cancelar() {
    this.router.navigate(['/register'])
  }
}
