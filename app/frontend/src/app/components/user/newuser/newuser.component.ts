import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersModel } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  newuserForm!: FormGroup<any>;
  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.newuserForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      birday: new FormControl('', [Validators.required]),
      education: new FormControl('', [Validators.required]),
      admin: new FormControl(''),
      skills: new FormControl(''),
    })
  }

  submit() {
    if (this.newuserForm.invalid) {
      return;
    }

    console.log('enviou');
  }
  createUser(): void {
    if (this.newuserForm.invalid) {
      return;
    }
    const formData = this.newuserForm.value;

    const user: UsersModel = {
      id: formData.id,
      name: formData.name,
      email: formData.email,
      cpf: formData.cpf,
      birday: formData.birday,
      phone: formData.phone,
      password: formData.password,
      education: formData.education,
      idskill: formData.idskill,
      skills: formData.skills,
    };

    this.userService.create(user).subscribe(() => {
      this.userService.showMessage('Currículo cadastrado com sucesso');
      console.log(user);
      // this.router.navigate(['/registercv']);
    });
  }


  cancelar() {
    this.router.navigate(['/registercv'])
  }

}
