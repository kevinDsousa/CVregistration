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
  displayedColumns: string[] = ['id', 'name', 'email', 'vacancy', 'cpf', 'birthday', 'phone', 'education', 'action'];

  constructor(private cvService: CurriculoService) { }

  ngOnInit(): void {
    this.cvService.read().subscribe(cv => {
      this.cv = cv;
    })
  }

  transformEducationText(text: string): string {
    return text.replace(/_/g, ' ').toLowerCase();
  }

  formatPhone(phone: string): string {
    if (!phone) return phone;
    const numericValue = phone.replace(/\D/g, '');
    if (numericValue.length >= 11) {
      return `(${numericValue.substring(0, 2)}) ${numericValue.substring(2, 3)} ${numericValue.substring(3, 7)}-${numericValue.substring(7)}`;
    } else {
      return phone;
    }
  }

}
