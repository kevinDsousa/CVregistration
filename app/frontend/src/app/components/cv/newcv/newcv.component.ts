import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-newcv',
  templateUrl: './newcv.component.html',
  styleUrls: ['./newcv.component.css']
})
export class NewcvComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private cvService: CurriculoService) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      vacancy: ['', Validators.required],
      cpf: ['', Validators.required],
      birthday: [null, Validators.required],
      phone: ['', Validators.required],
      education: ['', Validators.required],
      idskill: [1, Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      this.cvService.create(userData).subscribe(
        (response: any) => {
          this.cvService.showMessage('Novo currículo criado com sucesso.');
        },
        (error: any) => {
          this.cvService.showMessage('Erro ao criar o currículo');
          if (error.status === 409) {
            this.cvService.showMessage('Já existe um currículo com este email.');
          } else {
            this.cvService.showMessage('Erro ao criar o currículo.');
          }
        }
      );
    }
  }
}
