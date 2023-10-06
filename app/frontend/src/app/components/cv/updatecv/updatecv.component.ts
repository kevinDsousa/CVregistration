import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculumModel } from 'src/app/models/curriculum.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-updatecv',
  templateUrl: './updatecv.component.html',
  styleUrls: ['./updatecv.component.css']
})
export class UpdatecvComponent implements OnInit {
  updateForm!: FormGroup;
  cv!: CurriculumModel;
  cvId: number;

  constructor(private formBuilder: FormBuilder, private cvService: CurriculoService, private router: Router,
    private route: ActivatedRoute) {
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
    this.cvId = +this.route.snapshot.paramMap.get('id')!;
  }
  ngOnInit(): void {
    if (!isNaN(this.cvId)) {
      this.cvService.readById(this.cvId).subscribe((cvData: CurriculumModel | null) => {
        if (cvData) {
          this.cv = cvData;

          this.updateForm.patchValue({
            name: this.cv.name,
            email: this.cv.email,
            vacancy: this.cv.vacancy,
            cpf: this.cv.cpf,
            birthday: this.cv.birthday,
            phone: this.cv.phone,
            education: this.cv.education,
          });
        }
      },
        (error: any) => {
          this.cvService.showMessage('Falha ao carregar dados')
        }
      );
    } else {
      this.cvService.showMessage(`ID do curriculo inválido: , ${this.cv.id}`);
    }
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const formData = this.updateForm.value;

      this.cvService.update(this.cvId, formData).subscribe(
        (response: any) => {
          this.cvService.showMessage('Dados do currículo atualizados');
          this.router.navigate(['readcv'])
        },
        (error: any) => {
          this.cvService.showMessage('Erro ao editar o curriculo')
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
