import { Component } from '@angular/core';
import { CurriculumModel } from 'src/app/models/curriculum.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-readcv',
  templateUrl: './readcv.component.html',
  styleUrls: ['./readcv.component.css']
})
export class ReadcvComponent {
  cv: CurriculumModel[] = [];
  displayedColumns: string[] = ['id', 'vacancy', 'userName', 'userEmail', 'userPhone', 'userEducation', 'userSkills', 'action'];

  constructor(private cvService: CurriculoService) {}

  ngOnInit(): void {
    this.cvService.read().subscribe(cv => {
      this.cv = cv;
    })
  }
}
