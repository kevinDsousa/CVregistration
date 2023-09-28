import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculumModel } from 'src/app/models/curriculum.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-updatecv',
  templateUrl: './updatecv.component.html',
  styleUrls: ['./updatecv.component.css']
})
export class UpdatecvComponent implements OnInit{
  constructor(private cvService: CurriculoService, private router: Router, private route: ActivatedRoute) { }

  cv!: CurriculumModel;

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id')
    if (id !== null) {
      this.cvService.readById(id).subscribe((cv) => {
        this.cv = cv;
      })
    }
  }

  cancelar() {
    this.router.navigate(['/register']);
  }

  updateCv() {
    this.cvService.update(this.cv).subscribe(() => {
      this.cvService.showMessage('Curriculo atualizado com sucesso')
      this.router.navigate(['/register'])
    })
  }

}
