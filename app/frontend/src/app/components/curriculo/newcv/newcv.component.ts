import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurriculumModel } from 'src/app/models/curriculum.model';
import { CurriculoService } from 'src/app/services/curriculo.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-newcv',
  templateUrl: './newcv.component.html',
  styleUrls: ['./newcv.component.css']
})
export class NewcvComponent implements OnInit {
  constructor(private cvService: CurriculoService, private skillsService: SkillsService, private router: Router) {}

  cv: CurriculumModel = {
    vacancy: 'Desenvolvedor pleno',
    iduser: 6,
    user: {
      name: 'kevin',
      email: 'string',
      cpf: 'string',
      birday: 'string',
      phone: 'string',
      password: 'string',
      education: 'FUNDAMENTAL_COMPLETO',
      skill: {nameSkill: 'java'},
      idskill: 1,
    },
  }

  ngOnInit(): void {}

  createUser(): void {
    this.cvService.create(this.cv).subscribe(() => {
      this.cvService.showMessage('Curriculo cadastrado com sucesso');
      // this.router.navigate(['/register'])
    })
  }

  cancelar() {
    this.router.navigate(['/register'])
  }
}
