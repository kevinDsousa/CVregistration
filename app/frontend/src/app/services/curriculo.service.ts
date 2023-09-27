import { Injectable } from '@angular/core';
import { CurriculumModel } from '../models/curriculum.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

  public readonly BASEURL = `${environment.BASEURL}/curriculo`

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  /**
   * Função modelo injectable que recebe uma mensagem e retornar um snackbar
   * @param msg Mensagem para passar via injectable
   */
    showMessage(msg: string): void {
      this.snackbar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      })
    }

  /**
   * Função que cria um curriculo atraves de um modelo e um observable
   * @param cv Objeto de curriculo
   * @returns Retorna um observable de curriculo
   */
  create(cv: CurriculumModel): Observable<CurriculumModel> {
    return this.http.post<CurriculumModel>(this.BASEURL, cv);
  }
}
