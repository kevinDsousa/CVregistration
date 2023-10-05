import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-updatecv',
  templateUrl: './updatecv.component.html',
  styleUrls: ['./updatecv.component.css']
})
export class UpdatecvComponent implements OnInit {
  updateForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private cvService: CurriculoService) {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      vacancy: ['', Validators.required],
      cpf: ['', Validators.required],
      birthday: [null, Validators.required],
      phone: ['', Validators.required],
      education: ['', Validators.required],
      idskill: [2, Validators.required]
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    if (this.updateForm.valid) {
      const formData = this.updateForm.value;
      this.cvService.update(formData).subscribe(
        (response: any) => {
          this.cvService.showMessage('Dados do currículo atualizados');
        },
        (error: any) => {
          if (error.status === 409) {
            this.cvService.showMessage('Já existe um currículo com estes dados.');
          } else {
            this.cvService.showMessage('Erro ao editar um currículo');
          }
        }
      );
    }
  }

  cancelar() {
  }
}
