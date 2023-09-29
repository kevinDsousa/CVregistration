import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculumModel } from 'src/app/models/curriculum.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-deletecv',
  templateUrl: './deletecv.component.html',
  styleUrls: ['./deletecv.component.css']
})
export class DeletecvComponent implements OnInit {
  cv!: CurriculumModel;

  constructor(private cvService: CurriculoService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      if (!isNaN(id)) {
        this.cvService.readById(id).subscribe(cv => {
          this.cv = cv;
        });
      } else {
        this.cvService.showMessage('id invalido')
        return
      }
    } else {
      this.cvService.showMessage('id null')
      return
    }
  }

  cancelar(): void {
    this.router.navigate(['/register'])
  }
  deleteCV(): void {
    if (this.cv && this.cv.id !== undefined) {
      this.cvService.delete(this.cv.id).subscribe(() => {
        this.cvService.showMessage('Currículo apagado com sucesso');
        this.router.navigate(['/register']);
      });
    } else {
      this.cvService.showMessage('Não foi possível apagar o currículo');
    }
  }

}
