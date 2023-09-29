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

    /**
   * Função com verbo get para pegar curriculos do backend
   * @returns Retona uma lista de curriculos
   */
  read(): Observable<CurriculumModel[]> {
    return this.http.get<CurriculumModel[]>(this.BASEURL);
  }

  /**
   * Função com verbo get por id para selecionar um curriculo especifico
   * @param id identificador do curriculo
   * @returns Retorna um observavel de curriculo
   */
  readById(id: number): Observable<CurriculumModel> {
    const url = `${this.BASEURL}/${id}`
    return this.http.get<CurriculumModel>(url)
  }

  /**
   * Função que realiza a modificação dos dados de um curriculo
   * @param cv Dados a serem enviados para atualizacao
   * @returns Retorna um observavel para atualizacao de dados do curriculo
   */
  update(cv: CurriculumModel): Observable<CurriculumModel> {
    const url = `${this.BASEURL}/${cv.id}`;
    return this.http.patch<CurriculumModel>(url, cv)
  }

  /**
   * Função que apaga um curriculo
   * @param id identificador
   * @returns Retorna um observavel para apagar um curriculo
   */
  delete(id: number): Observable<CurriculumModel> {
    const url = `${this.BASEURL}/${id}`;
    return this.http.delete<CurriculumModel>(url)
  }
}
