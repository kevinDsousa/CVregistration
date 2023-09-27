import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurriculumModel } from 'src/app/models/curriculum.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-newcv',
  templateUrl: './newcv.component.html',
  styleUrls: ['./newcv.component.css']
})
export class NewcvComponent implements OnInit {
  constructor(private cvService: CurriculoService, private router: Router) {}

  cv: CurriculumModel = {
    vacancy: 'Desenvolvedor pleno',
    iduser: 6
  }

  ngOnInit(): void {}

  createUser(): void {
    this.cvService.create(this.cv).subscribe(() => {
      this.cvService.showMessage('Curriculo cadastrado com sucesso');
      this.router.navigate(['/register'])
    })
  }

  cancelar() {
    this.router.navigate(['/register'])
  }
}
