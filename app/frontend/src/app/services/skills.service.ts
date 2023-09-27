import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SkillsModel } from '../models/skills.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  public readonly BASEURL = `${environment.BASEURL}/skills`

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
   * Função que cria um usuário atraves de um observable
   * @param skills Onjeto de skills
   * @returns Retorna um observable modelo skills
   */
  create(skills: SkillsModel): Observable<SkillsModel> {
    return this.http.post<SkillsModel>(this.BASEURL, skills);
  }

}
