import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculumModel } from 'src/app/models/curriculum.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-deletecv',
  templateUrl: './deletecv.component.html',
  styleUrls: ['./deletecv.component.css']
})
export class DeletecvComponent {
  cv!: CurriculumModel;

  cancelar() {
    this.router.navigate(['/register'])
  }
  deleteCV() {
    this.cvService.update(this.cv).subscribe(() => {
      this.cvService.showMessage('Curriculo apagado com sucesso')
      this.router.navigate(['/register'])
    })
  }
  constructor(private cvService: CurriculoService, private router: Router, private route: ActivatedRoute) { }

}
